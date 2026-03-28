import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit{

  constructor(private activatedRouter:ActivatedRoute, private userService:UserService){

  }
  ngOnInit(): void {
    let username =this.activatedRouter.snapshot.paramMap.get('username')
    this.getUserByUsername(username);
  }
  user={
    username:'',
    password: '',
    firstName: '',
    lastName: '',
    email: '',
    role: '',
  }

  updateUser(){

  }
  getUserByUsername(username:any){
    this.userService.getUserByUserName(username).subscribe((res) =>{
      this.user=res;
    })
  }
}
