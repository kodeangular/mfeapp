import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BusRoutingModule } from './bus-routing.module';
import { BusSearchComponent } from './bus-search/bus-search.component';


@NgModule({
  declarations: [
    BusSearchComponent
  ],
  imports: [
    CommonModule,
    BusRoutingModule
  ]
})
export class BusModule { }
