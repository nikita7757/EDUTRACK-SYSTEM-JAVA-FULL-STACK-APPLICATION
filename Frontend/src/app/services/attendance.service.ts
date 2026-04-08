import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AttendenceService {

   private apiUrl = "http://localhost:8091//take-attendance";

  constructor(private http: HttpClient) {}

  saveAttendance(attendanceData: any): Observable<any> {
    return this.http.post(this.apiUrl,attendanceData);
  }
  
}
