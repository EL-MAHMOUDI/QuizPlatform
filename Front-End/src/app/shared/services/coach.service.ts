import { Injectable } from '@angular/core';
import { Question } from 'app/coach/question';
import { Test } from 'app/coach/test';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CoachService {
  questions: Question[]=[];
  constructor(private httpClient: HttpClient) { }
  
  addQuestion(question: Question){
    this.questions.push(question);
    console.log(this.questions);
  }
  
  removeQuestion(index){
    this.questions.splice(index, 1);
  }

  pushTest(test: Test){
    return this.httpClient.post('http://localhost:8081/coach/addTest', test);
  }

}
