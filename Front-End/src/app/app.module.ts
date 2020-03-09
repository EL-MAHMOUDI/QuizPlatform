import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // this is needed!
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { HttpClientModule } from '@angular/common/http';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatRadioModule} from '@angular/material/radio';
import {MatSidenavModule} from '@angular/material/sidenav';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { QuizComponent } from './quiz/quiz.component';
import { ResultComponent } from './result/result.component';
import { HomeComponent } from './home/home.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { TimerPipe } from './shared/pipes/timer.pipe';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FooterComponent } from './shared/footer/footer.component';
import { TestComponent } from './coach/test/test.component';
import {MatChipsModule} from '@angular/material/chips';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';
import { QuestionComponent } from './coach/question/question.component';
import { CoachDasboardComponent } from './coach/coach-dasboard/coach-dasboard.component';
import { StudentDasboardComponent } from './student/student-dasboard/student-dasboard.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { CoachProfileComponent } from './coach/coach-profile/coach-profile.component';
import { StudentProfileComponent } from './student/student-profile/student-profile.component';
import { PickTestComponent } from './student/pick-test/pick-test.component';
import { PassTestComponent } from './student/pass-test/pass-test.component';
import {MatStepperModule} from '@angular/material/stepper';
import { ScoreComponent } from './student/score/score.component';
import { EditComponent } from './coach/edit/edit.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        TimerPipe,
        QuizComponent,
        ResultComponent,
        HomeComponent,
        LandingPageComponent,
        LoginComponent,
        RegisterComponent,
        FooterComponent,
        TestComponent,
        QuestionComponent,
        CoachDasboardComponent,
        StudentDasboardComponent,
        CoachProfileComponent,
        StudentProfileComponent,
        PickTestComponent,
        PassTestComponent,
        ScoreComponent,
        EditComponent
    ],
    imports: [
        BrowserAnimationsModule,
        NgbModule.forRoot(),
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        AppRoutingModule,
        HttpClientModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatRadioModule,
        MatChipsModule,
        MatAutocompleteModule,
        MatDialogModule,
        MatSelectModule,
        MatSidenavModule,
        MatCheckboxModule,
        MatStepperModule,
        CKEditorModule

    ],
    entryComponents: [
        QuestionComponent
      ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }