import { Component } from '@angular/core';

@Component({
  selector: 'app-root',/*Тут запуска.ться кастомні директиви, і наш appRoot*/
  templateUrl: './app.component.html',/*Назва HTML сторінки яка буде привязана до цієї компоненти*/
  styleUrls: ['./app.component.css'] /*Стилізація яка буде підвязана до цієї компоненти*/
})
/*Змінні зверху методи знизу*/
export class AppComponent {
  test: string = "HELLO WORLD";
  inputedValue: string = '';
  status: boolean = false;
  numb: number = 0;

  users = [
    {
      name: 'Viktor',
      car: false
    },
    {
      name: 'Dima',
      car: true
    },
    {
      name: 'Ira',
      car: false
    },
    {
      name: 'Oleg',
      car: false
    }
  ];

  mouseClick() {
    console.log('CLICK')
  }

  onInput(ev) {
    this.inputedValue = ev.target.value;/*Таким чином ми виводим зеначення інпута*/
  }

  changeStatus() {
    this.status = !this.status;
  }

  incremI() {
    this.numb++
  }
}

