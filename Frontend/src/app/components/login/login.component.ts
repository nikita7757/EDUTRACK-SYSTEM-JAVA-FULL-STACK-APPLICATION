import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  constructor(private userservice: UserService, private router: Router){}

  user = {
    username: '',
    password: ''
  };

  // reset login form whenever login page loads
  ngOnInit(): void {
    this.user = {
      username: '',
      password: ''
    };

    // remove previous login state
    localStorage.removeItem('isLoggedIn');
  }

  login() {

    console.log("Login attempt:", this.user);

    this.userservice.login(this.user).subscribe((res:any)=>{

      console.log("Response from backend:", res);

      if(res != null){

        // store login state
        localStorage.setItem('isLoggedIn','true');

        if(res.role && res.role.toLowerCase() === 'admin'){
          this.router.navigateByUrl('/admin-dashboard');
        } 
        else {
          this.router.navigateByUrl('/faculty-dashboard');
                                   
        }

      } 
      else {
        alert("Invalid username or password");
      }

    }, (error)=>{
      console.error("Login error:", error);
      alert("Something went wrong while logging in");
    });

  }

}