import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @Input() myForm?: FormGroup;

  constructor(private ds: DataService) { }

  userdata = {
    name: '',
    lname: '',
    age: '',
    gardian: '',
    lan: '',
    tel: '',
     hin: '',
    password: '',
   
    state: '',
  
    addsubject: []
  }

  ngOnInit(): void {
    console.log('in home', this.myForm)
    console.log('home loaded')
    this.ds.data.subscribe((data: any) => {
      console.log(data);
      this.userdata = data;
      
    })
    // this.myForm?.valueChanges.subscribe(val => {
    //   console.log('>>>>> ', val)
    // })
  }

  showdata() {
    console.log(this.myForm?.value)
  }

}
