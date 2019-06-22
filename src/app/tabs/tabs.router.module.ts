import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'trips',
        children: [
          {
            path: '',
            loadChildren: './trips/trips.module#TripsPageModule'
          }
        ]
      },
      {
        path: 'start-trip',
        children: [
          {
            path: '',
            loadChildren: './start-trip/start-trip.module#StartTripPageModule'
          }
        ]
      },
      {
        path: 'wallet',
        children: [
          {
            path: '',
            loadChildren: './wallet/wallet.module#WalletPageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/trips',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/trips',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
