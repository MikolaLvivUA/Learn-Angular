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
  RClick: boolean = false;
  LClick: boolean = false;
  ShowingAllHouse: any[] = [];
  SAClick: boolean = false;

  housesArray = [
    {
      id: 1,
      city: 'Lviv'
    },
    {
      id: 2,
      city: 'Kyiv'
    },
    {
      id: 3,
      city: 'Odesa'
    },
    {
      id: 4,
      city: 'Dnipro'
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
  }

  logClick() {
    this.LClick = !this.LClick;
    this.RClick = false;
  }

  ShowAllClick() {
    this.SAClick = !this.SAClick;
    this.ShowingAllHouse = this.housesArray;
  }
}
