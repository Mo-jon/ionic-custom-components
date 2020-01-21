import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { WaterfallPage } from './waterfall.page';
import { GoodsCardModule } from '../components/goods-card/goods-card.module';


const routes: Routes = [
  {
    path: '',
    component: WaterfallPage
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
  declarations: [WaterfallPage]
})
export class WaterfallPageModule {}
