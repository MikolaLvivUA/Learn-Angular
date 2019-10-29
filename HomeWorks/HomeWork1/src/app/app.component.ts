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
  RClick = false;
  LClick = false;
  ShowingAllHouse: any[] = [];
  SAClick = false;
  CHClick = false;
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
    this.RClick = !this.RClick;
    this.LClick = false;
    this.SAClick = false;
    this.CHClick = false;
  }

  logClick() {
    this.LClick = !this.LClick;
    this.RClick = false;
    this.SAClick = false;
    this.CHClick = false;
  }

  ShowAllClick() {
    this.SAClick = !this.SAClick;
    this.LClick = false;
    this.RClick = false;
    this.CHClick = false;
    this.ShowingAllHouse = this.housesArray;
  }

  createHouse() {
    this.CHClick = !this.CHClick;
    this.LClick = false;
    this.RClick = false;
    this.SAClick = false;
  }

  createInput(event) {
    this.CreateHouseValue = event.target.value;
  }

  createNewHouse() {
    console.log(this.CreateHouseValue);
  }
}
