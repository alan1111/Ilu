import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {TwoComponent} from "./two.component";

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'two',
        component: TwoComponent
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class TwoRoutingModule { }
