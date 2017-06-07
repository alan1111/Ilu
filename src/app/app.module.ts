import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {OneModule} from "./one/one.module";
import {AppRoutingModule} from "./app-routing.module";
import {TwoModule} from "./two/two.module";
import {ThreeModule} from "./three/three.module";
import {FourModule} from "./four/four.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    OneModule,
    TwoModule,
    ThreeModule,
    FourModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
