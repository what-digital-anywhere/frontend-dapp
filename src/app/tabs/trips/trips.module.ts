import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TripsPage } from './trips.page';
import {CurrentTripComponent} from './current-trip/current-trip.component';
import {PastTripComponent} from './past-trip/past-trip.component';
import {NgxKjuaModule} from 'ngx-kjua'
import {QRCodeModule} from 'angular2-qrcode';

const routes: Routes = [
  {
    path: '',
    component: TripsPage
  }
];

@NgModule({
    imports: [

        CommonModule,
        FormsModule,
        IonicModule,
        NgxKjuaModule,
        RouterModule.forChild(routes),
        QRCodeModule,
    ],
  declarations: [TripsPage, CurrentTripComponent, PastTripComponent]
})
export class TripsPageModule {}
