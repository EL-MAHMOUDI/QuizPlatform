import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl, FormArrayName } from '@angular/forms';
import { StudentService } from 'app/shared/services/student.service';
import { MAT_STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-pass-test',
  templateUrl: './pass-test.component.html',
  styleUrls: ['./pass-test.component.scss'],

  //to customize the mat stepper icons
  providers: [{
    provide: MAT_STEPPER_GLOBAL_OPTIONS, useValue: { displayDefaultIndicatorType: false }
  }]
})
export class PassTestComponent implements OnInit {
  public Editor = ClassicEditor;
  questions: any = null;
  formGroup: FormGroup = new FormGroup({
    formArray: new FormArray([])
  });
  nbreQuestion: any;
  timer: number = 1000;
  interval: any;

  constructor(
    private studentService: StudentService,
    private router: Router,
    private route: ActivatedRoute
    ) { }
  get formArray() {
    return this.formGroup.get('formArray') as FormArray;
  }
  ngOnInit() {
    const testQuestionsObservable = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.studentService.getQuestions(params.get('testId')))
    );

    testQuestionsObservable
      .subscribe(data => {
        this.questions = data;

        this.questions = this.questions._embedded.questions;

        this.nbreQuestion = this.questions.length;

        for (let i = 0; i < this.nbreQuestion; i++) {
          this.formArray.push(new FormGroup({
            type: new FormControl(this.questions[i].type),
            answer: new FormControl('')
          }))
        }
        this.startTimer();
      });


  }

  onSubmit() {
    clearInterval(this.interval);
    this.studentService.submitAnswer(this.formGroup.value.formArray)
      .subscribe(data => {
        this.studentService.answerWithScore = data;
        console.log(this.studentService.answerWithScore);
        this.router.navigateByUrl('/student/score');
      });
  }

  startTimer() {
    this.interval = setInterval(() => {
      if (this.timer > 0) {
        this.timer--;
      } else {
        this.onSubmit();
      }
    }, 1000)
  }

  isQCM(questionType){
    return questionType==='QCM';
  }

}
