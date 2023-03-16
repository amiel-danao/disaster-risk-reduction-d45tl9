import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import {DashboardPage} from "./dashboard.page";
import {IonicModule} from "@ionic/angular";
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [DashboardPage],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
