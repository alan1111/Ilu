import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {
  index : number;
  story: string;
  storys: Array<any> = [];
  begin: any;
  ifStop : boolean = false;
  ifClick : boolean = false;
  img :string;
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.storys = [
      '',
      '看这皮滴',
      '伤不起的憨',
      'folow your self',
      'ju qiu nie di duo li',
      '不要face哇'
    ];
    this.interVal();
  }

  interVal() {
    this.begin = setInterval(() => {
      this.index = Math.ceil(Math.random()*5);
      this.img = '../../assets/public/'+this.index+'.jpg';
    },1000);
  }

  stop() {
    this.ifStop = true;
    clearInterval(this.begin);
  }
  start() {
    this.ifClick = false;
    this.ifStop = false;
    this.interVal();
  }
  cli(index :string) {
    this.ifClick = true;
    this.story = this.storys[index];
  }
  toTwo() {
    this.router.navigateByUrl('/two');
  }
}
