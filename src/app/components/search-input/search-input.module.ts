
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SearchInputComponent } from './search-input.component';

@NgModule({
  declarations: [
    SearchInputComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    SearchInputComponent,
  ],
})
export class SearchInputModule { }
