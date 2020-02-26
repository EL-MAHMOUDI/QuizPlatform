import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Question } from '../question';
import { CoachService } from 'app/shared/services/coach.service';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  questionForm = new FormGroup({
    question : new FormControl('',[Validators.required]),
    option1 : new FormControl('', [Validators.required]),
    option2 : new FormControl('', [Validators.required]),
    option3 : new FormControl(''),
    option4 : new FormControl(''),
    answer : new FormControl('', [Validators.required]),
  })
  constructor(
    public dialogRef: MatDialogRef<QuestionComponent>,
    private coahService: CoachService,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
    ) {}
  
  ngOnInit(): void {
      
  }
  
  onCancel(): void {
    this.dialogRef.close();
  }
  onConfirm(){
    let question = new Question();
    question.id ='';
    question.question = this.questionForm.get('question').value;
    question.option1 = this.questionForm.get('option1').value;
    question.option2 = this.questionForm.get('option2').value;
    question.option3 = this.questionForm.get('option3').value;
    question.option4 = this.questionForm.get('option4').value;
    question.answer = this.questionForm.get('answer').value;
    this.coahService.addQuestion(question);
    this.dialogRef.close();
  }
}
