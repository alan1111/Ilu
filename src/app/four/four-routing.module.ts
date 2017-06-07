import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {FourComponent} from "./four.component";

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'four',
        component: FourComponent
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class FourRoutingModule { }
