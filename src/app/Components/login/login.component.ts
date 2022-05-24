import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { User } from 'src/app/User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email:string;
  password:string;

  constructor(private router: Router) {}

  ngOnInit(): void {
  }

  login(){
    const studentLogin = {
      email:this.email,
      password:this.password
    }
    console.log(studentLogin);
    if(localStorage.getItem("student")){
      let studentData = JSON.parse(localStorage.getItem("student") || " ")
      if(studentData.email===studentLogin.email && studentData.password === studentLogin.password ){
            alert("Login Successfull !!")
            this.router.navigate(['/profile']);
      }
      else{
        alert("Email or Password Incorrect !!");
      }
    }
  }
}
