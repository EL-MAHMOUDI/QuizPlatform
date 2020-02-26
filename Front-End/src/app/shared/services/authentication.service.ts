import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from "@auth0/angular-jwt";
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor(private http: HttpClient, private router: Router) { }

  login(credentials){
    return this.http.post('http://localhost:8080/login', credentials, {observe: 'response'});
  }

  saveToken(jwt: string): void{
    localStorage.setItem('token', jwt);
    this.parseJWT(jwt);
  }

  parseJWT(jwt: string):void{
    const helper = new JwtHelperService();
    const decodedToken = helper.decodeToken(jwt);
  }
  getUser() {
    const helper = new JwtHelperService();
    const decodedToken = helper.decodeToken(this.getJWT());
    if(decodedToken){
      return decodedToken.sub;
    }else{
      return '';
    }
    
  }
  getRoles() {
    const helper = new JwtHelperService();
    const decodedToken = helper.decodeToken(this.getJWT());
    if(decodedToken){
      return decodedToken.roles;
    }else{
      return '';
    }
    
  }

  getJWT(){
    return localStorage.getItem('token');
  }

  isStudent():boolean{
    return this.getRoles().includes('STUDENT');
  }

  isCoach():boolean{
    return this.getRoles().includes('COACH');
  }

  isGuest(): boolean{
    return (this.getJWT()) ? false : true;;
  }

  logout() {
    localStorage.clear();
    this.router.navigateByUrl('/landing')
  }
}