import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FilterMenuPage } from './filter-menu.page';
import { FilterMenuModule } from 'src/app/components/filter-menu/filter-menu.module';

const routes: Routes = [
  {
    path: '',
    component: FilterMenuPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    FilterMenuModule
  ],
  declarations: [FilterMenuPage]
})
export class FilterMenuPageModule {}
