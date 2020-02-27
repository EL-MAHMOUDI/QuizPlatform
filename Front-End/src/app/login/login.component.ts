import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthenticationService } from 'app/shared/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
   // email: new FormControl('', [Validators.required, Validators.email]),
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  })
 // email = this.loginForm.get('email');
  password = this.loginForm.get('password');
  username = this.loginForm.get('username');
  hide = true;
  success:boolean = true;
 
  constructor(private authService: AuthenticationService, private router: Router) { }

  ngOnInit() {
    var body = document.getElementsByTagName('body')[0];
    body.classList.add('login-page');

    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.add('navbar-transparent');
}
ngOnDestroy(){
    var body = document.getElementsByTagName('body')[0];
    body.classList.remove('login-page');

    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.remove('navbar-transparent');
}
/* getEmailErrorMessage() {
  return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'Not a valid email' :
          '';
}*/
getPasswordErrorMessage() {
  return this.password.hasError('required') ? 'You must enter a value' :
          '';
}
getUsernameErrorMessage(){
  return this.username.hasError('required') ? 'You must enter a value' :
  '';
}
onLogin(){
  this.authService.login(this.loginForm.value)
  .subscribe(response =>{
      let jwt = response.headers.get('Authorization');
      this.authService.saveToken(jwt);
      console.log(this.authService.isCoach());
      console.log(this.authService.isStudent());
      console.log(this.loginForm.value);
      
      if(this.authService.isStudent()){
        this.router.navigateByUrl('/student');
      }else if(this.authService.isCoach()){
        this.router.navigateByUrl('/coach');
      }
        
  }, error =>{
    this.success = false;
  });
}


}
