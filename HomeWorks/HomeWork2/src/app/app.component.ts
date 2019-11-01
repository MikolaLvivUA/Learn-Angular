import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HomeWork1';
  InputValue: string | number;
  ShowingValue: string | number;
  isUserLogin: string = '';
  index: number = -1;
  boolean: number;

  isRegisterClick = false;
  isLoginClick = false;
  isCreateHouseClick = false;
  isShowAllClick = false;

  passwordValidation: boolean;
  ShowingAllHouse: any[] = [];
  usersArray: any[] = [];
  housesArray: any[] = [];

  user = {
    id: undefined,
    email: '',
    password: '',
    repeatPassword: '',
    name: '',
    surname: '',
    age: '',
    isBlocked: false,
  };

  house = {
    id: undefined,
    city: '',
    square: '',
    price: '',
    owner: undefined
  };

  login = {
    email: '',
    password: ''
  };


  onInput(event) {
    this.InputValue = event.target.value;
  }

  clickSearchBtn() {
    this.ShowingValue = this.InputValue;
  }

  registerClick() {
    this.isRegisterClick = !this.isRegisterClick;
    this.isLoginClick = false;
    this.isShowAllClick = false;
    this.isCreateHouseClick = false;
  }

  logClick() {
    this.isLoginClick = !this.isLoginClick;
    this.isRegisterClick = false;
    this.isShowAllClick = false;
    this.isCreateHouseClick = false;
  }

  ShowAllClick() {
    this.isShowAllClick = !this.isShowAllClick;
    this.isLoginClick = false;
    this.isRegisterClick = false;
    this.isCreateHouseClick = false;
    this.ShowingAllHouse = this.housesArray;
  }

  createHouse() {
    this.isCreateHouseClick = !this.isCreateHouseClick;
    this.isLoginClick = false;
    this.isRegisterClick = false;
    this.isShowAllClick = false;
  }

  ShowAllButtonClick(id: number) {
    this.index = id;
  }

  registerNewUser() {
    this.user.id = this.usersArray.length + 1;
    this.user.repeatPassword !== this.user.password ? this.passwordValidation = false : this.passwordValidation = true;//Not work=(
    this.usersArray.push(this.user);
    this.boolean = +(Math.random() * (2 - 1) + 1).toFixed(0);
    this.boolean === 1 ? this.user.isBlocked = false : this.user.isBlocked = true;
  }

  loginUser() {
    const foundUser = this.usersArray.find(user => this.login.email === user.email
      && this.login.password === user.password);
    foundUser ? this.isUserLogin = `Hello ${foundUser.name}` : this.isUserLogin = `Incorrect email or password`;
    return foundUser
  }

  createNewHouse() {
      let randomUserIndex = (Math.random()*this.usersArray.length).toFixed(0);
      this.house.id = this.housesArray.length+1;
      this.house.owner = this.usersArray[randomUserIndex];
      this.housesArray.push(this.house);
  }
}
