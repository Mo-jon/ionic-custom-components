import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { EvaluateCardPage } from './evaluate-card.page';
import { EvaluateCardModule } from '../components/evaluate-card/evaluate-card.module';

const routes: Routes = [
  {
    path: '',
    component: EvaluateCardPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    EvaluateCardModule
  ],
  declarations: [EvaluateCardPage]
})
export class EvaluateCardPageModule {}
