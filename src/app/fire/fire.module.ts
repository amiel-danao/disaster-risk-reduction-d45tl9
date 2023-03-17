import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FireRoutingModule } from './fire-routing.module';
import { FireComponent } from './fire.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [FireComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
    FireRoutingModule
  ]
})
export class FireModule { }
