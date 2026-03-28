import { UserService } from 'src/app/services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-user',
  templateUrl: './all-user.component.html',
  styleUrls: ['./all-user.component.css']
})
export class AllUserComponent implements OnInit{


  userList: any[] = [];

  constructor(private userService: UserService){}

  ngOnInit(): void {
   this.getAllUser();
  }

  getAllUser(){
    this.userService.getAllUser().subscribe((res)=>{
      this.userList = res;
    })
  }

  deleteUser(username:String) {
    this.userService.deletUser(username).subscribe((res)=>{
      alert(res);
      this.getAllUser();
  })


}
}

