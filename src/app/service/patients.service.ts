import { Injectable } from '@angular/core';
import{ HttpClient, HttpHeaders  } from '@angular/common/http';
import{Observable} from 'rxjs';
import { Hospital } from '../model/hospital.model';

@Injectable({
  providedIn: 'root'
})
export class PatientsService {

  constructor(private http:HttpClient) { }

  currentPatient: Hospital = {

    id:'',
    name: '',
    email:'',
    website:''
     
  }

  getUrl ='http://localhost:3000/users';
  getAll():Observable<Hospital[]>
  {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Content-Type','application/json');
    return this.http.get<Hospital[]>(this.getUrl, {headers});
  }
  deleteData(id:any):Observable<Hospital>
  {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Content-Type','application/json');
    return this.http.delete<Hospital>(this.getUrl + "/" + id, {headers});
  }


  create(data:Hospital):Observable<Hospital>{

    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Content-Type','application/json');
    return this.http.post<Hospital>(this.getUrl ,data, {headers});

  }


  update(data:Hospital):Observable<Hospital>{

    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Content-Type','application/json');
    return this.http.post<Hospital>(this.getUrl + '/' + data.id,data , {headers});

  }

  getByID(data:Hospital){  
    return this.http.post<Hospital>(this.getUrl + '/' + data.id,data );
  }
}
