import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SearchInputPage } from './search-input.page';
import { SearchInputModule } from '../components/search-input/search-input.module';

const routes: Routes = [
  {
    path: '',
    component: SearchInputPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    SearchInputModule
  ],
  declarations: [SearchInputPage]
})
export class SearchInputPageModule {}
