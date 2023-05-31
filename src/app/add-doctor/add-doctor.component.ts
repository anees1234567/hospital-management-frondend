import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.css']
})
export class AddDoctorComponent {
  doctorId:any;
  doctorName:string='';
  doctorCategory:string=''
  images:any


    constructor(private api:ApiService){}


 selectimage(event:any){
  if(event.target.files.length>0){
    const file=event.target.files[0]
    this.images=file
    
  }

 }

 onsubmit(){
  const formdata=new FormData

  formdata.append('doctorId',this.doctorId)
  formdata.append('doctorName',this.doctorName)
  formdata.append('doctorCategory',this.doctorCategory)
  formdata.append('file',this.images)


   
 

   this.api.adddoctor(formdata).subscribe((result:any)=>{
    console.log(result);
    
    alert(result)
   },(result)=>{
    alert(result.error)
   })

  
  
 }
  
}
