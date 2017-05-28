import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormArray } from "@angular/forms";
@Component({
  selector: 'app-modelform',
  templateUrl: './modelform.component.html',
  styleUrls: ['./modelform.component.css']
})
export class ModelformComponent implements OnInit {

  constructor(private fb: FormBuilder) { }
  form: FormGroup
  ngOnInit() {
    this.form = this.fb.group({
      title: 'This is title',
      name: this.fb.array([
        this.fb.control('Will 1', Validators.required),
        this.fb.control('Will 2', Validators.required)])
    });
  }
  submit() {

  }
  Add(){
    const control = <FormArray> this.form.controls['name'];
        control.push(this.fb.control('', Validators.required));
  }
Delete(i){
  console.log("fdfs")
   const control = <FormArray> this.form.controls['name'];
        control.removeAt(i)
}

}
