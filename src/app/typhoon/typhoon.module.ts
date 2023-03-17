import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TyphoonRoutingModule } from './typhoon-routing.module';
import { IonicModule } from '@ionic/angular';
import { TyphoonComponent } from './typhoon.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [TyphoonComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
    TyphoonRoutingModule
  ]
})
export class TyphoonModule { }
