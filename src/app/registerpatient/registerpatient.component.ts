import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-registerpatient',
  templateUrl: './registerpatient.component.html',
  styleUrls: ['./registerpatient.component.css']
})
export class RegisterpatientComponent {

  patientRegistrationForm:any;


    constructor(private api:ApiService){

    }
 
    firstName: any;
    lastName: any;
    dateOfBirth: any;
    gender: any;
    email: any;
    phoneNumber:any;
    age: any;
    hospitalNumber: any;
    patientName:any
 

 

  onsubmit(){

   this.patientName=`${this.firstName}${this.lastName}`
   console.log(this.patientName);

    

    this.api.addpatients(this.hospitalNumber,this.patientName,this.phoneNumber,this.email,this.dateOfBirth,this.gender).subscribe((result:any)=>{
      alert(result)
    })

  }
  
  
}

 

  


