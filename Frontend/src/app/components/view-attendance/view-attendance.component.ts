import { Component, OnInit } from '@angular/core';
import { SubjectService } from 'src/app/services/subject.service';
import { AttendanceService } from 'src/app/services/attendance.service';

@Component({
  selector: 'app-view-attendance',
  templateUrl: './view-attendance.component.html',
  styleUrls: ['./view-attendance.component.css']
})
export class ViewAttendanceComponent implements OnInit {

  // Dropdown data
  subjects: any[] = [];

  // Table data (attendance records)
  attendanceRecords: any[] = [];

  // Selected students for popup
  selectedStudents: any[] = [];

  // Filter object
  filter = {
    subjectId: '',
    date: ''
  };

  constructor(
    private subjectService: SubjectService,
    private attendanceService: AttendanceService
  ) {}

  ngOnInit(): void {
    this.getAllSubjects();
  }

  // Load all subjects
  getAllSubjects() {
    this.subjectService.getAllSubjects().subscribe((res) => {
      this.subjects = res;
    });
  }

  // Fetch attendance records
  getAttendance() {

    if (!this.filter.subjectId || !this.filter.date) {
      alert("Please select subject and date");
      return;
    }

    this.attendanceService
      .getAttendanceByDateAndSubject(this.filter.date, this.filter.subjectId)
      .subscribe((res: any) => {

        this.attendanceRecords = res;

      });
  }

  // Show student list
  showStudents(students: any[]) {
    this.selectedStudents = students;
  }

  // Close student popup
  closeStudents() {
    this.selectedStudents = [];
  }

}