import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersideRoutingModule } from './userside-routing.module';
import { UsersideComponent } from './userside.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { FooterComponent } from './footer/footer.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { FacilitiesComponent } from './facilities/facilities.component';
import { HeaderComponent } from './header/header.component';
import { UserhomepageComponent } from './userhomepage/userhomepage.component';
import { AppointmentrequestComponent } from './appointmentrequest/appointmentrequest.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UsersideComponent,
    UserhomeComponent,
    FooterComponent,
    DoctorsComponent,
    FacilitiesComponent,
    HeaderComponent,
    UserhomepageComponent,
    AppointmentrequestComponent
  ],
  imports: [
    CommonModule,
    UsersideRoutingModule,
    FormsModule,
  ]
})
export class UsersideModule { }
