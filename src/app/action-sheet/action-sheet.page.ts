import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ActionSheetComponent } from '../components/action-sheet/action-sheet/action-sheet.component';

@Component({
  selector: 'app-action-sheet',
  templateUrl: './action-sheet.page.html',
  styleUrls: ['./action-sheet.page.scss'],
})
export class ActionSheetPage implements OnInit {

  // 选择id
  activeId = 1;

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

  async openActionSheet() {
    console.log('打开弹框', this.activeId);
    await this.modalController
      .create({
        component: ActionSheetComponent,
        componentProps: {
          // 向模态框传值
          list: [
            {id: 0, name: '000'},
            {id: 1, name: '111'},
            {id: 2, name: '222'},
          ],
          activeId: this.activeId,
          sureBtn: false,
        },
        cssClass: 'module-transparent-background',
      })
      .then((el: any) => {
        el.onWillDismiss().then((resp: any) => {
          console.log('模态框传回选择数据', resp);
          if (resp.data) {
            this.activeId = resp.data.id;
          }
        });
        el.present();
      });
  }
}
