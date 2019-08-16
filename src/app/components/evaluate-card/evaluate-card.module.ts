import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { EvaluateCardComponent } from './evaluate-card.component';


@NgModule({
  declarations: [
    EvaluateCardComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    EvaluateCardComponent
  ]
})
export class EvaluateCardModule { }
