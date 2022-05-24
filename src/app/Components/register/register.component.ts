import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { User } from 'src/app/User';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @Output() addStudent:EventEmitter<User> = new EventEmitter();
  name:string;
  email:string;
  password:string;

  constructor(private router: Router) {}


  ngOnInit(): void {

  }

  register(){
    const student = {
      name:this.name,
      email:this.email,
      password:this.password
    }
    console.log(student);
    if(!localStorage.getItem("student")){
    localStorage.setItem("student",JSON.stringify(student));
    }else{
      localStorage.removeItem("student");
      localStorage.setItem("student",JSON.stringify(student));
    }
    alert("Registration Successfull !!")
     this.router.navigate(['/login']);
  }
}
