import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusSearchComponent } from './bus-search/bus-search.component';

const routes: Routes = [{ path: 'bus-search', component: BusSearchComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BusRoutingModule {}
