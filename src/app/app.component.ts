import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: '首页',
      url: '/home',
      icon: 'home'
    },
    {
      title: '列表',
      url: '/list',
      icon: 'list'
    },
    {
      title: '商品',
      url: '/goodsCard',
      icon: 'card'
    },
    {
      title: '评价',
      url: '/evaluateCard',
      icon: 'create'
    },
    {
      title: '筛选',
      url: '/filterMenu',
      icon: 'color-filter'
    },
    {
      title: '分享',
      url: '/shareModal',
      icon: 'share-alt'
    },
    {
      title: '搜索',
      url: '/searchInput',
      icon: 'search'
    },
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
