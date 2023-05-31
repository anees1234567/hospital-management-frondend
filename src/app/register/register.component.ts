import { Component } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

    staffidvalue:boolean=true
    usernamevalue:Boolean=true
    passwordvalue:boolean=true
    confirmpasswordvalue:boolean=true




  registerform=this.formbuilder.group({
    username:["",[Validators.required,Validators.pattern('[a-zA-Z]*')]],
    staff_Id:["",[Validators.required,Validators.pattern('[0-9]*'),Validators.minLength(8)]],
    password:["",[Validators.required,Validators.minLength(8)]],
    confirmpassword:["",[Validators.required]]
  })

  constructor(private formbuilder:FormBuilder,private api:ApiService,private registerRouter:Router){}

  register(){

if(this.registerform.valid){

    let username=this.registerform.value.username
    let staff_id=this.registerform.value.staff_Id
    let password=this.registerform.value.password
   
     this.api.register(staff_id,username,password).subscribe(
      (result:any)=>{
        alert(result)
        setTimeout(()=>{
            this.registerRouter.navigateByUrl('')
        },2000)
      },  
      (error:any)=>{
          alert(error.message)
      }
      )
     
      

     
}
else{
  if((this.registerform.value.staff_Id=="" && this.registerform.get('staff_Id')?.untouched) &&(this.registerform.value.username=="" && this.registerform.get('username')?.untouched) &&(this.registerform.value.password=="" && this.registerform.get('password')?.untouched) &&(this.registerform.value.confirmpassword=="" && this.registerform.get('confirmpassword')?.untouched)){
    this.staffidvalue=false
    this.usernamevalue=false
    this.passwordvalue=false
    this.confirmpasswordvalue=false
  }
else if((this.registerform.value.username=="" && this.registerform.get('username')?.untouched) &&(this.registerform.value.password=="" && this.registerform.get('password')?.untouched) &&(this.registerform.value.confirmpassword=="" && this.registerform.get('confirmpassword')?.untouched)){
 
  this.usernamevalue=false
  this.passwordvalue=false
  this.confirmpasswordvalue=false
      

 }
 else if((this.registerform.value.staff_Id=="" && this.registerform.get('staff_Id')?.untouched) &&(this.registerform.value.password=="" && this.registerform.get('password')?.untouched) &&(this.registerform.value.confirmpassword=="" && this.registerform.get('confirmpassword')?.untouched)){

  this.staffidvalue=false
  this.passwordvalue=false
  this.confirmpasswordvalue=false
}else   if((this.registerform.value.staff_Id=="" && this.registerform.get('staff_Id')?.untouched) &&(this.registerform.value.username=="" && this.registerform.get('username')?.untouched) &&(this.registerform.value.confirmpassword=="" && this.registerform.get('confirmpassword')?.untouched)){
  this.staffidvalue=false
  this.usernamevalue=false 
  this.confirmpasswordvalue=false
  
}else if(this.registerform.value.confirmpassword=="" && this.registerform.get('confirmpassword')?.untouched){
  this.staffidvalue=false
  this.usernamevalue=false 
  this.passwordvalue=false
}
}

}



  

   


}
