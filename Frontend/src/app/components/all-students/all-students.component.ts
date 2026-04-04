import { Component } from '@angular/core';

@Component({
  selector: 'app-all-students',
  templateUrl: './all-students.component.html',
  styleUrls: ['./all-students.component.css']
})
export class AllStudentsComponent {
students:any[] = [];

editStudent(student:any){}
deleteStudent(id :any){}


}
