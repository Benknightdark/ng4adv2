import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from "@angular/forms";
@Component({
  selector: 'app-modelform',
  templateUrl: './modelform.component.html',
  styleUrls: ['./modelform.component.css']
})
export class ModelformComponent implements OnInit {

  constructor(private fb:FormBuilder) { }
  form:FormGroup
  ngOnInit() {
 this.form = this.fb.group({
     title: 'This is title',
     name: this.fb.group({
       firstName: 'Will',
       lastName: 'Huang'
}) });
  }
  submit(){

  }


}
