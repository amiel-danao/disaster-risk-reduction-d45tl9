import { Component } from '@angular/core';
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
    // {
    //    title: 'Log out',
    //    url: '/',
    //    ionicIcon: 'log-out-outline'
    // },
  ];
  constructor(private authService: AuthService, private router: Router) {}

  logout(){
    this.authService.logout().then(()=>{
      this.router.navigate(['']).then(r => console.log('log out !'));
    });

  }
}
