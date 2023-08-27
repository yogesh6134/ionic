import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MoviesdetailPageRoutingModule } from './moviesdetail-routing.module';

import { MoviesdetailPage } from './moviesdetail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MoviesdetailPageRoutingModule
  ],
  declarations: [MoviesdetailPage]
})
export class MoviesdetailPageModule {}
