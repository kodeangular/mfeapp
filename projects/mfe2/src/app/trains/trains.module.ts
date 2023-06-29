import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrainsRoutingModule } from './trains-routing.module';
import { TrainsSearchComponent } from './trains-search/trains-search.component';

@NgModule({
  declarations: [TrainsSearchComponent],
  imports: [CommonModule, TrainsRoutingModule],
})
export class TrainsModule {}
