import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HotlinesModule } from '../hotlines/hotlines.module';
import {DashboardPage} from "./dashboard.page";

const routes: Routes = [
  {
    path: '',
    component: DashboardPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
