import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit{
 student= { name: '',
     email: ''
    };


    constructor(private route: ActivatedRoute, private studentService: StudentService,  private router: Router) {}

    ngOnInit(): void {
   const id = Number(this.route.snapshot.paramMap.get('id'));

    this.studentService.getStudentById(id).subscribe((res) => {
      this.student = res;
    });
  }

    onSubmit() {
      this.studentService.updateStudent(this.student).subscribe((res) => {


        // redirect to all students page
        this.router.navigate(['/all-students']);
          alert("Student updated successfully");

      });
    }
}

