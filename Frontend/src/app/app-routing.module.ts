import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { FacultyDashboardComponent } from './components/faculty-dashboard/faculty-dashboard.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { AllUserComponent } from './components/all-user/all-user.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { AddSubjectComponent } from './components/add-subject/add-subject.component';
import { AllSubjectsComponent } from './components/all-subjects/all-subjects.component';
import { ViewAllAttendenceComponent } from './components/view-all-attendence/view-all-attendence.component';
import { EditSubjectComponent } from './components/edit-subject/edit-subject.component';
import { AuthGuardService  } from './services/auth.guard.service';
import { AddStudentComponent } from './components/add-student/add-student.component';
import { AllStudentsComponent } from './components/all-students/all-students.component';
import { EditStudentComponent } from './components/edit-student/edit-student.component';


const routes: Routes = [
  {
    path: '',
    component:HomeComponent,
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'admin-dashboard',
    component:AdminDashboardComponent,
    canActivate: [AuthGuardService]
  },
  {
    path:'faculty-dashboard',
    component:FacultyDashboardComponent,
    canActivate: [AuthGuardService]
  },
  {
    path:'add-user',
    component:AddUserComponent
  },
   {
    path:'all-user',
    component:AllUserComponent
  },
  {
    path:'edit-user/:username',
    component:EditUserComponent
  },
  {
    path: 'add-subjects',
    component:AddSubjectComponent
  },
  {
    path: 'all-subjects',
    component: AllSubjectsComponent
  },
  { path: 'edit-subject/:id',
    component: EditSubjectComponent
  },
  {
    path: 'view-attendence',
    component: ViewAllAttendenceComponent
  },
  {path: 'view-all-attendence',
    component: ViewAllAttendenceComponent
  },
  {
    path : 'add-student',
    component: AddStudentComponent
  },
  {path: 'all-students',
    component:AllStudentsComponent
  },
  {
    path : 'edit-student',
    component:EditStudentComponent
  },
   { path: 'edit-student/:id', 
    component: EditStudentComponent
   }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
