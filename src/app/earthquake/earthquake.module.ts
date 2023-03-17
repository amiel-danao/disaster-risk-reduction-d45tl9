import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EarthquakeRoutingModule } from './earthquake-routing.module';
import { EarthquakeComponent } from './earthquake.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [EarthquakeComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
    EarthquakeRoutingModule
  ]
})
export class EarthquakeModule { }
