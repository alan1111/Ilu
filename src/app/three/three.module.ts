import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ThreeRoutingModule} from "./three-routing.module";
import {ThreeComponent} from "./three.component";

@NgModule({
  imports: [
    CommonModule,
    ThreeRoutingModule
  ],
  declarations: [
    ThreeComponent
  ],
  exports: [
    ThreeComponent
  ]
})
export class ThreeModule { }
