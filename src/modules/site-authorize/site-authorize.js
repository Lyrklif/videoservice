'use strict';

import { cssClasses, savedData } from '../../scripts/vars.js';

export default class SiteAuthorize {
  constructor() {
    this.exitButtons = [...document.querySelectorAll('.js-sign-out-btn')];

    this.wrapSignIn = [...document.querySelectorAll('.js-sign-in-wrap')];
    this.wrapSignOut = [...document.querySelectorAll('.js-sign-out-wrap')];

    this.names = [...document.querySelectorAll('.js-text-name')];
    this.labels = [...document.querySelectorAll('.js-label-name')];
    this.inputs = [...document.querySelectorAll('.js-input-name')];

    if (this.names.length && this.inputs.length) {
      this.writeDefaultNameInInput();
    }

    if (this.names.length) {
      this.writeName();
      this.simulateClick();
    }

    if (this.exitButtons.length) {
      this.clickBtnExit();
    }

    if (this.names.length && this.labels.length && this.inputs.length) {
      this.clickTextNameEvent();
      this.changeInputValueEvent();
    }
  } // end constructor

  // симулировать клик при нажатии на Enter когда p.js-text-name в фокусе
  simulateClick() {
    for (let i = 0; i < this.names.length; i++) {
      this.names[i].addEventListener('keydown', e => {
        if (e.key === 'Enter') {
          this.names[i].click();
        }
      });
    }
  }

  // записать дефолтное значение в input
  writeDefaultNameInInput() {
    const name = this.names[0].textContent;

    for (let i = 0; i < this.inputs.length; i++) {
      this.inputs[i].value = name;
    }
  }

  // при нажатии на кнопки "выйти"
  clickBtnExit() {
    for (let i = 0; i < this.exitButtons.length; i++) {
      this.exitButtons[i].addEventListener('click', () => {
        this.exit();
      });
    }
  }

  // при нажатии на имя показать input для изменения имени
  clickTextNameEvent() {
    for (let i = 0; i < this.names.length; i++) {
      this.names[i].addEventListener('click', () => {
        this.hide(this.names[i]);
        this.show(this.labels[i]);

        this.inputs[i].focus();
      });
    }
  }

  // показать input для изменения имени
  showTextName() {
    for (let i = 0; i < this.names.length; i++) {
      this.hide(this.labels[i]);
      this.show(this.names[i]);
    }
  }

  // изменить имя пользователя
  changeInputValueEvent() {
    for (let i = 0; i < this.inputs.length; i++) {
      this.inputs[i].addEventListener('blur', () => {
        this.changeName(this.inputs[i]);
      });

      this.inputs[i].addEventListener('keydown', e => {
        if (e.key === 'Enter') {
          this.changeName(this.inputs[i]);
        }
      });
    }
  }

  // изменить имя
  changeName(input) {
    const name = this.getFixName(input.value);

    localStorage.setItem(savedData.name, name);
    this.writeName();
    this.showTextName();
  }

  getFixName(value) {
    let fixedName = value;

    if (value.length > 12) {
      fixedName = `${value.substr(0, 12)}.`;
    }

    return fixedName;
  }

  // записать имя в input и p
  writeName() {
    const savedName = localStorage.getItem(savedData.name);

    if (savedName) {
      for (let i = 0; i < this.names.length; i++) {
        this.names[i].innerHTML = savedName;
        this.inputs[i].value = savedName;
      }
    }
  }

  // авторизовать пользователя
  authorize() {
    for (let i = 0; i < this.wrapSignIn.length; i++) {
      this.hide(this.wrapSignIn[i]);
      this.show(this.wrapSignOut[i]);
    }
  }

  // выйти из аккаунта
  exit() {
    for (let i = 0; i < this.wrapSignOut.length; i++) {
      this.hide(this.wrapSignOut[i]);
      this.show(this.wrapSignIn[i]);
    }
  }

  // скрыть элемент
  hide(elem) {
    elem.classList.remove(cssClasses.showElem);
  }

  // показать элемент
  show(elem) {
    elem.classList.add(cssClasses.showElem);
  }
}