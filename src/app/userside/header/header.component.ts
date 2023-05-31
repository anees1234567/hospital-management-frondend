import { Component,OnInit } from '@angular/core';
import { UserhomeComponent } from '../userhome/userhome.component';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  {

  

  constructor(private api:UserserviceService,){}

 
   
     

}
