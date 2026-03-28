import { SubjectService } from './../../services/subject.service';
import { UserService } from './../../services/user.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-add-subject',
  templateUrl: './add-subject.component.html',
  styleUrls: ['./add-subject.component.css']
})
export class AddSubjectComponent {

constructor(private subjectService:SubjectService){}

  subject ={
     name: ' '
  }

  addSubject() {

    this.subjectService.addSubject(this.subject).subscribe((res)=>{
          alert("✔ Subject added successfully: "+res.name);
          this.subject.name='';
    });
}
}
