import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(
    private httpClient: HttpClient,
    private authenticationService: AuthenticationService
  ) { }
  getStudentDetails(){
    return this.httpClient.get('http://localhost:8080/userDetails/'+this.authenticationService.getUser());
  }
}
