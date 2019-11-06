import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  constructor() { }
  isUserLogin = '';

  login = {
    email: '',
    password: ''
  };

  @Input() usersArray;

  loginUser() {
    const foundUser = this.usersArray.find(user => this.login.email === user.email
      && this.login.password === user.password);
    foundUser ? this.isUserLogin = `Hello ${foundUser.name}` : this.isUserLogin = `Incorrect email or password`;
    return foundUser;
  }
}
