import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';

import {IonicModule} from '@ionic/angular';

import {StartTripPage} from './start-trip.page';
import {ZXingScannerModule} from '@zxing/ngx-scanner';

const routes: Routes = [
    {
        path: '',
        component: StartTripPage
    }
];

@NgModule({
    imports: [
        ZXingScannerModule,
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes)
    ],
    declarations: [StartTripPage]
})
export class StartTripPageModule {
}
