import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { AuthGuard } from './auth.guard';
import { DashBoardComponent } from './DashBoard/dash-board/dash-board.component';
import { LoginComponent } from './login/login.component'; 

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
 
  { path: 'login', component: LoginComponent},
  { path: 'DashBoard\dash-board', component: DashBoardComponent,canActivate :[AuthGuard],},

  
    { path: 'Add-Patient', component: AddPatientComponent},
    { path: 'Add-Patient/:id', component: AddPatientComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
