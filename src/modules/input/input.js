'use strict';

// настройка полей ввода (input)

import {
  cssClasses,
  screen,
  jsClasses, defaultArguments
} from '../../scripts/vars.js';

export default class Input {
  constructor() {
    window.addEventListener('load', () => {
      this.input = document.querySelectorAll(`.${jsClasses.input}`);
      this.reset = document.querySelectorAll(`.${jsClasses.inputReset}`);

      if (this.input.length > 0) {
        this.write();
      }
      if (this.reset.length > 0) {
        this.resetEvent();
      }
    });
  }

  // записать введённые данные в атрибут value
  write() {
    for (let i = 0; i < this.input.length; i++) {
      this.input[i].addEventListener('input', () => {
        this.input[i].setAttribute('value', this.input[i].value);
      });
    }
  }

  // при нажатии на reset
  resetEvent() {
    for (let i = 0; i < this.reset.length; i++) {
      this.reset[i].addEventListener('click', () => {
        let input = this.reset[i].parentElement.querySelector('input');
        if (input) {
          input.value = '';
          input.setAttribute('value', '');
        }
      });
    }
  }
}