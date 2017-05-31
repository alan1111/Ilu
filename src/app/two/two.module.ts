import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TwoRoutingModule} from "./two-routing.module";
import {TwoComponent} from "./two.component";

@NgModule({
  imports: [
    CommonModule,
    TwoRoutingModule
  ],
  declarations: [
    TwoComponent
  ],
  exports: [
    TwoComponent
  ]
})
export class TwoModule { }
