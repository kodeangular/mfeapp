import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrainsSearchComponent } from './trains-search/trains-search.component';

const routes: Routes = [
  { path: 'trains-search', component: TrainsSearchComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrainsRoutingModule {}
