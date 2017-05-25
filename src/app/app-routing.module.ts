import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from "app/login/login.component";
import { DashboardComponent } from "app/dashboard/dashboard.component";
import { LayoutComponent } from "app/layout/layout.component";
import { CardsComponent } from "app/cards/cards.component";

const routes: Routes = [
  {path:"",component:LayoutComponent, children:[
      {path:"",component:DashboardComponent},
    {path:"dashboard",component:DashboardComponent},
    {path:"cards",component:CardsComponent}
  ]

  },
  {
    path: 'login',component:LoginComponent
  },
  {
  path: '**',
  redirectTo: '/dashboard',
  pathMatch: 'full'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
