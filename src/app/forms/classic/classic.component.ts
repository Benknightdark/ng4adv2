import { Component, OnInit } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';

@Component({
  selector: 'app-classic',
  templateUrl: './classic.component.html',
  styleUrls: ['./classic.component.css']
})
export class ClassicComponent implements OnInit {
  data: any = {}
  JSONoptions = new RequestOptions({ headers: new Headers({ 'Content-Type': 'application/json;charset=utf-8' }) });

  constructor(private http: Http) { }

  ngOnInit() {
  }
  onSubmit(f) {
    this.http.post
      ("http://localhost:3000/forms", JSON.stringify(f.value), this.JSONoptions)
      .subscribe(res => {

        this.http.get
          ("http://localhost:3000/forms").subscribe(res => console.log(res.json()))
      }
      )
  }
}
