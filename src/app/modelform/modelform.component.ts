import { Component, OnInit } from '@angular/core';
import {  FormGroup, Validators } from "@angular/forms";
@Component({
  selector: 'app-modelform',
  templateUrl: './modelform.component.html',
  styleUrls: ['./modelform.component.css']
})
export class ModelformComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  onSubmit(f){
    console.log(f)
  }

}
