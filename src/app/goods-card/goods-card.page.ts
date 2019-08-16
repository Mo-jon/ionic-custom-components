import { Component, OnInit } from '@angular/core';
import { GoodsData } from '../components/goods-card/goods-card.component';

@Component({
  selector: 'app-goods-card',
  templateUrl: './goods-card.page.html',
  styleUrls: ['./goods-card.page.scss'],
})
export class GoodsCardPage implements OnInit {
  private goods: Array<GoodsData>;

  constructor() {
    this.goods = [
      {
        id: 1,
        title: '商品标题',
        aPrice: '12.00',
        vPrice: '33.00',
        price: '55.50',
        img: 'assets/img/car.jpg',
        shopId: 23,
        shopName: '店铺名称',
      },
      {
        id: 2,
        title: '商品标题',
        aPrice: '',
        vPrice: '33.00',
        price: '55.50',
        img: 'assets/img/car.jpg',
        shopId: 2,
        shopName: '店铺名称',
      },
      {
        id: 3,
        title: '商品标题',
        aPrice: '12.00',
        vPrice: '33.00',
        price: '55.50',
        img: 'assets/img/car.jpg',
        shopId: 235,
        shopName: '',
      },
    ];
  }

  ngOnInit() {
  }

  // 进入商品
  enterGoods(id: number) {
    console.log('商品', id);
  }

  // 进入店铺
  enterShop(id: number) {
    console.log('店铺', id);
  }
}
