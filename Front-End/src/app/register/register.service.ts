import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  constructor(private httpClient: HttpClient) { }

  register(user: any){
    console.log(user);
    return this.httpClient.post('http://localhost:8080/register', user);
  
  }

}
