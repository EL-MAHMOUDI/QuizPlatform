import { Injectable } from '@angular/core';
import { Question } from 'app/coach/question';

@Injectable({
  providedIn: 'root'
})
export class CoachService {
  questions: Question[]=[];
  constructor() { }
  
  addQuestion(question: Question){
    this.questions.push(question);
    console.log(this.questions);
  }
  removeQuestion(index){
    this.questions.splice(index, 1);
  }
}
