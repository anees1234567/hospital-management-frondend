import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.css']
})
export class DoctorListComponent implements OnInit {

      constructor(private api:ApiService){}
      alldetails:any=[]

      ngOnInit(): void {
        this.api.getalldoctors().subscribe((result:any)=>{
            this.alldetails=result
            console.log(this.alldetails);
        },(result:any)=>{
          console.log(result.error);
          
        })
      }
}
