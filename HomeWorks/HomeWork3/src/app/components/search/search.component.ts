import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  constructor() { }
  InputValue: string | number;

  @Input() ShowingValue;

  onInput(event) {
    this.InputValue = event.target.value;
  }

  clickSearchBtn() {
    this.ShowingValue = this.InputValue;
  }
}
