import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

/**
 * 店铺数据结构
 * @id 店铺id
 * @title 店铺标题
 * @logo 店铺 logo
 * @distance 距离
 * @mainGood 主营商品
 * @addr 地址
 * @follow 关注
 * @evaluate 评价
 * @badge 徽章
 * @goodImgList 展示商品图片
 * @enterShop 是否进入店铺
 */
export interface ShopData {
  id: number;
  title: string;
  logo: string;
  distance: string;
  mainGood: string;
  addr: string;
  follow: string;
  evaluate: string;
  badge?: string;
  goodImgList?: Array<GoodImgList>;
  enterShop?: boolean;
}

/**
 * 展示商品图片数据结构
 * goodId 商品id
 * goodImg 商品图片
 */
export interface GoodImgList {
  goodId: number;
  goodImg: string;
}

@Component({
  selector: 'app-shop-card',
  templateUrl: './shop-card.component.html',
  styleUrls: ['./shop-card.component.scss'],
})
export class ShopCardComponent implements OnInit {
  // 店铺展示信息
  @Input() shopInfo: ShopData = null;
  // 进入店铺
  @Output() chooseShop = new EventEmitter();
  // 进入商品
  @Output() chooseGood = new EventEmitter<number>();

  constructor() { }

  ngOnInit() { }

  // 进入店铺
  enterShop() {
    this.chooseShop.emit();
  }

  // 进入商品
  enterGood(id: number) {
    this.chooseGood.emit(id);
  }
}
