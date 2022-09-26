import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  myForm!: FormGroup;
  states: Array<String> = ['AR', 'AL', 'CA', 'DC'];
valid: any;
  constructor(private ds: DataService) {

  }
 

  ngOnInit() {
    this.myForm = new FormGroup({
      name: new FormControl('',Validators.required),
      lname: new FormControl('',Validators.required),
      age: new FormControl('',[ Validators.required,this.agrvalidate]),
      gardian: new FormControl({value:'',disabled:true} ,Validators.required),
      lan: new FormControl( '',[this.englishvalidate,Validators.required]),
      tel: new FormControl('',),
       hin: new FormControl(''),
      password: new FormControl('',[Validators.minLength(8),Validators.maxLength(15),Validators.required]),
     
      state: new FormControl('',Validators.required),
    
      addsubject: new FormArray([]),
      tc: new FormControl()
    });
  }

  disablegardian()
  {



    if(this.Age.invalid)
    {
      this.myForm.get('gardian')?.enable();
    }
    if(this.Age.valid)
    {
      this.myForm.get('gardian')?.disable();
    }
    // this.Gardian?.disable();
  }
 show()
 {
  console.log(this.myForm.get('age') );
 }
 get Gardian() {
  return this.myForm.get('gardian');
 }
  get Name() {
  return this.myForm.get('name')!;
 }
 get lName() {
  return this.myForm.get('lname')!;
 }
 get Age() {
  return this.myForm.get('age')!;
 }
 get state(){
  return this.myForm.get('state');
 }
 get Password() {
  return this.myForm.get('password')!;
 }
 get Marks(){
 return  this.myForm.get('addsubject') as FormArray
 }
 get Markscontrol(){
  return  this.Marks.controls as FormGroup[];
  }
 adddetailsarray() {
  const temp = this.myForm.get('addsubject') as FormArray;
  temp.push(new FormGroup({
    marks: new FormControl('',Validators.required),

    subject: new FormControl()

  }))
 
 }
 agrvalidate(control:AbstractControl)
 {
      if(control.value< 18)
      {
        return {'age_error' : 'age cannot be less than.'};
      }
     
      return null;
 }
 englishvalidate(control:AbstractControl)
 {
      if(control.value === false)
      {
        return {'age_error' : 'age cannot be less than.'};
      }
     
      return null;
 }
 

 deletearray(i:number) {
  const temp = this.myForm.get('addsubject') as FormArray;
  temp.removeAt(i);

 }
 submitted()
 {
  console.log(this.myForm );
  this.myForm.markAllAsTouched();
  this.ds.data?.next(this.myForm.value)

 }

}

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.scss']
// })
// export class AppComponent implements OnInit {
//   myForm!: FormGroup;

//   constructor(private fb: FormBuilder) {}

//   ngOnInit() {
//     this.myForm = this.fb.group({
//       name: 'Sammy',
//       email: '',
//       message: ''
//     });
//   }

//   onSubmit(form: FormGroup) {
//     console.log('Valid?', form.valid); // true or false
//     console.log('Name', form.value.name);
//     console.log('Email', form.value.email);
//     console.log('Message', form.value.message);
//   }
//}