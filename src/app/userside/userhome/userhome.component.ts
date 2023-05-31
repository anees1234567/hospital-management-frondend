import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent implements OnInit{

     constructor(private api:UserserviceService){}
home:boolean=false
appointmentreq:boolean=false
doctors:boolean=false
facilities:boolean=false

ngOnInit(): void {
    this.home=true
    this.appointmentreq=false
    this.doctors=false
    this.facilities=false
}


renderhome(){
  this.home=true
  this.appointmentreq=false
  this.doctors=false
  this.facilities=false
}
renderdoctors(){
  this.doctors=true
  this.home=false
  this.appointmentreq=false
  this.facilities=false
}

renderfacilities(){
  this.facilities=true
  this.home=false
  this.appointmentreq=false
  this.doctors=false
}

renderappointments(){
  this.appointmentreq=true
  this.facilities=false
  this.home=false
  this.doctors=false
}


      
     
      

    
      
      



}
