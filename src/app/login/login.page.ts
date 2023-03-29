import { Component, OnInit } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { doc, Firestore, getDoc, setDoc } from '@angular/fire/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController, MenuController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';
import { Keyboard, KeyboardResize  } from '@capacitor/keyboard';
import { Capacitor } from '@capacitor/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {

  credentials! : FormGroup;
  showOthers = true;
  isRescuer = false;

  constructor(
    private fb: FormBuilder,
    private loadingController: LoadingController,
    private alertController: AlertController,
    private authService: AuthService,
    private router: Router,
    private menuCtrl: MenuController,
    public firestore: Firestore,
    public auth: Auth
  ) {
  }

  // Easy access for form fields
  get email() {
    return this.credentials.get('email');
  }

  get password() {
    return this.credentials.get('password');
  }
  
  ionViewWillEnter() {
    this.menuCtrl.enable(false);
   }

  ngOnInit() {
    const isAvailable = Capacitor.isPluginAvailable('Keyboard');
    if(isAvailable){
      Keyboard.addListener('keyboardDidShow', ()=> {
        this.showOthers = false;
      });

      Keyboard.addListener('keyboardDidHide', ()=> {
        this.showOthers = true;
      });
    }

    // this.menuCtrl.enable(false);
    this.credentials = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });

    if(this.authService.getAuth.currentUser != null){
      this.authService.logout();
    }    
  }

  async register() {
    const loading = await this.loadingController.create();
    await loading.present();

    const user = await this.authService.register(this.credentials.value);
    await loading.dismiss();

    if (user) {
      if(this.isRescuer){
        await setDoc(doc(this.firestore, "admins", user.user.uid), {email: this.email!.value}, {merge: true});
        await setDoc(doc(this.firestore, "locations", user.user.uid), {
          isAdmin: true,
        },  {merge: true });
      }
      await this.router.navigateByUrl('/home', {replaceUrl: true});
    } else {
      await this.showAlert('Registration failed', 'Please try again!');
    }
  }

  async login() {
    const loading = await this.loadingController.create();
    await loading.present();

    const user = await this.authService.login(this.credentials.value);
    await loading.dismiss();

    if (user) {
      const docRef = doc(this.firestore, "admins", this.auth.currentUser!.uid);
      const docSnap = await getDoc(docRef);

      if(docSnap.exists()){
        if (this.isRescuer){
          await setDoc(doc(this.firestore, "locations", this.auth.currentUser!.uid), {
            isAdmin: true,
          },  {merge: true });

          await this.router.navigateByUrl('/home', {replaceUrl: true});
        }
        else{
          await this.auth.signOut();
          await this.showAlert('Login failed', 'Not a rescuer');
        }
      }
      else{
        if(!this.isRescuer){
          await this.router.navigateByUrl('/home', {replaceUrl: true});
        }
        else{
          await this.auth.signOut();
          await this.showAlert('Login failed', 'Not a rescuer');
        }
      }
    } else {
      await this.showAlert('Login failed', 'Please try again!');
    }
  }

  async showAlert(header:string, message:string) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK']
    });
    await alert.present();
  }

  onChange(event: any) {
    this.isRescuer = event.target.checked;
  }
}
