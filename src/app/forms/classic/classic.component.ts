import { Component, OnInit } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs'
import { forbiddenNameValidator } from "app/shared/customvalidator";

@Component({
  selector: 'app-classic',
  templateUrl: './classic.component.html',
  styleUrls: ['./classic.component.css']
})
export class ClassicComponent implements OnInit {
  data: any
  JSONoptions = new RequestOptions({ headers: new Headers({ 'Content-Type': 'application/json;charset=utf-8' }) });
  showform:boolean=false;
  constructor(private http: Http) { }

  ngOnInit() {
    this.http.get("http://localhost:3000/forms").map(res=>res.json())
    .subscribe(d=>{
      console.log(d[0])
        this.data=d[0];
        this.showform=true;
        console.log(this.data.habbits[0])
        console.log(this.data.isBuy)
    })
  }
  AddNew() {
    this.data.list.push( this.data.list.length + 1)
  }
  ReturnObjectKeys(name:string){
   return Object.keys(this.data[name][0])
  }
  onSubmit(f) {
    // if (f.value.group1) {
    //   console.log(f.controls.group1.value)
    //   this.http.post
    //     ("http://localhost:3000/forms", JSON.stringify(f.value.group1), this.JSONoptions)
    //     .subscribe(res => {
    //       this.http.get
    //         ("http://localhost:3000/forms")
    //         .map(res => res.json())

    //         .subscribe(res => console.log(res))

    //     }
    //     )
    // }

  }
}
