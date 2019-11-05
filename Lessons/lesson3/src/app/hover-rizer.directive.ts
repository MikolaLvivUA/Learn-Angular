import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[appHoverRizer]'
})

export class HoverRizerDirective /*implements OnInit*/ { // імплементація підрозуміває те що ми використаєм всі методи.
                                                     // в OnInit є тільки один метод на void
  constructor(private component: ElementRef) {
  } /*приймаєм коипоненту яка має типізацію element reference*/

/*  ngOnInit(): void {// Як тільки аплікуха прогружається і застосовується до чогось директива спрацьовуэ OnInit
    this.component.nativeElement.style.backgroundColor = 'greenYellow'; // native element це власне той елемент
                                                                       // до якого ця директива застосовується
  }*/

  @Input() appHoverRizer; // Щоб передати дані з нашого html документа ми в Input передаєм нашу директиву в точності
                          // як вона називається в html
  @HostBinding('style.backgroundColor') bgC; // біндим параметр на змінну bgC

  @HostListener('mouseleave') coloriser() {
    /*this.component.nativeElement.style.backgroundColor = 'greenYellow';*/
    this.bgC = this.appHoverRizer || 'greenYellow';
  } // задаєм слухач події який буде слухати подію лівання мишки

  @HostListener('mouseenter') anotherFunc() {
    /*this.component.nativeElement.style.backgroundColor = 'white';*/
    this.bgC = 'white';
  } // задаєм слухач подій який буде слухати подію навелення мишки
}
