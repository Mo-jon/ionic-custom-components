import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ShareModalPage } from './share-modal.page';
import { ShareModalModule } from 'src/app/components/share-modal/share-modal.module';

const routes: Routes = [
  {
    path: '',
    component: ShareModalPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ShareModalModule
  ],
  declarations: [ShareModalPage]
})
export class ShareModalPageModule {}
