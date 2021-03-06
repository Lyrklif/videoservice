'use strict';

import {
  disableBodyScroll,
  enableBodyScroll
} from 'body-scroll-lock';

export default class Burger {
  constructor() {
    this.burger = document.getElementById('burger');
    if (this.burger) {
      this.events();
    }
  }

  events() {
    const triggers = [ ...document.querySelectorAll('[data-burger]') ];

    for (let i = 0; i < triggers.length; i++) {
      triggers[i].addEventListener('click', e => {
        e.preventDefault();
        triggers[i].classList.toggle('active');
        this[this.burger.classList.contains('burger_active') ? 'hide' : 'show']();
      });
    }
  }

  show() {
    this.burger.classList.add('burger_active');
    disableBodyScroll(this.burger);
  }

  hide() {
    this.burger.classList.remove('burger_active');
    enableBodyScroll(this.burger);
  }
}