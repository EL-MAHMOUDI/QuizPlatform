import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl, FormArrayName } from '@angular/forms';
import { StudentService } from 'app/shared/services/student.service';
import { MAT_STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Router } from '@angular/router';

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

  questions: any = null;
  formGroup: FormGroup = new FormGroup({
    formArray: new FormArray([])
  });
  nbreQuestion: any;
  timer: number = 10;
  interval: any;

  constructor(private studentService: StudentService, private router: Router) { }
  get formArray() {
    return this.formGroup.get('formArray') as FormArray;
  }
  ngOnInit() {

    this.studentService.getQuestions()
      .subscribe(data => {
        this.questions = data;

        this.questions = this.questions._embedded.questions;

        this.nbreQuestion = this.questions.length;

        for (let i = 0; i < this.nbreQuestion; i++) {
          this.formArray.push(new FormControl(''))
        }
        this.startTimer();
      });


  }

  onSubmit() {
    clearInterval(this.interval);
    this.studentService.submitAnswer(this.formGroup.value.formArray)
      .subscribe(data => {
        this.studentService.answerWithScore = data;
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

}
