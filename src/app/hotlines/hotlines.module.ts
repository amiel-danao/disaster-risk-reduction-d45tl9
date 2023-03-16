import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HotlinesRoutingModule } from './hotlines-routing.module';
import { RouterModule } from '@angular/router';
import { HotlinesComponent } from './hotlines.component';
import {IonicModule} from "@ionic/angular";


@NgModule({
  declarations: [HotlinesComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
    HotlinesRoutingModule
  ]
})
export class HotlinesModule { }
