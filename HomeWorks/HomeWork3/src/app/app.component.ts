import {Component} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HomeWork1';
  ShowingValue: string | number;


  isRegisterClick = false;
  isLoginClick = false;
  isCreateHouseClick = false;
  isShowAllClick = false;

  ShowingAllHouse: any[] = [];
  usersArray: any[] = [];
  housesArray: any[] = [];


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


}
