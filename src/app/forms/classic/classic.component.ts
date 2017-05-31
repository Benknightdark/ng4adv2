import { Component, OnInit } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import {Observable} from 'rxjs';
import 'rxjs'
@Component({
  selector: 'app-classic',
  templateUrl: './classic.component.html',
  styleUrls: ['./classic.component.css']
})
export class ClassicComponent implements OnInit {
  data: any = {title:"",body:[]}
  JSONoptions = new RequestOptions({ headers: new Headers({ 'Content-Type': 'application/json;charset=utf-8' }) });
  list=[1,2,3,4,6]
  constructor(private http: Http) { }

  ngOnInit() {
  }
  AddNew(){
    this.list.push(0)
  }
  onSubmit(f) {

    if(f.value.group1){
      console.log(f.controls.group1.value)
    this.http.post
      ("http://localhost:3000/forms", JSON.stringify(f.value.group1), this.JSONoptions)
      .subscribe(res => {
        this.http.get
          ("http://localhost:3000/forms")
          .map(res=>res.json())

          .subscribe(res => console.log(res))

      }
      )
    }

  }
}
