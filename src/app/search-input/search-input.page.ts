import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-search-input",
  templateUrl: "./search-input.page.html",
  styleUrls: ["./search-input.page.scss"]
})
export class SearchInputPage implements OnInit {
  constructor() {}

  ngOnInit() {}

  // 搜索
  search(value: any = "") {
    console.log("取出输入值", value);
  }
}
