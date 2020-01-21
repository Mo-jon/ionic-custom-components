import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-action-sheet',
  templateUrl: './action-sheet.component.html',
  styleUrls: ['./action-sheet.component.scss'],
})

export class ActionSheetComponent implements OnInit {
  // 数据
  @Input() list: Array<{
    id: number;
    name: string;
  }>;
  // 选择id
  @Input() activeId: number = null;
  // 是否带有确定按钮
  @Input() sureBtn = true;
  // 选择项
  private activeItem = null;

  constructor(public modalController: ModalController) {}

  ngOnInit() {
    console.log(
      '[action-sheet接收]',
      'activeId=', this.activeId,
      ',sureBtn=', this.sureBtn,
      ',list=', this.list
      );
  }

  // 选择
  chooseItem(item: {id: number, name: string}) {
    this.activeId = item.id;
    this.activeItem = item;

    // 没有确定按钮，选择直接关闭
    if (!this.sureBtn) {
      this.dismiss('choose');
    }
  }

  // 关闭模态框
  dismiss(role: string) {
    console.log('关闭模态框', this.activeId);
    this.modalController.dismiss(
      this.activeItem,
      role
    );
  }
}
