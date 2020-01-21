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
export interface FilterData {
  id: number;
  title: string;
  child: Array<ChildType>;
  sChildId: number;
}

/**
 * 筛选子分类数据结构
 * @id 子分类id
 * @name_ 子分类名称
 */
interface ChildType {
  id: number;
  name: string;
}

@Component({
  selector: 'filter-menu',
  templateUrl: './filter-menu.component.html',
  styleUrls: ['./filter-menu.component.scss'],
})
export class FilterMenuComponent implements OnInit {
  // FilterMenu 组件初始id
  static classId = 0;
  // 菜单id, 用于给每个FilterMenuComponent创建独立的id
  sideMenuId = 'sideMenu';
  // 弹出容器id
  @Input() contentId = 'content';
  // 分类列表
  @Input() filterList: Array<FilterData> = [];
  // 点击选择事件
  @Output() choose = new EventEmitter();

  constructor(private menu: MenuController) {
    this.sideMenuId = `sideMenu${FilterMenuComponent.classId++}`;
    console.log('菜单id', this.sideMenuId);
  }

  ngOnInit() {
  }

  // 筛选类别
  chooseType(parentId: number, id: number) {
    this.choose.emit({parentId, id});
  }

  // 显示菜单
  showMenu() {
    this.menu.toggle(this.sideMenuId);
  }
}
