import { Component, OnInit } from "@angular/core";
import { ToastController, LoadingController } from "@ionic/angular";

@Component({
  selector: "app-list",
  templateUrl: "list.page.html",
  styleUrls: ["list.page.scss"]
})
export class ListPage implements OnInit {
  private selectedItem: any;
  private icons = [
    "flask",
    "wifi",
    "beer",
    "football",
    "basketball",
    "paper-plane",
    "american-football",
    "boat",
    "bluetooth",
    "build"
  ];
  public list: Array<{ title: string; note: string; icon: string }> = [];
  // 列表是否为空
  listNull = false;
  // 下拉分页
  infiniteDisabled = true;
  // 最后id
  lastId = 0;
  // 分页长度
  showSize = 10;
  constructor(
    private toastController: ToastController,
    private loadingController: LoadingController
  ) {}

  ngOnInit() {
    this.getList();
  }

  // 获取列表
  getList(refresh = false) {
    // 是否刷新列表
    if (refresh) {
      this.lastId = 0;
      this.list = [];
    }
    return new Promise(async (resolve, reject) => {
      this.dataApi()
        .then((resp: any) => {
          console.log(resp);
          if (resp.error) {
            this.toastMsg(resp.message);
            reject();
            return;
          }

          const data = resp.data;
          const listData = [];
          data.forEach((item: any) => {
            listData.push(item);
          });

          // 分页处理
          this.infiniteDisabled = listData.length < this.showSize;
          this.list = this.list.concat(listData);
          this.listNull = this.list.length < 1;
          resolve();
        })
        .catch((error: any) => {
          console.error(error);
          reject();
        });
    });
  }

  // 列表数据
  dataApi() {
    return new Promise((resolve, reject) => {
      const result = {
        data: [],
        error: false,
        message: "错误信息",
        code: 0
      };

      // 模拟数据
      for (let i = 1; i < 20; i++) {
        result.data.push({
          id: i,
          title: "Item " + i,
          note: "This is item #" + i,
          icon: this.icons[Math.floor(Math.random() * this.icons.length)]
        });
      }

      if (result.error) {
        reject(result);
      } else {
        resolve(result);
      }
    });
  }

  // 错误提示
  async toastMsg(message: string) {
    const toast = await this.toastController.create({
      message
    });
    toast.present();
  }

  async showLoading() {
    await this.loadingController.create();
  }

  // 下拉刷新
  async doRefresh(event: any) {
    console.log("下拉刷新");
    await this.getList(true);
    await event.target.complete();
  }

  // 上拉加载
  async loadData(event: any) {
    console.log("上拉加载");
    await this.getList();
    await event.target.complete();
  }

  // 跳转详情
  goDetail(id: any) {
    console.log("跳转详情", id);
    // this.navCtrl.navigateForward(`/detail/${id}`);
  }
}
