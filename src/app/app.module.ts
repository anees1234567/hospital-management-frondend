import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { PatientListComponent } from './patient-list/patient-list.component';
import { DoctorListComponent } from './doctor-list/doctor-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddDoctorComponent } from './add-doctor/add-doctor.component';
import { MainComponent } from './main/main.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { AppointmentChartComponent } from './appointment-chart/appointment-chart.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PiechartsComponent } from './piecharts/piecharts.component';
import { RegisterpatientComponent } from './registerpatient/registerpatient.component';
import { FooterComponent } from './footer/footer.component';
import { ConfirmedappointmentsComponent } from './confirmedappointments/confirmedappointments.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    PatientListComponent,
    DoctorListComponent,
    AddDoctorComponent,
    MainComponent,
    DashboardComponent,
    SidenavComponent,
    AppointmentChartComponent,
    PiechartsComponent,
    RegisterpatientComponent,
    FooterComponent,
    ConfirmedappointmentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    HighchartsChartModule,
    BrowserAnimationsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
