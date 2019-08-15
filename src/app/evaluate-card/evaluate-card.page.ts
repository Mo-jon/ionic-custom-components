import { Component, OnInit } from '@angular/core';
import { EvaluateData } from '../components/evaluate-card/evaluate-card.component';
@Component({
  selector: 'app-evaluate-card',
  templateUrl: './evaluate-card.page.html',
  styleUrls: ['./evaluate-card.page.scss'],
})
export class EvaluateCardPage implements OnInit {
  private evaluate: Array<EvaluateData>;

  constructor() {
    this.evaluate = [
      {
        userId: 1,
        userName: '用户名',
        userPhoto: 'assets/img/car.jpg',
        isVip: true,
        time: '2019-05-03',
        info: '这是一则消息',
        imgList: [
          'assets/img/car.jpg',
          'assets/img/car.jpg',
          'assets/img/car.jpg',
        ]
      },
      {
        userId: 1,
        userName: '用户名',
        userPhoto: 'assets/img/car.jpg',
        isVip: false,
        time: '2019-05-03',
        info: '这是一则消息',
        imgList: [
          'assets/img/car.jpg',
          'assets/img/car.jpg',
          'assets/img/car.jpg',
          'assets/img/car.jpg',
        ]
      },
    ];
  }

  ngOnInit() {
  }

}
