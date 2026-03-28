import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FacultyService {

  constructor(private http:HttpClient) { }


  getAllFaculties():Observable<any>{

    const apiUrl = "http://localhost:8091/user/get-all-faculty"
    return this.http.get(apiUrl);
  }
}
