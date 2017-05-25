import {LoginService} from '../services/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  constructor(private LoginService:LoginService) { }

  ngOnInit() {

  }
  OnClick(){
    this.LoginService.Logout();
  }
}
