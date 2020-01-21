import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-img-slides',
  templateUrl: './img-slides.page.html',
  styleUrls: ['./img-slides.page.scss'],
})
export class ImgSlidesPage implements OnInit {
  imgList = [
    {id: 0, src: 'assets/img/car.jpg'},
    {id: 1, src: 'assets/img/car2.jpg'},
    {id: 2, src: 'assets/img/car.jpg'},
  ];

  constructor() { }

  ngOnInit() {
  }

  slidesImg(event: any) {
    console.log('接收点击轮播图事件', event);
  }

}
