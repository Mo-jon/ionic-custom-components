import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImgSlidesComponent } from './img-slides.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [
    ImgSlidesComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    ImgSlidesComponent
  ]
})
export class ImgSlidesModule { }
