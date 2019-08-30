import { Component, OnInit, Input } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

export interface ShareInfo {
  title: string;
  link: string;
  desc: string;
  imgUrl: string;
}

@Component({
  selector: 'app-share-modal',
  templateUrl: './share-modal.component.html',
  styleUrls: ['./share-modal.component.scss'],
})
export class ShareModalComponent implements OnInit {
  // 分享信息设置
  @Input() shareInfo: ShareInfo;

  constructor(
    public modalCtrl: ModalController,
    public navParams: NavParams,
  ) {
    console.log('接收参数--------------》', navParams.get('shareInfo'));
    this.shareInfo = navParams.get('listData');
  }

  ngOnInit() {
  }

  // 分享好友
  async shareFriend() {
    console.log('分享好友');
    await this.modalCtrl.dismiss(
      null,
      'friend'
    );
  }

  // 分享朋友圈
  async shareFriendsCircle() {
    console.log('分享朋友圈');
    await this.modalCtrl.dismiss(
      null,
      'friendsCircle'
    );
  }

  // 关闭分享
  shareClose() {
    console.log('关闭分享');
    this.modalCtrl.dismiss(
      null,
      'close'
    );
  }
}
