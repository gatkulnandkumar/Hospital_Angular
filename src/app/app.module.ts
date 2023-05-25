import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {DataTablesModule} from 'angular-datatables';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashBoardComponent } from './DashBoard/dash-board/dash-board.component';
import { PatientsService } from './service/patients.service';
import { HttpClientModule} from '@angular/common/http';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { AuthGuard } from './auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashBoardComponent,
    AddPatientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    DataTablesModule,
    HttpClientModule,
    
  ],
  providers: [PatientsService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
