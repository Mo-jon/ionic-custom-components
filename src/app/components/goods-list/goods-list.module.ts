import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { GoodsListComponent } from './goods-list.component';


@NgModule({
  declarations: [
    GoodsListComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    GoodsListComponent
  ]
})
export class GoodsListComponentModule { }
