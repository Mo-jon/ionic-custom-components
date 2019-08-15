import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { GoodCardComponent } from './good-card.component';


@NgModule({
  declarations: [
    GoodCardComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    GoodCardComponent
  ]
})
export class GoodCardModule { }
