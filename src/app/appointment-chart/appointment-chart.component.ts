import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-appointment-chart',
  templateUrl: './appointment-chart.component.html',
  styleUrls: ['./appointment-chart.component.css']
})
export class AppointmentChartComponent implements OnInit {
  constructor (private api:ApiService){}
 allappointments:any=[]
ngOnInit(): void {
  this.api.getappointment().subscribe((result:any)=>{
      this.allappointments=result
      console.log(this.allappointments);
      
  },(error)=>{
    alert(error)
  })
}

deleteappointment(phonenumber:any){
 this.api.deleteappointment(phonenumber).subscribe((result:any)=>{
    this.allappointments=result
 },(error)=>{
  alert(error)
 })
 
}

}
