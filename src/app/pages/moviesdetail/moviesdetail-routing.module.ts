import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MoviesdetailPage } from './moviesdetail.page';

const routes: Routes = [
  {
    path: '',
    component: MoviesdetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoviesdetailPageRoutingModule {}
