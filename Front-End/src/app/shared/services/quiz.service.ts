import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Question } from 'app/coach/question';

const BASE_URL = 'http://localhost:8081';
@Injectable({
  providedIn: 'root'
})
export class QuizService {
  questions: any;
  seconds: number = 0;
  timer;
  qnProgress = 0;
  answers : any[] = [];
  score = 0;
  
  constructor(private httpClient: HttpClient) { }

  register(participant){
    return this.httpClient.post(BASE_URL + '/participants', participant);
  }

  getQuestions(){
    this.httpClient.get(BASE_URL+'/questions')
      .subscribe(response => this.questions = response);
  }
  
  pushResult(answers){
    this.answers = answers;
    let correctAnswers = this.questions._embedded.questions.map(question => {
      return {questionId: question.id, answer:question.answer};
    });
    
    console.log(correctAnswers);
    console.log(this.answers)
    this.answers.forEach(answer => {
        if(correctAnswers.some(correctAnswer => correctAnswer.questionId === answer.questionId && correctAnswer.answer === answer.answer))
        this.score++;
    });
    console.log(this.score);
  }
  addQuestion(question:Question){
    console.log(question);
    //this.questions.push(question);
  }

}
