import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlightsRoutingModule } from './flights-routing.module';
import { FlightsSearchComponent } from './flights-search/flights-search.component';


@NgModule({
  declarations: [
    FlightsSearchComponent
  ],
  imports: [
    CommonModule,
    FlightsRoutingModule
  ]
})
export class FlightsModule { }
