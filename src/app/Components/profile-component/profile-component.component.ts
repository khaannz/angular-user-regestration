import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-component',
  templateUrl: './profile-component.component.html',
  styleUrls: ['./profile-component.component.css']
})
export class ProfileComponentComponent implements OnInit {

  name:string;
  email:string;
  password:string;
  
  constructor(private router: Router) {}

  ngOnInit(): void {
    if(localStorage.getItem("student")){
      let data = JSON.parse(localStorage.getItem("student") || "");
      this.name = data.name;
      this.email = data.email;
      this.password = data.password;
    }
  }

  logout(){
      if(localStorage.getItem("student")){
        localStorage.removeItem("student")
        alert("Logging Out ....");
        this.router.navigate(['/login']);
      }
  }

}
