import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ShareMoldalPage } from './share-moldal.page';
import { ShareModalModule } from 'src/app/components/share-modal/share-modal.module';

const routes: Routes = [
  {
    path: '',
    component: ShareMoldalPage
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
  declarations: [ShareMoldalPage]
})
export class ShareMoldalPageModule {}
