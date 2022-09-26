import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  data = new  BehaviorSubject({
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
  });

  constructor() { }
}
