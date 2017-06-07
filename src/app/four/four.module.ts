import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FourRoutingModule} from "./four-routing.module";
import {FourComponent} from "./four.component";

@NgModule({
  imports: [
    CommonModule,
    FourRoutingModule
  ],
  declarations: [
    FourComponent
  ],
  exports: [
    FourComponent
  ]
})
export class FourModule { }
