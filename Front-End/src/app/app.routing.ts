import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { LandingPageComponent } from './landing-page/landing-page.component';
import { HomeComponent } from './home/home.component';
import { QuizComponent } from './quiz/quiz.component';
import { ResultComponent } from './result/result.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TestComponent } from './coach/test/test.component';
import { CoachDasboardComponent } from './coach/coach-dasboard/coach-dasboard.component';
import { StudentDasboardComponent } from './student/student-dasboard/student-dasboard.component';
import { CoachProfileComponent } from './coach/coach-profile/coach-profile.component';
import { StudentProfileComponent } from './student/student-profile/student-profile.component';
import { PickTestComponent } from './student/pick-test/pick-test.component';
import { PassTestComponent } from './student/pass-test/pass-test.component';
import { RoleGuard } from './shared/guards/role.guard';
import { AuthGuard } from './shared/guards/auth.guard';

const routes: Routes =[
    { path: '', redirectTo: 'landing', pathMatch: 'full' },
    { path: 'landing', component: LandingPageComponent },
    { path: 'home', component: HomeComponent },
    { path: 'quiz', component: QuizComponent },
    { path: 'result', component: ResultComponent },
    { path: 'login', component: LoginComponent, canActivate: [AuthGuard] },
    { path: 'register', component: RegisterComponent, canActivate: [AuthGuard]},
    { 
        path: 'coach', 
        component: CoachDasboardComponent,
        canActivate: [RoleGuard], 
        data: { 
          expectedRole: 'COACH'
        },
        children: [
            {path: '', redirectTo: 'profile', pathMatch: 'full'},
            {path: 'profile', component: CoachProfileComponent},
            {path: 'manage', component: TestComponent},
            {path:'**', redirectTo: 'profile', pathMatch: 'full'}
        ]
    },
    { 
        path: 'student', 
        component: StudentDasboardComponent,
        canActivate: [RoleGuard], 
        data: { 
          expectedRole: 'STUDENT'
        } ,
        children: [
            {path: '', redirectTo: 'profile', pathMatch: 'full'},
            {path: 'profile', component: StudentProfileComponent},
            {path: 'pick', component: PickTestComponent},
            {path: 'pass', component: PassTestComponent},
            {path:'**', redirectTo: 'profile', pathMatch: 'full'}
        ]
    },
    {path:'**', redirectTo: '/landing', pathMatch: 'full'}
];

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule.forRoot(routes)
    ],
    exports: [
    ],
})
export class AppRoutingModule { }
