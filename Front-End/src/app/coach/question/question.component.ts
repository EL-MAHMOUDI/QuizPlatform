import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Question } from '../question';
import { CoachService } from 'app/shared/services/coach.service';

import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';



@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  public Editor = ClassicEditor;
  editorData;
  
  questionForm = new FormGroup({
    question : new FormControl('',[Validators.required]),
    option1 : new FormControl('', [Validators.required]),
    option2 : new FormControl('', [Validators.required]),
    option3 : new FormControl(''),
    option4 : new FormControl(''),
    answer : new FormControl('', [Validators.required]),
  })

  questionType: string = 'QCM';
  questionTypes: string[] = ['QCM', 'Writing'];

  constructor(
    public dialogRef: MatDialogRef<QuestionComponent>,
    private coahService: CoachService,
    
    ) {}
  
  ngOnInit(): void {
      
  }

  isQCM(): boolean{
    return this.questionType === 'QCM';
  }
  
  onCancel(): void {
    this.dialogRef.close();
  }
  onConfirm(){
    let question = new Question();
    question.id ='';
    question.type = this.questionType;
    question.question = this.questionForm.get('question').value;
    question.option_1 = this.questionForm.get('option1').value;
    question.option_2 = this.questionForm.get('option2').value;
    question.option_3 = this.questionForm.get('option3').value;
    question.option_4 = this.questionForm.get('option4').value;
    question.answer = this.questionForm.get('answer').value;
    this.coahService.addQuestion(question);
    this.dialogRef.close();
  } 
  onWritingConfirm(){
    let question = new Question();
    question.id ='';
    question.type = this.questionType;
    question.question = this.editorData;
    this.coahService.addQuestion(question);
    this.dialogRef.close();
    console.log(question);
  }
}
