import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {AuthGuard} from './guards/auth.guard';

const routes: Routes = [
  { path: 'connect', loadChildren: './connect/connect.module#ConnectPageModule' },
  { path: '', canActivate: [AuthGuard], loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'qr-scanner', loadChildren: './qr-scanner/qr-scanner.module#QrScannerPageModule' },
  { path: 'start-trip', loadChildren: './tabs/start-trip/start-trip.module#StartTripPageModule' },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
