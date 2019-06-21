import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TripsPage } from './trips.page';
import {TripComponent} from './trip/trip.component';

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
    RouterModule.forChild(routes)
  ],
    declarations: [TripsPage, TripComponent]
})
export class TripsPageModule {}
