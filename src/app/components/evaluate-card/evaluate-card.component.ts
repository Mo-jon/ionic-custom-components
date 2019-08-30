import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

export interface EvaluateData {
  userId: number;
  userName: string;
  userPhoto: string;
  isVip?: boolean;
  time: string;
  info: string;
  imgList?: Array<string>;
}
@Component({
  selector: 'evaluate-card',
  templateUrl: './evaluate-card.component.html',
  styleUrls: ['./evaluate-card.component.scss'],
})
export class EvaluateCardComponent implements OnInit {
  @Input() evaluate: EvaluateData;
  @Output() clickUser = new EventEmitter<number>();

  constructor() { }

  ngOnInit() { }

  chooseUser(userId: number) {
    console.log('点击用户', userId);
    this.clickUser.emit(userId);
  }
}
