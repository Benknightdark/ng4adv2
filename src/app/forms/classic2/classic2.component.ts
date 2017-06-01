import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from "@angular/forms";
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
  formdata
  showform: boolean;
  keys
  constructor(private http: Http, private fb: FormBuilder) { }

  ngOnInit() {
    this.http.get("http://localhost:3000/forms")
      .map(res => res.json())
      .subscribe(data => {
        this.formdata = data[0]
        this.form = this.fb.group({
          title: [this.formdata.title, [Validators.required, forbiddenNameValidator]],
          body: [this.formdata.body, [Validators.required]],
          addresses: this.fb.array(
            this.formdata.addresses.map(addresses => (this.fb.control(addresses, [Validators.required])))
          ),
          pets: new FormControl(),
          pets2:new FormControl(),
          isBuy: new FormControl(),
          habbits:this.fb.group(
              this.formdata.habbits.map(h => h)[0]
        // this.formdata.habbits.map(a=>this.fb.control(a))[0]]
          ),
              habbit2:this.fb.group(
                      {
          "sleep":false,
           "play":false,
           "eat":false
        }
        // this.formdata.habbits.map(a=>this.fb.control(a))[0]]
          )

        })
        this.showform = true;
        console.log({
          "sleep":true,
           "play":true,
           "eat":true
        })
       this.keys= Object.keys( (this.form.get("habbits")as FormGroup).controls)

      })

  }
  onAdd() {
    const addresses = this.form.controls.addresses as FormArray
    addresses.push(this.fb.control("address" + (addresses.length + 1)));
  }
  SetData() {
    this.form.reset();

  }
  submit() {
    console.log(this.form)
  }
  ReturnFormGroup(ControlName:string){
   return  Object.keys( (this.form.get(ControlName)as FormGroup).controls)
  }
}
