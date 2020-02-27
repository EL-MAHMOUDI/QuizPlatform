import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { passwordMatchingValidator } from './validators/passwordMatchingValidator';
import { RegisterService } from './register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  success = true;
  hide = true;

  registerForm = new FormGroup(
    {
      firstName: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]),
      lastName: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]),
      username: new FormControl('',[Validators.required, Validators.minLength(3), Validators.maxLength(15)]),
      email: new FormControl('',[Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required,
      Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]),
      passwordConfirmation: new FormControl(''),
    }, { validators: passwordMatchingValidator }
  )
    firstName = this.registerForm.get('firstName');
    lastName = this.registerForm.get('lastName');
    username= this.registerForm.get('username');
    email = this.registerForm.get('email');
    password = this.registerForm.get('password');
    passwordConfirmation = this.registerForm.get('passwordConfirmation');
  constructor(private registerService: RegisterService, private router: Router) { }

  ngOnInit() {
  }

  getFirstNameErrorMessage(){
    return this.firstName.hasError('required') ? 'You must enter a value' :
    this.firstName.hasError('minlength') ? 'At least 3 characters' :
    this.firstName.hasError('maxlength') ? 'Not more than 15 characters':
        '';
  }
  getLastNameErrorMessage(){
    return this.lastName.hasError('required') ? 'You must enter a value' :
    this.lastName.hasError('minlength') ? 'At least 3 characters' :
    this.lastName.hasError('maxlength') ? 'Not more than 15 characters':
        '';
  }
  getPasswordErrorMessage(){
    return this.password.hasError('required') ? 'You must enter a value' :
    this.password.hasError('pattern') ? 'Weak Password' :
        '';
  }
  getPasswordConfirmationErrorMessage(){
    return this.registerForm.hasError('passwordMatching')? 'Passwords don\'t match':'';
  }
  getEmailErrorMessage(){
    return this.email.hasError('required') ? 'You must enter a value' :
    this.email.hasError('email') ? 'Not a valid email' :
        '';
  }
  getUsernameErrorMessage(){
    return this.username.hasError('required') ? 'You must enter a value' :
    this.username.hasError('minlength') ? 'At least 3 characters' :
    this.username.hasError('maxlength') ? 'Not more than 15 characters':
        '';
  }
  
  onRegister(){
    this.registerService.register(this.registerForm.value)
      .subscribe(
        data => this.router.navigateByUrl('/login'),
        error => this.success = false
        )
  }
}
