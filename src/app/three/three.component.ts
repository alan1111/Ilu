import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-three',
  templateUrl: './three.component.html',
  styleUrls: ['./three.component.css']
})
export class ThreeComponent implements OnInit {
  ifhave: boolean = false;
  data: string;
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    setTimeout(() => {
      this.ifhave = true;
      this.data = '偶哈哈， 你竟然相信上面的话！！！，点我可看更多呦！！';
    },10000);
  }
  goToNext() {
    this.router.navigateByUrl('/four');
  }
}
