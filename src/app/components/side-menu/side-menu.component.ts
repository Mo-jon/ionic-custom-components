import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MenuController } from '@ionic/angular';

/**
 * 筛选分类数据结构
 * @id 分类id
 * @title 分类标题
 * @child 子分类
 * @sChildId 已选择子类id
 * @sChildId 已选择子类名称
 */
export interface Filter {
  id: number;
  title: string;
  child: Array<ChildType>;
  sChildId: number;
  sChildTitle: string;
}

/**
 * 筛选子分类数据结构
 * @id 子分类id
 * @name- 子分类名称
 */
export interface ChildType {
  id: number;
  name: string;
}

/**
 * 筛选分类 id 定义
 * @category  类型：0
 * @brand     品牌：1
*/
export enum FilterType {
  category = 0,
  brand = 1,
}

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent implements OnInit {
  // 类别列表
  @Input() typeFilter: Array<Filter> = [];
  // 属性列表
  @Input() attributeFilter: Array<Filter> = [];
  // 点击选择事件
  @Output() chooseMenu = new EventEmitter();

  constructor(private menu: MenuController) { }

  ngOnInit() {
  }

  // 筛选类别
  chooseType(filterIndex: number, id: number) {
    this.typeFilter[filterIndex].sChildId = this.typeFilter[filterIndex].sChildId === id ? null : id;
    console.log('子类，品牌', this.typeFilter);
    this.chooseMenu.emit();
  }

  // 筛选属性
  chooseAttribute(attributeId: number, id: number) {
    this.attributeFilter.forEach((item: Filter, index: number) => {
      if (item.id === attributeId) {
        this.attributeFilter[index].sChildId = this.attributeFilter[index].sChildId === id ? null : id;
      }
    });
    console.log('属性', this.attributeFilter);
    this.chooseMenu.emit();
  }

  // 显示菜单
  showMenu() {
    // this.menu.enable(true, 'sideMenu');
    // this.menu.open('sideMenu');
    this.menu.toggle('sideMenu');
  }
}
