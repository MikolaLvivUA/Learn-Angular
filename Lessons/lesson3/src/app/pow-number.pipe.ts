import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ // нам підтягується декоратор pipe
  name: 'powNumber'//  говорить нам що в нашого пайпа імя powNumber по цьому імені ми будемо доступатись
})
export class PowNumberPipe implements PipeTransform {

  transform(value: number, num: number): number { // transform це функція яка виконується зразу як тільки наш пайп запускається
                                                // приймає value це змінна до якої ми застосовуємо пайп, args це
                                               // значення які ми приймаєм в наш пайп
    return Math.pow(value, num); // це те що нам треба зробити щоб воно видалось нам на фронт
  }
}
