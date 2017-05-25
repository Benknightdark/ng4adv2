import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from "app/login/login.component";
import { DashboardComponent } from "app/dashboard/dashboard.component";
import { LayoutComponent } from "app/layout/layout.component";

const routes: Routes = [
  {path:"",component:LayoutComponent, children:[
    {path:"dashboard",component:DashboardComponent}
  ]

  },
  {
    path: 'login',component:LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
