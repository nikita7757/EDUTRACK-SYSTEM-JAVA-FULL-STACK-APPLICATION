import { Component, OnInit } from '@angular/core';
import { AttendenceService } from 'src/app/services/attendance.service';
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
    private attendenceService: AttendenceService
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

    const attendanceData = this.students.map(student => ({
      studentId: student.id,
      subjectId: this.attendance.subjectId,
      date: this.attendance.date,
      time: this.attendance.time,
      present: student.present || false
    }));

    this.attendenceService.saveAttendance(attendanceData).subscribe(()=>{
      alert("Attendance submitted successfully");
    });

  }

}
