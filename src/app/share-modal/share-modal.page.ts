import { Component, OnInit } from '@angular/core';
import { ShareModalComponent } from 'src/app/components/share-modal/share-modal.component';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-share-modal',
  templateUrl: './share-modal.page.html',
  styleUrls: ['./share-modal.page.scss'],
})
export class ShareModalPage implements OnInit {

  constructor(
    public modalCtrl: ModalController
  ) { }

  ngOnInit() {
  }

  // 分享
  async openShare() {
    await this.modalCtrl.create({
      component: ShareModalComponent,
      cssClass: 'module-transparent-background'
    }).then((el: any) => {
      el.onWillDismiss().then((resp: any) => {
        console.log('模态框传回选择数据', resp);
      });
      el.present();
    });
  }
}
