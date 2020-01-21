import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ActionSheetPage } from './action-sheet.page';
import { ActionSheetModule } from '../components/action-sheet/action-sheet/action-sheet.module';

const routes: Routes = [
  {
    path: '',
    component: ActionSheetPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ActionSheetModule
  ],
  declarations: [ActionSheetPage]
})
export class ActionSheetPageModule {}
