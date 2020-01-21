import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActionSheetComponent } from './action-sheet.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [
    ActionSheetComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    ActionSheetComponent
  ],
  entryComponents: [
    ActionSheetComponent
  ]
})
export class ActionSheetModule { }
