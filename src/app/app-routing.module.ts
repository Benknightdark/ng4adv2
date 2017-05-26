import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { LoginComponent } from "app/login/login.component";
import { DashboardComponent } from "app/dashboard/dashboard.component";
import { LayoutComponent } from "app/layout/layout.component";
import { CardsComponent } from "app/cards/cards.component";
import { LoginGuard } from "app/guard/login.guard";
import { ModelformComponent } from "app/modelform/modelform.component";
import { TemplateformComponent } from "app/templateform/templateform.component";

const routes: Routes = [
  {path:"",component:LayoutComponent, children:[
      {path:"",component:DashboardComponent,canActivate:[LoginGuard]},
    {path:"dashboard",component:DashboardComponent,canActivate:[LoginGuard]},
    {path:"cards",component:CardsComponent,canActivate:[LoginGuard]},
    {path: 'charts', loadChildren: './charts/charts.module#ChartsModule',canActivate:[LoginGuard]},
  ]

  },
  {
    path: 'login',component:LoginComponent
  },
   {
    path: 'tform',component:TemplateformComponent
  },
   {
    path: 'mform',component:ModelformComponent
  },
  {
  path: '**',
  redirectTo: '/dashboard',
  pathMatch: 'full'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
        useHash: false,
        enableTracing: false,
        preloadingStrategy: PreloadAllModules
      })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
