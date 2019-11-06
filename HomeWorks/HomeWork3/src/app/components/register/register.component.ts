import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor() { }
  boolean: number;
  id: string;
  email: string;
  password: string;
  name: string;
  surname: string;
  age: string;
  isBlocked: boolean;

  newUser = {
    email: '',
    password: '',
    name: '',
    surname: '',
    age: '',
    isBlocked: false,
  };

  @Input() usersArray;


  registerNewUser() {
    this.id = this.usersArray.length + 1;
    this.email = this.newUser.email;
    this.password = this.newUser.password;
    this.name = this.newUser.name;
    this.surname = this.newUser.surname;
    this.age = this.newUser.age;

    this.boolean = +(Math.random() * (2 - 1) + 1).toFixed(0);
    this.boolean === 1 ? this.newUser.isBlocked = false : this.newUser.isBlocked = true;
    this.isBlocked = this.newUser.isBlocked;

    this.usersArray.push({
      id: this.id,
      email: this.email,
      password: this.password,
      name: this.name,
      surname: this.surname,
      age: this.age,
      isBlocked: this.isBlocked
    });
    console.log(this.usersArray);
  }
}
