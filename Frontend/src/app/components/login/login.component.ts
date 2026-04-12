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

    // ✅ THIS is the correct place
    console.log("FULL RESPONSE:", res);

    if(res != null){

      localStorage.setItem('isLoggedIn','true');

      // ✅ TEMP FIX (important)
      localStorage.setItem("username", this.user.username);

      console.log("Stored username:", localStorage.getItem("username"));

      const role = res.role || res.data?.role;

      if(role && role.toLowerCase() === 'admin'){
        this.router.navigateByUrl('/admin-dashboard');
      } 
      else {
        this.router.navigateByUrl('/faculty-dashboard');
      }

    }

  });

}

}