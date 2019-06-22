import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PrivateKeyInputPage } from './private-key-input.page';

const routes: Routes = [
  {
    path: '',
    component: PrivateKeyInputPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PrivateKeyInputPage]
})
export class PrivateKeyInputPageModule {}
