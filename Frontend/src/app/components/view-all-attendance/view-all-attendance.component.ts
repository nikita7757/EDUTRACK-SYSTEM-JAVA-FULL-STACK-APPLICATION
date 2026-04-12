import { Component, OnInit } from '@angular/core';
import { SubjectService } from '../../services/subject.service';
import { FacultyService } from '../../services/faculty.service';
import { AttendanceService } from '../../services/attendance.service';

@Component({
  selector: 'app-view-all-attendance',
  templateUrl: './view-all-attendance.component.html',
  styleUrls: ['./view-all-attendance.component.css']
})
export class ViewAllAttendanceComponent implements OnInit {

  constructor(
    private facultyService: FacultyService,
    private subjectService: SubjectService,
    private attendanceService: AttendanceService
  ) {}

  facultyList: any[] = [];
  subjectList: any[] = [];
  attendanceList: any[] = [];
  selectedStudents: any[] = [];

  selectedFaculty: number = 0;
  selectedSubject: number = 0;
  selectedDate: string = '';

  ngOnInit(): void {
    this.getAllFaculties();
    this.getAllSubjects();
    this.showAll(); // load all data initially
  }

  // ✅ Load faculty
  getAllFaculties() {
    this.facultyService.getAllFaculties().subscribe((res: any) => {
      this.facultyList = res;
    });
  }

  // ✅ Load subjects
  getAllSubjects() {
    this.subjectService.getAllSubjects().subscribe((res: any) => {
      this.subjectList = res;
    });
  }

  // ✅ Show all attendance
  showAll() {
    this.attendanceService.getAllAttendance().subscribe((res: any) => {
      this.attendanceList = res;
    });
  }

  // ✅ Filter attendance (MAIN LOGIC)
  show() {

    console.log("Date:", this.selectedDate);
    console.log("Subject:", this.selectedSubject);

    // 🔴 If no filters selected → show all
    if (!this.selectedDate && this.selectedSubject === 0) {
      this.showAll();
      return;
    }

    // 🔴 If subject is selected but no date
    if (!this.selectedDate && this.selectedSubject !== 0) {
      console.warn("Date is required when filtering by subject");
      return;
    }

    // 🔴 If date selected but subject is "All"
    if (this.selectedDate && this.selectedSubject === 0) {
      console.warn("Backend does not support 'All subjects with date'");
      return;
    }

    // ✅ Correct API call
    this.attendanceService
      .getAttendanceByDateAndSubject(
        this.selectedDate,
        this.selectedSubject
      )
      .subscribe({
        next: (res: any) => {
          this.attendanceList = res;
        },
        error: (err) => {
          console.error("Error fetching attendance:", err);
        }
      });
  }

  // ✅ Show students popup/list
  showStudents(students: any[]) {
    this.selectedStudents = students;
  }

  // ✅ Close student list
  closeStudents() {
    this.selectedStudents = [];
  }

}