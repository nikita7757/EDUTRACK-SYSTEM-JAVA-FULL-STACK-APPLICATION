import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-all-students',
  templateUrl: './all-students.component.html',
  styleUrls: ['./all-students.component.css']
})
export class AllStudentsComponent implements OnInit{

  constructor(private studentService :StudentService){}
  ngOnInit(): void {
  this.getAllStudents();
  }


   getAllStudents(){
    this.studentService.getAllStudents().subscribe((res)=>{
      this.students = res;
    })
  }
students: any[] = [];


selectedStudent: any = {};


editStudent(student: any) {
  this.studentService.updateStudent(student).subscribe((res) => {
    console.log("Student Updated", res);
    this.getAllStudents();
  });
}


deleteStudent(id :any){}


}
