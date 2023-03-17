import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
      },
      {
        path: 'tab2',
        loadChildren: () => import('../hotlines/hotlines.module').then(m => m.HotlinesModule)
      },
      {
        path: 'tab3',
        loadChildren: () => import('../map/map.module').then(m => m.MapModule)
      },
      {
        path: 'dashboard',
        loadChildren: () => import('../dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'hotlines',
        loadChildren: () => import('../hotlines/hotlines.module').then(m => m.HotlinesModule)
      },
      {
        path: 'typhoon',
        loadChildren: () => import('../typhoon/typhoon.module').then(m => m.TyphoonModule)
      },
      {
        path: 'earthquake',
        loadChildren: () => import('../earthquake/earthquake.module').then(m => m.EarthquakeModule)
      },
      {
        path: 'fire',
        loadChildren: () => import('../fire/fire.module').then(m => m.FireModule)
      },
      {
        path: 'map',
        loadChildren: () => import('../map/map.module').then(m => m.MapModule)
      },
      {
        path: '',
        redirectTo: '/home/dashboard',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/home/dashboard',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
