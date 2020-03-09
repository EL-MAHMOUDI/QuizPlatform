import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  test: any;
  testId:any;
  answerWithScore: any;

  constructor(
    private httpClient: HttpClient,
    private authenticationService: AuthenticationService
  ) { }
  getStudentDetails(){
    return this.httpClient.get('http://localhost:8080/userDetails/'+this.authenticationService.getUser());
  }
  pickTest(categorie, testLevel){
    return this.httpClient.get('http://localhost:8081/tests/search/findByCategorieAndTestLevel?categorie='+categorie+'&testLevel='+testLevel);
  }
  listAllTests(){
    return this.httpClient.get('http://localhost:8081/tests');
  }
  getQuestions(testId){
    this.testId = testId;
    return this.httpClient.get('http://localhost:8081/tests/'+testId+'/questions');
  }

  submitAnswer(answers:any){
    let answer = {
      username: this.authenticationService.getUser(),
      testId: this.testId,
      answers: answers
    }
    console.log(answer);
    return this.httpClient.post('http://localhost:8081/student/submitAnswer', answer);
  }

  getScore(){
    return this.answerWithScore.score;
  }

  getPortFolio(){
    return this.httpClient.get('http://localhost:8081/answers/search/findByUsername?username='+this.authenticationService.getUser());
  }

}
