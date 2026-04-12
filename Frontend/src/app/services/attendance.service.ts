import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AttendanceService {

   private apiUrl = "http://localhost:8091//take-attendance";

  constructor(private http: HttpClient) {}

  saveAttendance(data:any){
  return this.http.post(
    "http://localhost:8091/attendance/take-attendance",
    data
  );
}

getAllAttendance(){
 const apiUrl = "http://localhost:8091/attendance/get-all-attendance-records";
 return this.http.get(apiUrl);
}

getAttendanceByDateAndSubject(date: string, subjectId: number) {
  return this.http.get(
    `http://localhost:8080/attendance/get-attendance-by-date-subject/${date}/${subjectId}`
  );
}
}
