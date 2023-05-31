import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {





  constructor(private api:ApiService,private formbuilder:FormBuilder){}

    staffidvalue:boolean=true
    passwordvalue:boolean=true
    loginform= this.formbuilder.group({
        staff_id:['',[Validators.required,Validators.minLength(2),Validators.pattern('[0-9]*')]],
        password:['',[Validators.required,Validators.minLength(6)]]
    })   

 
    
    login(){
      if(this.loginform.valid){
        alert("form is valid")
        this.staffidvalue=true
        this.passwordvalue=true
       let  staffid=this.loginform.value.staff_id
       
       
       let password=this.loginform.value.password
        this.api.login(staffid,password).subscribe((result:any)=>{
          console.log(result);
          
          alert(result)
        },(error)=>{
          alert(error)
        })


      }else {
      
      
    if((this.loginform.value.staff_id=="" && this.loginform.get('staff_id')?.untouched) &&(this.loginform.value.password=="" && this.loginform.get('password')?.untouched)){
        this.staffidvalue=false
        this.passwordvalue=false
     }
   else if(this.loginform.value.password=="" && this.loginform.get('password')?.untouched){
         this.passwordvalue=false
         this.staffidvalue=true 
         
      }else if(this.loginform.value.staff_id=="" && this.loginform.get('staff_id')?.untouched){
        this.staffidvalue=false
        this.passwordvalue=true
     }
    }
  }
 
}
