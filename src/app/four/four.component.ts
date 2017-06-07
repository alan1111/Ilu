import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-four',
  templateUrl: './four.component.html',
  styleUrls: ['./four.component.css']
})
export class FourComponent implements OnInit {
 num : number = 0;
 ifShow : boolean = false;
 data: string;
 reStart : boolean = false;
  constructor() { }

  ngOnInit() {
  }
  reDo() {
    this.data = '';
    this.reStart = false;
    this.num = 0;
  }
  nex() {
    this.data = '';
    this.num ++;
    if (this.num >= 2) {
      this.reStart = true;
      this.data = '相当不满意，重做！！！';
    }
    this.ifShow = false;
  }
  numOne(select : string) {
    this.ifShow = true;
    if(select == 'a'){
      this.data = '哈算聪明，木白跟旋哥混';
    } else {
      this.data = '猪一样的队友 ，fu能救你！';
    }
  }

  numTwo(select : string) {
    this.ifShow = true;
    if(select == 'a'){
      this.data = '我也勉强答应你吧！';
    } else {
      this.data = '可以啊，没人能管你了，是吧？我给你说： 你说咋就咋吧，反正我没意见！';
    }
  }
}
