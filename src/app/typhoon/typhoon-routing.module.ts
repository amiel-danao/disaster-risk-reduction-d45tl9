import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TyphoonComponent } from './typhoon.component';

const routes: Routes = [{
  path: '',
  component: TyphoonComponent,
},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TyphoonRoutingModule { }
