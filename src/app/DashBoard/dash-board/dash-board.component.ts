import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { Hospital } from 'src/app/model/hospital.model';
import { PatientsService } from 'src/app/service/patients.service';


@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})


export class DashBoardComponent implements OnInit {
  
 

 
  dtTrigger: Subject<any> = new Subject<any>();

  constructor(private hospital : PatientsService,private router:Router) { }
  
 

  // allData: Hospital[];

  // allData: Hospital[];
  allData : Hospital[];

//   public data = [
//     {name: 'therichpost', email: 'therichpost@gmail.com', website:'therichpost.com'},
//     {name: 'therichpost', email: 'therichpost@gmail.com', website:'therichpost.com'},
//     {name: 'therichpost', email: 'therichpost@gmail.com', website:'therichpost.com'},
//     {name: 'Nandu', email: 'therichpost@gmail.com', website:'therichpost.com'},
//     {name: 'therichpost', email: 'therichpost@gmail.com', website:'therichpost.com'},
//     {name: 'therichpost', email: 'therichpost@gmail.com', website:'therichpost.com'},
//     {name: 'therichpost', email: 'therichpost@gmail.com', website:'therichpost.com'},
//     {name: 'therichpost', email: 'therichpost@gmail.com', website:'therichpost.com'},
// ];
  title = 'angulardatatables';
  dtOptions: DataTables.Settings = {};

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 4,
      processing: true
  }
  this.getAllData();
}

logout()
{
  this.router.navigate(['/login']);
  localStorage.clear();
}

  
 getAllData()
 {
   this.hospital.getAll().subscribe(
     (data:Hospital[]) =>{
        this.allData  = data;


        console.log("Here is My Data",this.allData);
        this.dtTrigger.next();

     });
 } 

 deleteData(id:any)
 {
    console.log("Outside....+",id);
    this.hospital.deleteData(id).subscribe(
      (data:Hospital) =>{
       
         console.log("helllllllo++++++",id);
         this.getAllData();
         console.log(data);
      });
      window.location.reload();
}


edit(group:any)
          {
             this.hospital.currentPatient = Object.assign({},group);
             console.log(this.hospital.currentPatient);
             this.router.navigate(['/Add-Patient',this.hospital.currentPatient.id]);
          
           
}
}
