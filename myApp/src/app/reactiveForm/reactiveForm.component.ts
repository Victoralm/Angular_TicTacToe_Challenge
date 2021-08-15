import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactiveForm',
  templateUrl: './reactiveForm.component.html',
  styleUrls: ['./reactiveForm.component.scss']
})
export class ReactiveFormComponent implements OnInit {

  form: FormGroup = this.fb.group({
    firstName: '',
    age: '',
    lastName: '',
    twitter: ''
  });

  // person = {
  //   firstname: 'Coder',
  //   age: 25,
  //   lastname: 'Byte',
  //   twitter: '@coderbyte'
  // };
  // personProps = [];

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    // try {
    //   const formDataObj: object = {};
    //   // const formDataObj: { [unit: string]: number } = {};
    //   // const formDataObj = this.form.controls;
    //   for (const prop of Object.keys(this.person)) {
    //     formDataObj[prop] = new FormControl(this.person[prop]);
    //     this.personProps.push(prop);
    //   }
    //   this.form = new FormGroup(formDataObj);
    // } catch (error) {
    //   console.log(error);

    // }

  }

}
