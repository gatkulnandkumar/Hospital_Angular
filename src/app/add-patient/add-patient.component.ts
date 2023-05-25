import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Hospital } from '../model/hospital.model';
import { PatientsService } from '../service/patients.service';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent implements OnInit {

  patientId: any;
  id = '';
  name = ''
  email = ''
  website = ''

  constructor(public patientsService: PatientsService, private router: Router, private activatedRoute: ActivatedRoute) { }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => { this.patientId = params.id });
    console.log("patientId===>", this.patientId);
    if (this.patientId != null || this.patientId != undefined) {

      console.log("UserDataByID:: ", this.patientsService.getByID(this.patientId))
    }


  }



  CreateAndUpdate(currentPatient: Hospital) {
    console.log(currentPatient);

    let payload = {

      id: this.id,
      name: this.name,
      email: this.email,
      website: this.website
    }

    console.log("PAYLOAD: ", payload)
    if (currentPatient.id == null) {
      console.log('update');
      this.update(payload);
      this.router.navigate(['\DashBoard\dash-board']);
    } else {

      console.log('Create');
      this.create(payload);
      this.router.navigate(['\DashBoard\dash-board']);

    }

  }


  create(data: Hospital) {

    this.patientsService.create(data).subscribe();



  }

  update(data: Hospital) {

    console.log("My Data is here===>", data);
    this.patientsService.update(data).subscribe();

  }




  // clear()
  // {
  //   this.patientsService.currentPatient= {

  //       id:'',
  //       name: '',
  //       email:'',
  //       website:''


  //   }
  // }
}
