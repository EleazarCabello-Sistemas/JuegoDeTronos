import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home-page/home/home.component';

const routes: Routes = [

  {
    path:"",
    component: HomeComponent,
    loadChildren: () => import("./modules/home-page/home-page.module").then(m => m.HomePageModule)
  },
  {
    path:"members",
    loadChildren:() => import("./modules/members-page/members-page.module").then(m => m.MembersPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
