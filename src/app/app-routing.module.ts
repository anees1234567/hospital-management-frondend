import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDoctorComponent } from './add-doctor/add-doctor.component';
import { AppointmentChartComponent } from './appointment-chart/appointment-chart.component';
import { DoctorListComponent } from './doctor-list/doctor-list.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { PatientListComponent } from './patient-list/patient-list.component';
import { RegisterComponent } from './register/register.component';
import { RegisterpatientComponent } from './registerpatient/registerpatient.component';



const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"home",component:MainComponent},
  {path:"register-admin",component:RegisterComponent},
  {path:"patient-list",component:PatientListComponent},
  {path:"doctor_list",component:DoctorListComponent},
  {path:"appointmentlist",component:AppointmentChartComponent},
  {path:"register-patient",component:RegisterpatientComponent},
  {path:"add-doctor",component:AddDoctorComponent},
  { path: 'users', loadChildren: () => import('./userside/userside.module').then(m => m.UsersideModule) },
  { path:'',redirectTo:'users',pathMatch:'full'}

 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export { Routes };

