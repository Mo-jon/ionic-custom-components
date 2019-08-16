import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

/**
 * @id -商品id
 * @title -商品标题
 * @aPrice -活动价
 * @vPrice -会员价
 * @price -市场价
 * @img -商品图片
 * @shopId -商品店铺id
 * @shopName -商品店铺名称
 */
export interface GoodsData {
  id: number;
  title?: string;
  aPrice?: string;
  vPrice?: string;
  price?: string;
  img: string;
  shopId?: number;
  shopName?: string;
}

@Component({
  selector: 'goods-card',
  templateUrl: './goods-card.component.html',
  styleUrls: ['./goods-card.component.scss'],
})
export class GoodsCardComponent implements OnInit {

  // 加载列表数据
  @Input() goods: GoodsData;

  // 进入商品详情
  @Output() enterGoods = new EventEmitter<number>();

  // 进入店铺
  @Output() enterShop = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  // 进入商品详情事件
  selectGoods(id: number) {
    this.enterGoods.emit(id);
  }

  // 进入商品详情事件
  selectShop(event: any, id: number) {
    this.enterShop.emit(id);
    event.stopPropagation();
  }
}
