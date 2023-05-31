import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private http:HttpClient){ }


requestappointment(patientName:any,doctorName:any,phonenumber:any,date:any){

  const body={
    patientName,
    doctorName,    
    phonenumber,
    appointmentdate:date
  }
  console.log(body);
  
    return this.http.post('http://localhost:3000/hospital/add-appointment',body)
    
    
}


getdoctors(){
  return this.http.get('http://localhost:3000/hospital/get-doctordetails')
}
  

  
}
