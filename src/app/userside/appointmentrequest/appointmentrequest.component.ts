import { Component } from '@angular/core';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-appointmentrequest',
  templateUrl: './appointmentrequest.component.html',
  styleUrls: ['./appointmentrequest.component.css']
})
export class AppointmentrequestComponent {

  constructor (private api:UserserviceService){}

   doctorName:any
   firstName:any
   LastName:any
   phonenumber:any
   date:any
   patientName:any
   
  datestring:any
   


   requestappointment(){
    this.patientName=`${this.firstName}${this.LastName}`
    this.datestring=this.date.toString();
    console.log(this.patientName,this.datestring,this.phonenumber,this.doctorName);
    
    
    this.api.requestappointment(this.patientName,this.doctorName,this.phonenumber,this.date).subscribe((result:any)=>{
      console.log(result);
      
      
      
      
      
    },(error)=>{
      console.log(error);
      
    })
   }



}
