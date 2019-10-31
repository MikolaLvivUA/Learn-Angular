import { Component } from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lesson2';
  error = false;

  errorStyle = { /*передаєм обєкт зі стилями в typeScript файл*/
    backgroundColor : this.error ? 'red' : 'green',
    color: this.error ? 'green' : 'red'
  };

  employee = { //Створюєм наш обєкт який повторює нашу форму.
    name: 'Vova',
    gender: 'female',
    js: '',
    java: '',
    php: true,
    position: '',
  };

  pipeString = 'SomerRandomString';
  pipeNumber = 22.213123123123123;
  pipePercent = 0.3;
  pipeDate = new Date();

  createErr() {
    this.error = !this.error;
    this.errorStyle.backgroundColor = this.error ? 'red' : 'green';
    this.errorStyle.color = this.error ? 'green' : 'red';
  }

  applyForRef(jobReferenceForm: NgForm) {
    console.log(jobReferenceForm.value); //Це один із способів передачі даних з форми
  }

  applyGotDataBind(twoForm: NgForm) {
    console.log(this.employee);
    console.log(twoForm);
  }

  autoFill() { /*авто компліт форми*/
    this.employee.name = 'Vova';
    this.employee.position = 'Middle'
  }
}
