import { Component, OnInit } from '@angular/core';
import { EvaluateData } from '../components/evaluate-card/evaluate-card.component';
@Component({
  selector: 'app-evaluate-card',
  templateUrl: './evaluate-card.page.html',
  styleUrls: ['./evaluate-card.page.scss'],
})
export class EvaluateCardPage implements OnInit {
  private evaluateList: Array<EvaluateData>;

  constructor() {
    this.evaluateList = [
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
        userName: '岳飞',
        userPhoto: 'assets/img/car.jpg',
        isVip: false,
        time: '2019-05-03',
        info: '怒发冲冠，凭栏处、潇潇雨歇。抬望眼，仰天长啸，壮怀激烈。三十功名尘与土，八千里路云和月。莫等闲，白了少年头，空悲切！靖康耻，犹未雪。臣子恨，何时灭！驾长车，踏破贺兰山缺。壮志饥餐胡虏肉，笑谈渴饮匈奴血。待从头、收拾旧山河，朝天阙。',
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
