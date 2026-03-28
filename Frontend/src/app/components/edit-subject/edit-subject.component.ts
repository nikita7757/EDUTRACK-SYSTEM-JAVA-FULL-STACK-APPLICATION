import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SubjectService } from 'src/app/services/subject.service';

@Component({
  selector: 'app-edit-subject',
  templateUrl: './edit-subject.component.html',
  styleUrls: ['./edit-subject.component.css']
})
export class EditSubjectComponent {

  subject = { id: '',
     name: ''
    };

constructor(private route: ActivatedRoute, private subjectService: SubjectService) {}

ngOnInit(): void {
  const id = Number(this.route.snapshot.paramMap.get('id'));
  this.getSubjectById(id);

}
  getSubjectById(id:any){
  this.subjectService.getSubjectById(id).subscribe((res) =>{
      this.subject=res;
    })
  }
onUpdateSubject() {
  this.subjectService.updateSubject(this.subject).subscribe((res) => {
    alert("Subject Updated!");
  });
}

}
