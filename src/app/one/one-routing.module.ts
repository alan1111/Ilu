import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {OneComponent} from "./one.component";

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'one',
        component: OneComponent
      },
      // {
      //   path: '**',
      //   redirectTo: '/one',
      //   pathMatch: 'full'
      // }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class OneRoutingModule { }
