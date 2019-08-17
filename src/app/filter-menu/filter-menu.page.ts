import { Component, OnInit, ViewChild } from '@angular/core';
import { FilterData, FilterMenuComponent } from 'src/app/components/filter-menu/filter-menu.component';
@Component({
  selector: 'app-filter-menu',
  templateUrl: './filter-menu.page.html',
  styleUrls: ['./filter-menu.page.scss'],
})
export class FilterMenuPage implements OnInit {
  public filterList: Array<FilterData> = [];
  // 侧边菜单
  @ViewChild(FilterMenuComponent, { static: false }) filterMenu: FilterMenuComponent;

  constructor() { }

  ngOnInit() {
    for (let i = 0; i < 5; i++) {
      this.filterList.push({
        id: i,
        title: `分类${i}`,
        child: [],
        sChildId: null,
      });
      for (let j = 0; j < 10; j++) {
        this.filterList[i].child.push({
          id: j,
          name: `子类${j}`
        });
      }
    }
  }

  // 打开/关闭筛选
  openFilter() {
    this.filterMenu.showMenu();
  }

  // 选择分类
  chooseFiler(chooseData: any) {
    console.log('选择分类', chooseData);
    this.filterList.forEach((item, index) => {
      if (item.id === chooseData.parentId) {
        this.filterList[index].sChildId = chooseData.id;
      }
    });
  }
}
