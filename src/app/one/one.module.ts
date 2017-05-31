import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {OneRoutingModule} from "./one-routing.module";
import {OneComponent} from "./one.component";
import {TwoModule} from "../two/two.module";

@NgModule({
  imports: [
    CommonModule,
    OneRoutingModule,
    TwoModule
  ],
  declarations: [
    OneComponent
  ]
})
export class OneModule { }
