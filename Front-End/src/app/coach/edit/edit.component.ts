import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl, FormArrayName } from '@angular/forms';
import { MAT_STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { CoachService } from 'app/shared/services/coach.service';
import { switchMap } from 'rxjs/operators';

import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
  //to customize the mat stepper icons
  providers: [{
    provide: MAT_STEPPER_GLOBAL_OPTIONS, useValue: { displayDefaultIndicatorType: false }
  }]
})
export class EditComponent implements OnInit {
  public Editor = ClassicEditor;
  questions: any = null;
  testDetails: any;
  testId: any;
  testCategory:any;
  testLevel: any;

  formGroup: FormGroup = new FormGroup({
    username: new FormControl(),
    categorie: new FormControl(),
    testLevel: new FormControl(),
    formArray: new FormArray([])
  });

  constructor( private router: Router, private coachService: CoachService, private route: ActivatedRoute) { }
  get formArray() {
    return this.formGroup.get('formArray') as FormArray;
  }
  ngOnInit() {
    
    const questionsObservable = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.coachService.getQuestions(params.get('testId')))
    );

    const testDetailsObservable = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.coachService.getTestDetails(params.get('testId')))
    );
    
    testDetailsObservable.subscribe(data => {
      this.testDetails = data;
      this.testId = this.testDetails.id;
      this.testCategory = this.testDetails.categorie;
      this.testLevel = this.testDetails.testLevel;
      this.formGroup.setControl('categorie', new FormControl(this.testCategory));
      this.formGroup.setControl('testLevel', new FormControl(this.testLevel));
      this.formGroup.setControl('username', new FormControl(this.testDetails.username))
      
    });

    questionsObservable.subscribe(data => {
      this.questions =data;
      for(let i=0; i<this.questions._embedded.questions.length; i++){
        this.formArray.push(
          new FormGroup({
            id: new FormControl(this.questions._embedded.questions[i].id),
            type: new FormControl(this.questions._embedded.questions[i].type),
            question: new FormControl(this.questions._embedded.questions[i].question),
            option_1: new FormControl(this.questions._embedded.questions[i].option_1),
            option_2: new FormControl(this.questions._embedded.questions[i].option_2),
            option_3: new FormControl(this.questions._embedded.questions[i].option_3),
            option_4: new FormControl(this.questions._embedded.questions[i].option_4),
            answer: new FormControl(this.questions._embedded.questions[i].answer),
          })
        )
      }
    })
  }

  onSubmit() {
    this.coachService.updateTest(this.testId, this.formGroup.value)
              .subscribe(data => console.log('done'));
  }

}



