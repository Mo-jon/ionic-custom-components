import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FilterMenuComponent } from './filter-menu.component';


@NgModule({
  declarations: [FilterMenuComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    FilterMenuComponent
  ]
})
export class FilterMenuModule { }
