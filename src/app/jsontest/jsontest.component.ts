import { Component, OnInit } from '@angular/core';
import {Http} from  '@angular/http'
import {} from 'rxjs'
import 'rxjs'
@Component({
  selector: 'app-jsontest',
  templateUrl: './jsontest.component.html',
  styleUrls: ['./jsontest.component.css']
})
export class JsontestComponent implements OnInit {

  constructor(private http:Http) { }
  articles;
  ngOnInit() {
  this.articles=  this.http.get("http://localhost:3000/articles").map(res=>res.json());

  }

}
