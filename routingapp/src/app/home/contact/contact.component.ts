import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
   
  reactive!:FormGroup;

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.reactive  =   this.fb.group({
      name: ['',this.checkname]
    }
    
    )
  }
  get Name()
  {
    const value = <FormControl>this.reactive.controls['name'];
    return value;
  }
  checkname(control: FormControl)
  {
    if(control)
    {
      if(control.value === 'sha')
         return {'nameerror': 'can not name'};
    }
    return null;
  }
  onsub(){
    console.log(this.reactive);
  }
}
