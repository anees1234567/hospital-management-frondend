import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {
  allpatients: any;
  dob: any;
  age:number=0;
  birthDate:any


  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.getallpatients().subscribe((result) => {
      this.allpatients = result;
      this.allpatients.forEach((patient: any) => {
        console.log(patient);
        this.getDateOfBirth(patient);
      });
    });
  }


getDateOfBirth(patient: any): void {
  this.dob = patient.dateofbirth;
  console.log("dob:", this.dob);
  const parts = this.dob.split("-");
  const birthDate = new Date(parseInt(parts[2]), parseInt(parts[1]) - 1, parseInt(parts[0]));
  console.log("birthDate:", birthDate);
  this.birthDate=birthDate
  
}
}

