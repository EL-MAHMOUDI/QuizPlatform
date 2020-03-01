import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  test: any;
  testId:any;

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
  
  getQuestions(){
    return this.httpClient.get('http://localhost:8081/tests/'+this.testId+'/questions');
  }

  submitAnswer(answers:any){
    let answer = {
      username: this.authenticationService.getUser(),
      testId: this.testId,
      answers: answers
    }
    return this.httpClient.post('http://localhost:8081/student/submitAnswer', answer);
  }
}
