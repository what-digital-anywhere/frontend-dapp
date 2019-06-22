import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { NgxKjuaModule } from 'ngx-kjua';

import { TicketVerificationPage } from './ticket-verification.page';
import {ZXingScannerModule} from '@zxing/ngx-scanner';

const routes: Routes = [
  {
    path: '',
    component: TicketVerificationPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ZXingScannerModule,
    NgxKjuaModule,
  ],
  declarations: [TicketVerificationPage]
})
export class TicketVerificationPageModule {}
