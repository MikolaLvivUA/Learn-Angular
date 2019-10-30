import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HomeWork1';
  InputValue: string | number;
  ShowingValue: string | number;
  RegisterClick = false;
  LoginClick = false;
  ShowingAllHouse: any[] = [];
  isShowAllClick = false;
  CreateHouseClick = false;
  CreateHouseValue: any;

  housesArray = [
    {
      id: 1,
      city: 'Lviv',
      square: 130,
      price: 100000
    },
    {
      id: 2,
      city: 'Kyiv',
      square: 80,
      price: 85000
    },
    {
      id: 3,
      city: 'Odesa',
      square: 200,
      price: 400000
    },
    {
      id: 4,
      city: 'Dnipro',
      square: 500,
      price: 1000000
    }
  ];


  onInput(event) {
    this.InputValue = event.target.value;
  }

  clickSearchBtn() {
    this.ShowingValue = this.InputValue;
  }

  registerClick() {
    this.RegisterClick = !this.RegisterClick;
    this.LoginClick = false;
    this.isShowAllClick = false;
    this.CreateHouseClick = false;
  }

  logClick() {
    this.LoginClick = !this.LoginClick;
    this.RegisterClick = false;
    this.isShowAllClick = false;
    this.CreateHouseClick = false;
  }

  ShowAllClick() {
    this.isShowAllClick = !this.isShowAllClick;
    this.LoginClick = false;
    this.RegisterClick = false;
    this.CreateHouseClick = false;
    this.ShowingAllHouse = this.housesArray;
  }

  createHouse() {
    this.CreateHouseClick = !this.CreateHouseClick;
    this.LoginClick = false;
    this.RegisterClick = false;
    this.isShowAllClick = false;
  }

  createInput(event) {
    this.CreateHouseValue = event.target.value;
  }

  createNewHouse() {
    console.log(this.CreateHouseValue);
  }
}
