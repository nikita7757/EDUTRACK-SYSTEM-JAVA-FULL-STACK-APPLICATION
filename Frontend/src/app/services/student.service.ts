import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }

  registerStudent(student :any):Observable<any>{

    const apiUrl = "http://localhost:8091/student/add-student";
    return this.http.post(apiUrl,student,{'responseType':'text'});

   
  }
   getAllStudents():Observable<any>{
      const apiUrl = "http://localhost:8091/student/get-all-students";
      return this.http.get(apiUrl); 
    }

     updateStudent(student :any){
      const apiUrl = "http://localhost:8091/student/update-student";
      return this.http.put(apiUrl,student); 
    }
}
