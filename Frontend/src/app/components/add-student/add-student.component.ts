import { Component } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';


@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent {
  constructor(private studentService :StudentService){}

  student={
    name :'',
    email :'',
  }
  addStudent(){
    this.studentService.registerStudent(this.student).subscribe((res)=>{
      alert(res);
    })
  }
}
