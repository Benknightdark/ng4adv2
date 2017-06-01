import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { LayoutComponent } from "./layout/layout.component";
import { CardsComponent } from "./cards/cards.component";
import { LoginGuard } from "./guard/login.guard";
import { ModelformComponent } from "./modelform/modelform.component";
import { TemplateformComponent } from "./templateform/templateform.component";
import { EnsureLoginGuardGuard } from "./guard/ensure-login-guard.guard";
import { PreventGuard } from "./guard/prevent.guard";
import { LogintestComponent } from "app/logintest/logintest.component";
import { JsontestComponent } from "app/jsontest/jsontest.component";
import { ClassicComponent } from "app/forms/classic/classic.component";
import { Classic2Component } from "app/forms/classic2/classic2.component";

const routes: Routes = [
  {
    path: "", component: LayoutComponent, children: [
      { path: "", component: ClassicComponent, canActivate: [LoginGuard] },
      { path: "dashboard", component: DashboardComponent, canActivate: [LoginGuard] },
      { path: "cards", component: CardsComponent, canActivate: [LoginGuard] },
      { path: "forms/classic", component: ClassicComponent },
      { path: "forms/classic2", component: Classic2Component },

      { path: 'charts', loadChildren: './charts/charts.module#ChartsModule', canActivate: [LoginGuard] },
    ]

  },
  {
    path: 'login', component: LoginComponent, canDeactivate: [PreventGuard]
  },
  {
    path: 'tform', component: TemplateformComponent
  },
  {
    path: 'mform', component: ModelformComponent
  },
  {
    path: 'login2', component: LogintestComponent
  },
  {
    path: 'jsontest', component: JsontestComponent
  },
  {
    path: '**',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: false,
    enableTracing: false,
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
