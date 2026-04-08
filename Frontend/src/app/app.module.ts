import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { AdminMenuComponent } from './components/admin-menu/admin-menu.component';
import { AddSubjectComponent } from './components/add-subject/add-subject.component';
import { AllSubjectsComponent } from './components/all-subjects/all-subjects.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { EditSubjectComponent } from './components/edit-subject/edit-subject.component';
import { FacultyDashboardComponent } from './components/faculty-dashboard/faculty-dashboard.component';
import { AddStudentComponent } from './components/add-student/add-student.component';
import { AllStudentsComponent } from './components/all-students/all-students.component';
import { EditStudentComponent } from './components/edit-student/edit-student.component';
import { TakeAttendanceComponent } from './components/take-attendance/take-attendance.component';
import { AllUserComponent } from './components/all-user/all-user.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FacultyMenuComponent } from './components/faculty-menu/faculty-menu.component';
import { HidePasswordPipe } from './pipes/hide-password.pipe';

@NgModule({
  declarations: [

  AppComponent,
    HomeComponent,
        LoginComponent,
        RegisterComponent,
        AdminDashboardComponent,
        AddUserComponent,
        AdminMenuComponent,
        AddSubjectComponent,
        AllSubjectsComponent,
      
        EditUserComponent,
        EditSubjectComponent,
        FacultyDashboardComponent,
        AddStudentComponent,
        AllStudentsComponent,
        EditStudentComponent,
        TakeAttendanceComponent,
     
        AllUserComponent,
        FacultyMenuComponent,
        HidePasswordPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
   HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
