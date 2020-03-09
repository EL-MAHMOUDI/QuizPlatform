import { Injectable } from '@angular/core';
import { Question } from 'app/coach/question';
import { Test } from 'app/coach/test';
import { HttpClient } from '@angular/common/http';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class CoachService {
  questions: Question[]=[];
  constructor(private httpClient: HttpClient, private authenticationService: AuthenticationService) { }
  
  
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

  getAllTest(){
    return this.httpClient.get('http://localhost:8081/tests/search/findByUsername?username=' + this.authenticationService.getUser());
  }

  getCoachDetails(){
    return this.httpClient.get('http://localhost:8080/userDetails/'+this.authenticationService.getUser());
  }


  getQuestions(testId){
    return this.httpClient.get('http://localhost:8081/tests/'+testId+'/questions')
  }

  getTestDetails(testId){
    return this.httpClient.get('http://localhost:8081/tests/'+testId)
  }

  updateTest(testId, updatedTest){
    return this.httpClient.post('http://localhost:8081/coach/editTest/'+testId,updatedTest);
  }

  removeTest(testId){
    return this.httpClient.delete('http://localhost:8081/tests/'+testId);
  }

}
