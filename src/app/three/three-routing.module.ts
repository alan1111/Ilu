import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {ThreeComponent} from "./three.component";

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'three',
        component: ThreeComponent
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class ThreeRoutingModule { }
