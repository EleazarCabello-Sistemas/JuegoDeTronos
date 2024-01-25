import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MembersPageRoutingModule } from './members-page-routing.module';
import { MembersComponent } from './members/members.component';


@NgModule({
  declarations: [
    MembersComponent
  ],
  imports: [
    CommonModule,
    MembersPageRoutingModule
  ]
})
export class MembersPageModule { }
