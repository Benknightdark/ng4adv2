import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LayoutComponent } from './layout/layout.component';
import { CardsComponent } from './cards/cards.component';
import { LoginGuard } from "app/guard/login.guard";
import { LoginService } from "app/services/login.service";
import { TemplateformComponent } from './templateform/templateform.component';
import { ModelformComponent } from './modelform/modelform.component';
import { EnsureLoginGuardGuard } from "app/guard/ensure-login-guard.guard";
import { PreventGuard } from "app/guard/prevent.guard";
import { LogintestComponent } from './logintest/logintest.component';
import { JsontestComponent } from './jsontest/jsontest.component';
import { ClassicComponent } from './forms/classic/classic.component';
import { Classic2Component } from './classic2/classic2.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    LayoutComponent,
    CardsComponent,
    TemplateformComponent,
    ModelformComponent,
    LogintestComponent,
    JsontestComponent,
    ClassicComponent,
    Classic2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [LoginGuard,
  EnsureLoginGuardGuard,
  LoginService,PreventGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
