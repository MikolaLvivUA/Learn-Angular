import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-show-all',
  templateUrl: './show-all.component.html',
  styleUrls: ['./show-all.component.css']
})
export class ShowAllComponent {

  constructor() { }
  index: number = -1;

  course = fetch('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5')
    .then(value => value.json())
    .then(jsonedValue => {
      const USD = jsonedValue.find(currency => {
        return currency.buy;
      });
      this.course = USD.buy;
      return this.course;
    });
  @Input() ShowingAllHouse;

  ShowAllButtonClick(id: number) {
    this.index = id;
    console.log(this.index);
  }
}
