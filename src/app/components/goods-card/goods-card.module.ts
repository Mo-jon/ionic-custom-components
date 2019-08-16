import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { GoodsCardComponent } from './goods-card.component';


@NgModule({
  declarations: [
    GoodsCardComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    GoodsCardComponent
  ]
})
export class GoodsCardModule { }
