import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../userservice.service';
import { error } from 'highcharts';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent implements OnInit {

  doctors:any=[]
  constructor(private api:UserserviceService){}

ngOnInit(): void {
  this.api.getdoctors().subscribe((result:any)=>{
    this.doctors=result
    console.log(this.doctors);
    
    
  },(error:any)=>{
    console.log(error);
    
  })
}

}
