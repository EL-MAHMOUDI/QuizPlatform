import { Component, OnInit,DoCheck } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { QuizService } from 'app/shared/services/quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit, DoCheck {

  elapsedTime:number
  examTime: number = 1000;
  numberOfQuestions = new Array(10);
  lastAnswer:string = null;
  questionForm = new FormGroup({
    option: new FormControl(),
  })
  answers : any[] = [];
  constructor(private quizService: QuizService, private router: Router) { }

  ngOnInit() {
    this.quizService.getQuestions();

    this.startTimer();
  }
  ngDoCheck(): void {
    if(this.elapsedTime === this.examTime && this.quizService.qnProgress <3){
      this.processResult();
    }
  }


  onNext(questionId){
    let answer = {questionId: questionId, answer: this.questionForm.get('option').value }
    console.log(answer);
    if(this.lastAnswer != null ){
      this.answers[this.quizService.qnProgress]= answer;
      if(this.answers[this.quizService.qnProgress+1] != null){
        this.questionForm = new FormGroup({
          option: new FormControl(this.answers[this.quizService.qnProgress + 1].answer), 
        })
        this.lastAnswer = this.answers[this.quizService.qnProgress + 1].answer;
      }else{
        this.questionForm = new FormGroup({
          option: new FormControl(''), 
        })
      }
    }else{
      this.answers.push(answer);
      this.questionForm = new FormGroup({
        option: new FormControl(''), 
      })
      this.lastAnswer = null;
    }
    
    this.quizService.qnProgress++;
    console.log(this.quizService.qnProgress);
    console.log(this.answers);
    if(this.quizService.qnProgress === 10){
      this.processResult();
    }
      
  }

  onBack(){
    this.quizService.qnProgress--;
    console.log(this.quizService.qnProgress);
    this.lastAnswer = this.answers[this.quizService.qnProgress];
    this.questionForm = new FormGroup({
      option: new FormControl(this.answers[this.quizService.qnProgress].answer),
    })
    console.log(this.lastAnswer);
  }

  startTimer(){
    this.quizService.timer = setInterval(() => this.elapsedTime = this.quizService.seconds++, 1000);  
  }

  processResult(){
    this.quizService.qnProgress = 0;
    this.quizService.seconds = 0;
    clearInterval(this.quizService.timer);
    this.quizService.pushResult(this.answers);
    this.answers = [];
    this.router.navigateByUrl('/result');
  }
}

