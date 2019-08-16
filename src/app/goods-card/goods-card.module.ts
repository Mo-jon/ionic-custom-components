import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { GoodsCardPage } from './goods-card.page';
import { GoodsCardModule } from '../components/goods-card/goods-card.module';

const routes: Routes = [
  {
    path: '',
    component: GoodsCardPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    GoodsCardModule
  ],
  declarations: [GoodsCardPage]
})
export class GoodsCardPageModule {}
