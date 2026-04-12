import { Component, OnInit } from '@angular/core';
import { AttendanceService } from 'src/app/services/attendance.service';
import { StudentService } from 'src/app/services/student.service';
import { SubjectService } from 'src/app/services/subject.service';

@Component({
  selector: 'app-take-attendance',
  templateUrl: './take-attendance.component.html',
  styleUrls: ['./take-attendance.component.css']
})
export class TakeAttendanceComponent implements OnInit {

  subjects:any[] = [];
  students:any[] = [];

  attendance = {
    subjectId:'',
    date:'',
    time:''
  };

  constructor(
    private studentService: StudentService,
    private subjectService: SubjectService,
    private attendanceService : AttendanceService
    
  ){}

  ngOnInit(): void {

    this.getAllSubjects();
    this.getAllStudents();

  }

  getAllSubjects(){
    this.subjectService.getAllSubjects().subscribe(res=>{
      this.subjects = res;
    });
  }

  getAllStudents(){
    this.studentService.getAllStudents().subscribe(res=>{
      this.students = res;
    });
  }

  submitAttendance(){

  const selectedStudents = this.students
    .filter(student => student.present)
    .map(student => student.id);

  const username = localStorage.getItem("username"); // ✅ logged-in faculty

  const request = {
    username: username,
    subjectId: this.attendance.subjectId,
    date: this.attendance.date,
    time: this.attendance.time,
    studentIds: selectedStudents
  };

  console.log("Sending request:", request); // debug

  this.attendanceService.saveAttendance(request).subscribe(()=>{
    alert("Attendance submitted successfully");
  });

}


}
