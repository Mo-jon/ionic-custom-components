import { Component, OnInit } from '@angular/core';
import { ShareModalComponent } from 'src/app/components/share-modal/share-modal.component';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-share-moldal',
  templateUrl: './share-moldal.page.html',
  styleUrls: ['./share-moldal.page.scss'],
})
export class ShareMoldalPage implements OnInit {

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
