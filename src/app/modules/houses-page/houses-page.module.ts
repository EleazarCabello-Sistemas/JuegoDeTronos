import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HousesPageRoutingModule } from './houses-page-routing.module';
import { HousesComponent } from './houses/houses.component';


@NgModule({
  declarations: [
    HousesComponent
  ],
  imports: [
    CommonModule,
    HousesPageRoutingModule
  ]
})
export class HousesPageModule { }
