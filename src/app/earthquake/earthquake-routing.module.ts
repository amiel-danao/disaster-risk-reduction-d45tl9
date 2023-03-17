import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EarthquakeComponent } from './earthquake.component';

const routes: Routes = [{
  path:'',
  component:EarthquakeComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EarthquakeRoutingModule { }
