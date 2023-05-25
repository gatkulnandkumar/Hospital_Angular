import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormsModule} from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
    localStorage.clear();
  }

model ={
  email :"admin",
  password :"admin123"
}

  submit(login:any)
  {

    localStorage.setItem("email" ,login.email);
    localStorage.setItem("password" ,login.password);

    if(login.email=="admin" && login.password=="admin123")
    {
      this.router.navigate(['\DashBoard\dash-board']);
      console.log("this submit Button:===",login);

    }else{
      console.log("Invalid UserName or Password");
    }
    
  }

}
