import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
        constructor(private http: HttpClient){}


   register(staff_id:any,username:any,password:any) {

      const body ={
          staff_id,
          username,
          password
      }
      
      

      return this.http.post('http://localhost:3000/register',body)
        
     
       
    }


     login(staff_Id:any,password:any) {
       let staffId=parseInt(staff_Id)
       console.log(typeof staffId);
       
      const body ={
          staffId,
          password
      }
      console.log(body);
      
      
      

      return this.http.post('http://localhost:3000/hospital/login-admin',body)
        
     
       
    }


    BASE_URL='http://localhost:3000'

  adddoctor(formdata:any){
   


    return this.http.post(`${this.BASE_URL}/hospital/add-doctor`,formdata)

  }



  getalldoctors(){
    return this.http.get(`${this.BASE_URL}/hospital/get-doctordetails`)

  }

  getallpatients(){
    return this.http.get(`${this.BASE_URL}/hospital/get-allpatients`)

  }

  addpatients(patientId:any,patientName:any,phonenumber:any,email:any,dateofbirth:any,gender:any){
    const body={
      patientId,patientName,phonenumber,email,dateofbirth,gender
    }

    return this.http.post(`${this.BASE_URL}/hospital/add-patients`,body)

  }


  getappointment(){
    return this.http.get(`${this.BASE_URL}/hospital/get-allappointment`)

  }

  deleteappointment(id:any){
    console.log(id);
    
    return this.http.delete(`${this.BASE_URL}/hospital/deleteappointment/${id}`)

  }





   




}



