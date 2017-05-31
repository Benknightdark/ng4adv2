import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from "@angular/forms";
import { Http } from "@angular/http";
import { } from 'rxjs'
import 'rxjs'
@Component({
  selector: 'app-classic2',
  templateUrl: './classic2.component.html',
  styleUrls: ['./classic2.component.css']
})
export class Classic2Component implements OnInit {
  form: FormGroup
  constructor(private http: Http, private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      title: ["", [Validators.required]],
      body: ["", [Validators.required]],
      addresses: this.fb.array([
           this.fb.control("address1"),
          this.fb.control("address2")
        // this.fb.control("")
      ])
    })
    this.http.get("http://localhost:3000/forms")
      .map(res => res.json())
      .subscribe(data => {

     //   this.form.reset(data[0])

      })


  }
  onAdd() {
    console.log("aa")
    const addresses = this.form.controls.addresses as FormArray
    addresses.push(this.fb.control("address" + (addresses.length + 1)));
  }
}
