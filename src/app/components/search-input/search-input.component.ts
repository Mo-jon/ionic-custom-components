import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
})
export class SearchInputComponent implements OnInit {
  /** 初始值 */
  @Input() placeholder = '';
  /** 是否显示搜索图标 */
  @Input() icon = true;
  /** 是否可输入 */
  @Input() disabled = false;
  /** 背景颜色 */
  @Input() backgroundColor: string;
  /** 是否显示搜索按钮 */
  @Input() searchBtn = true;
  /** 输入事件 */
  @Output() oninput = new EventEmitter();
  /** 执行搜索 */
  @Output() search = new EventEmitter();
  /** 搜索值 */
  @Input() value: string;
  // 缓存搜索
  inputCache: string;

  constructor() { }

  ngOnInit() {
    console.log(
      '[search-input]-->',
      `value:${this.value}，
       placeholder:${this.placeholder}，
       icon:${this.icon}，
       disabled:${this.disabled}，
       backgroundColor:${this.backgroundColor}，
       searchBtn:${this.searchBtn}，
       `);
  }

  /** 输入事件 */
  change() {
    const getInput = setTimeout(() => {
      if (this.inputCache === this.value) {
        clearTimeout(getInput);
        return;
      }
      console.log('正在输入:', this.value);
      this.inputCache = this.value;
      this.oninput.emit(this.value);
    }, 800);
  }

  /** 执行事件 */
  searchClick() {
    console.log('执行搜索:', this.value);
    this.search.emit(this.value);
  }
}
