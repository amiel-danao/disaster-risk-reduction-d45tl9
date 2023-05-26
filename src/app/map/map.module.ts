import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MapRoutingModule } from './map-routing.module';
import { MapComponent } from './map.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { GoogleMapsModule } from '@angular/google-maps';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';


@NgModule({
  declarations: [MapComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
    MapRoutingModule,
    GoogleMapsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    FormsModule
  ]
})
export class MapModule { }
