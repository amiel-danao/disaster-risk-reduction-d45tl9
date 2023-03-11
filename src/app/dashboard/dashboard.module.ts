import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import {DashboardPage} from "./dashboard.page";
import {IonicModule} from "@ionic/angular";


@NgModule({
  declarations: [DashboardPage],
  imports: [
    CommonModule,
    IonicModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
