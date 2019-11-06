import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-create-house',
  templateUrl: './create-house.component.html',
  styleUrls: ['./create-house.component.css']
})
export class CreateHouseComponent {

  constructor() { }
  @Input() housesArray;
  @Input() usersArray;

  id: number;
  city: string;
  square: string;
  price: number;
  owner: object;

  house = {
    id: undefined,
    city: '',
    square: '',
    price: undefined,
    owner: {}
  };



  createNewHouse() {
    const randomUserIndex = (Math.random() * this.usersArray.length).toFixed(0);
    this.house.owner = this.usersArray[randomUserIndex];
    console.log(randomUserIndex);
    console.log(this.house.owner);
    this.house.id = this.housesArray.length + 1;
    this.id = this.house.id;
    this.city = this.house.city;
    this.square = this.house.square;
    this.price = this.house.price;
    this.owner = this.house.owner;
    this.housesArray.push({id: this.id, city: this.city, square: this.square, price: this.price, owner: this.owner});
    console.log(this.housesArray);
  }
}
