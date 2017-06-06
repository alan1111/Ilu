import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'My Diary';
  clock : any;
  constructor() { }

  ngOnInit() {
    setInterval(()=>{
      let date = new Date().valueOf() - new Date('2010/06/20').getTime();
      let year = Math.floor(date/(365*24*3600*1000));
      let month = Math.ceil(date/(31*24*3600*1000)) % 12;
      let day = Math.ceil(date/(24*3600*1000)) % 30;
      let hour = Math.ceil(date/(3600*1000)) % 24;
      let minute = Math.ceil(date/(60*1000)) % 60;
      let second = Math.ceil(date/(1000)) % 60;
      this.clock = year+'年'+month+'月'+day+'日'+hour+'时'+minute+'分'+second+'秒';
    },1000);
  }
}
