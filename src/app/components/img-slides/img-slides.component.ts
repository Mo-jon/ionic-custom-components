import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'img-slides',
  templateUrl: './img-slides.component.html',
  styleUrls: ['./img-slides.component.scss'],
})
export class ImgSlidesComponent implements OnInit {
  // 轮播配置
  slideOpts = {
    autoplay: true,             // 自动播放
    initialSlide: 0,            // 首次加载第几张
    speed: 400,                 // 轮播速度
    loop: true,                 // 循环播放
    centeredSlides: true,       // 图片中心显示
    pagination: {
      el: '.swiper-pagination', // 设置样式
      type: 'fraction',
    },
  };
  // 轮播列表
  @Input() list: Array<{id: number, src: string}>;
  // 点击图片
  @Output() chooseImg = new EventEmitter();

  constructor() { }

  ngOnInit() {}

  // 点击图片
  clickImg(item: any) {
    console.log('点击图片', item);
    this.chooseImg.emit(item);
  }

}
