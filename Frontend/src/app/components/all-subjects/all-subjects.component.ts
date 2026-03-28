import { SubjectService } from './../../services/subject.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-subjects',
  templateUrl: './all-subjects.component.html',
  styleUrls: ['./all-subjects.component.css']
})
export class AllSubjectsComponent implements OnInit{

  subjectList: any[] = [];
  constructor(private subjectService:SubjectService){}

  ngOnInit(): void {
  this.getAllSubjects();
  }



  getAllSubjects(){
    this.subjectService.getAllSubjects().subscribe((res)=>{
      this.subjectList = res;
    })
  }

    deleteSubject(id:any) {
      this.subjectService.deleteSubject(id).subscribe((res)=>{
        alert(" "+res);
         this.getAllSubjects();
      });

  }
}
