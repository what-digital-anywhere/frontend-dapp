import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import {QRCodeModule} from 'angular2-qrcode';

import { TripsPage } from './trips.page';
import {CurrentTripComponent} from './current-trip/current-trip.component';
import {PastTripComponent} from './past-trip/past-trip.component';
import {NgxKjuaModule} from 'ngx-kjua';
import {AccordionComponent} from './accordion/accordion.component';

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
        QRCodeModule,
        IonicModule,
        NgxKjuaModule,
        RouterModule.forChild(routes),
    ],
  declarations: [TripsPage, CurrentTripComponent, PastTripComponent, AccordionComponent]
})
export class TripsPageModule {}
