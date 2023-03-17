import { Component } from '@angular/core';
import { onAuthStateChanged } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';



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
       title: 'Map',
       url: '/home/map',
       ionicIcon: 'map-outline'
    },
  ];
  email: string | null = '';
  constructor(private authService: AuthService, private router: Router) {
    onAuthStateChanged(this.authService.getAuth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        this.email = user!.email;
        console.log(`auth state changed`);
        // ...
      } else {
        
      }
    });
  }

  logout(){
    this.authService.logout().then(()=>{
      navigator.geolocation.clearWatch(1);
      this.router.navigate(['']).then(r => console.log('log out !'));
    });

  }
}
