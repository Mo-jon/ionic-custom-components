import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ImgSlidesPage } from './img-slides.page';
import { ImgSlidesModule } from '../components/img-slides/img-slides.module';

const routes: Routes = [
  {
    path: '',
    component: ImgSlidesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ImgSlidesModule
  ],
  declarations: [ImgSlidesPage]
})
export class ImgSlidesPageModule {}
