import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-house-component',
  templateUrl: './house-component.component.html',
  styleUrls: ['./house-component.component.css']
})
export class HouseComponentComponent {

  constructor() { }

  @Input() house; // за допомогою декоратора input ловим нашу змінну house в house component

/*В аутпуті ми вказуєм те що ми будем передавати на ззовні*/
  /*Вказуєм змінну deleteHouse яка буде дорівнювати новому eventEmitter-це аналог сокетів тільки в ангулярі
  різниця в тому що працює він тільки в межах фронтенда, або на ноді в межах тільки бекенда*/
  @Output() deleteHouse = new EventEmitter();

  /*Ця функція має передати дані з цієї компоненти на батьківську компоненту, яка знайде будинок і стре його*/
  deleteThisHouse() {
    /*при натисканні на цю кнопку ми будем імітувати подію deleteHouse*/
    this.deleteHouse.emit(this.house.id); /*Ми коли трігерим подію можем передати наприклад айдішку хауса*/
  }
}

