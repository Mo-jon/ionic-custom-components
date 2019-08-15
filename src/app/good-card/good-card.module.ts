import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { GoodCardPage } from './good-card.page';
import { GoodCardModule } from '../components/good-card/good-card.module';

const routes: Routes = [
  {
    path: '',
    component: GoodCardPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    GoodCardModule
  ],
  declarations: [GoodCardPage]
})
export class GoodCardPageModule {}
