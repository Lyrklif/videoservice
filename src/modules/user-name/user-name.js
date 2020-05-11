'use strict';

import { savedData } from '../../scripts/vars.js';
import hide from '../../functions/hide';
import show from '../../functions/show';
import simulateClick from '../../functions/simulateClick';

/*
 * window.globalUserName.writeDefaultName();
 * window.globalUserName.writeName();
 */

export default class UserName {
  constructor() {
    this.texts = document.querySelectorAll('.js-user-name-text');
    this.labels = document.querySelectorAll('.js-user-name-label');
    this.inputs = document.querySelectorAll('.js-user-name-input');

    if (this.texts.length && this.labels.length && this.inputs.length) {
      this.simulateClickText();
      this.clickTextNameEvent();
      this.inputBlurEvent();
    }
  }

  // симулировать клик при нажатии на Enter когда this.text в фокусе
  simulateClickText() {
    for (let i = 0; i < this.texts.length; i++) {
      simulateClick(this.texts[i]);
    }
  }

  // при нажатии на текст
  clickTextNameEvent() {
    for (let i = 0; i < this.texts.length; i++) {
      this.texts[i].addEventListener('click', () => {
        hide(this.texts[i]);
        show(this.labels[i]);

        this.inputs[i].focus();
      });
    }
  }

  // при потере фокуса input
  inputBlurEvent() {
    for (let i = 0; i < this.inputs.length; i++) {
      this.inputs[i].addEventListener('blur', () => {
        this.writeName(this.inputs[i].value);
        this.showTextName();
      });

      this.inputs[i].addEventListener('keydown', e => {
        if (e.key === 'Enter') {
          this.writeName(this.inputs[i].value);
          this.showTextName();
        }
      });
    }
  }

  // записать дефолтное значение в input
  writeDefaultName() {
    const name = this.texts[0].textContent;

    for (let i = 0; i < this.inputs.length; i++) {
      this.inputs[i].value = name;
    }
  }

  // записать имя
  writeName(name) {
    const savedName = name || localStorage.getItem(savedData.name) || this.inputs[0].value;

    if (savedName) {
      const fixedName = this.getFixName(savedName);
      localStorage.setItem(savedData.name, fixedName);

      for (let i = 0; i < this.texts.length; i++) {
        this.texts[i].innerHTML = fixedName;
        this.inputs[i].value = fixedName;
      }
    }
  }

  // показать текст
  showTextName() {
    for (let i = 0; i < this.texts.length; i++) {
      hide(this.labels[i]);
      show(this.texts[i]);
    }
  }

  // вернуть исправленную строку имени
  getFixName(value) {
    if (value.length > 12) {
      return `${value.substr(0, 12)}.`;
    }

    return value;
  }
}