import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from "@angular/forms";
import { Http } from "@angular/http";
import { } from 'rxjs'
import 'rxjs'
import { forbiddenNameValidator } from "app/shared/customvalidator";
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
      title: ["", [Validators.required,forbiddenNameValidator]],
      body: ["", [Validators.required]],
      addresses: this.fb.array([
           this.fb.control("address1"),
         // this.fb.control("address2")
         //this.fb.control("address1")
      ])
    })
    this.http.get("http://localhost:3000/forms")
      .map(res => res.json())
      .subscribe(data => {
        console.log(data[0])
        this.form.patchValue(data[0])

      })


  }
  onAdd() {
    console.log("aa")
    const addresses = this.form.controls.addresses as FormArray
    addresses.push(this.fb.control("address" + (addresses.length + 1)));
  }
  SetData(){
      this.form.setValue({
      "title": "title",
      "body": "body",
      "addresses": [
        "address123213",
        "address123213123123"
      ]
    })
  }
}
