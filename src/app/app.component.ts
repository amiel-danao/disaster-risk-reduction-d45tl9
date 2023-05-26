import { Component } from '@angular/core';
import { onAuthStateChanged } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import { FirebaseApp } from '@angular/fire/app';
import { Platform } from '@ionic/angular';
import {
  ActionPerformed,
  PushNotificationSchema,
  PushNotifications,
  Token,
} from '@capacitor/push-notifications';
import {
  onMessage,
  getToken,
  getMessaging,
} from "firebase/messaging";
import { Capacitor } from "@capacitor/core";
import { Timestamp, addDoc, Firestore, collection, setDoc, doc, getDoc, query, getDocs, where } from '@angular/fire/firestore';
import { SplashScreen } from '@capacitor/splash-screen';



@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
   accountPages = [
    {
       title: 'Home',
       url: '/home/dashboard',
       ionicIcon: 'home-outline'
    },
    {
      title: 'Profile',
      url: '/home/profile',
      ionicIcon: 'person'
   },
    {
       title: 'Map',
       url: '/home/map',
       ionicIcon: 'map-outline'
    },
    {
      title: 'Rescue Tickets',
      url: '/home/tickets',
      ionicIcon: 'alert-circle'
   }
  ];
  email: string | null = '';
  firebaseMessaging: any;
  token: string = "";
  constructor(private authService: AuthService, private router: Router, private firestore: Firestore, private platform: Platform, ) {
    
    
    onAuthStateChanged(this.authService.getAuth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        this.email = user!.email;
        console.log(`auth state changed`);
        if(this.token.length > 0){
          setDoc(doc(this.firestore, "Tokens", this.authService.getAuth.currentUser!.uid), { fcm_token: this.token }, { merge: true });
        }
        // ...
      }
    });

    

  }

  ngOnInit() {
    this.platform.ready().then(() => {
      if (Capacitor.isNativePlatform()) {
        SplashScreen.hide();
        // this.firebaseMessaging = getMessaging(this.firebaseApp);
        // this.initializeMessaging();
        this.initializeNotifications();
        // this.initializeNotif();
      }
    });    
  }

  async initializeNotif() {

    const permissionResult = await PushNotifications.requestPermissions();
    if (permissionResult.receive === 'granted') {
      PushNotifications.addListener('registration', (token) => {
        console.log('FCM token:', token.value);


        
        
        // Use the token as needed (e.g., send it to a server, store it locally)
      });

      PushNotifications.register();
    }

    PushNotifications.addListener('pushNotificationReceived', (notification) => {
      console.log('Push notification received:', notification);
      // Handle the received push notification
    });

  }
  
  async initializeMessaging() {
    try {
      const messaging = getMessaging();
      const permission = await Notification.requestPermission();
      if (permission === 'granted') {
        const token = await getToken(messaging);
        console.log('Device token:', token);
        // Send the token to your server for further handling

        onMessage(messaging, (payload: any) => {
          console.log('New message:', payload);
          // const { notification } = payload;
          // if (notification && notification.title && notification.body) {
          //   const { title, body } = notification;
          //   this.showNotification(title, body);
          // }
          // Handle the received message and display the notification
        });
      } else {
        console.warn('Permission denied for notifications');
      }
    } catch (error) {
      console.error('Error initializing messaging:', error);
    }
  }

  // showNotification(title: string, body: string) {
  //   LocalNotifications.schedule({
  //     notifications: [
  //       {
  //         title: title,
  //         body: body,
  //         id: 1,
  //         schedule: { at: new Date(Date.now()) },
  //         actionTypeId: '',
  //         extra: null
  //       }
  //     ]
  //   });
  // }
  
  async initializeNotifications() {
    
    PushNotifications.requestPermissions().then(result => {
      if (result.receive === 'granted') {
        // Register with Apple / Google to receive push via APNS/FCM
        PushNotifications.register();
      } else {
        // Show some error
      }
    });

    // On success, we should be able to receive notifications
    PushNotifications.addListener('registration',
      (token: Token) => {
        console.log('Push registration success, token: ' + token.value);
        this.token = token.value;
      }
    );

    // Some issue with our setup and push will not work
    PushNotifications.addListener('registrationError',
      (error: any) => {
        alert('Error on registration: ' + JSON.stringify(error));
      }
    );

    // Show us the notification payload if the app is open on our device
    PushNotifications.addListener('pushNotificationReceived',
      (notification: PushNotificationSchema) => {
        alert('Push received: ' + JSON.stringify(notification));
      }
    );

    // Method called when tapping on a notification
    PushNotifications.addListener('pushNotificationActionPerformed',
      (notification: ActionPerformed) => {
        // alert('Push action performed: ' + JSON.stringify(notification));
        
        this.router.navigate(['/home/tickets']).then(r => console.log('tickets page redirected using notification click!'));
      }
    );
  }

  logout(){
    this.authService.logout().then(()=>{
      navigator.geolocation.clearWatch(1);
      this.router.navigate(['']).then(r => console.log('log out !'));
    });

  }
}
