import { SubjectService } from './../../services/subject.service';
import { FacultyService } from './../../services/faculty.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-all-attendence',
  templateUrl: './view-all-attendence.component.html',
  styleUrls: ['./view-all-attendence.component.css']
})
export class ViewAllAttendenceComponent implements OnInit {

  constructor(private facultyService:FacultyService, private subjectService:SubjectService){}

  ngOnInit(): void {
    this.getAllFaculties();
    this.getAllSubjects();
  }

  facultyList: any[] =[];
  selectedFaculty: any = '';

  subjectList: any[] = [];
  selectedSubject= '';

  attendanceList: any[] = [];
  selectedDate = '';



  getAllFaculties(){
    this.facultyService.getAllFaculties().subscribe((res)=>{
      this.facultyList = res;
    })
  }

  getAllSubjects(){
    this.subjectService.getAllSubjects().subscribe((res) =>{
      this.subjectList =res;
    })
  }

  showAll(){

  }
  show(){

  }
}
