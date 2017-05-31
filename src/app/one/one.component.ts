import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {
index : number;
datas: Array<any> = [];
data: string;
begin: any;
ifStop : boolean = false;
  constructor() { }

  ngOnInit() {
    this.datas = ['跪键盘','洗碗涮锅','面壁思过','奖励一盘','做饭去','洗菜','陪看电影','陪逛街','掏腰包','请客','解放一天'];
    this.interVal();
  }

  interVal() {
    this.begin = setInterval(() => {
      this.index = Math.ceil(Math.random()*10);
      this.data = this.datas[this.index];
    },100);
  }

  stop() {
    this.ifStop = true;
    clearInterval(this.begin);
  }
  start() {
    this.ifStop = false;
    this.interVal();
  }
}
