import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormArray,FormControl } from "@angular/forms";
@Component({
  selector: 'app-modelform',
  templateUrl: './modelform.component.html',
  styleUrls: ['./modelform.component.css']
})
export class ModelformComponent implements OnInit {

  constructor(private fb: FormBuilder) { }
  form: FormGroup
  Formnames=[
        this.fb.control('Will 1222', Validators.required),
        this.fb.control('Will 23333', Validators.required)]
  ngOnInit() {
    this.form = this.fb.group({
      title: 'This is title',
      name: this.fb.array([
        this.fb.control('Will 1', Validators.required),
        this.fb.control('Will 2', Validators.required)])
    });
    // const FormnamesFGs =this.Formnames.map(Formname => this.fb.group(Formname));
  //   const FormnamesFormArray = this.fb.array(this.Formnames);
    // this.form.setControl('name', FormnamesFormArray);
  }
  submit() {
    console.log("aaa")
   // this.form.reset();

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
