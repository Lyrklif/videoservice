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

    if (this.names.length) {
      this.writeName();
    }

    if (this.exitButtons.length) {
      this.clickBtnExit();
    }

    if (this.names.length && this.labels.length && this.inputs.length) {
      this.clickTextNameEvent();
      this.changeName();
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
  changeName() {
    for (let i = 0; i < this.inputs.length; i++) {
      this.inputs[i].addEventListener('blur', () => {
        const name = this.inputs[i].value;
        localStorage.setItem(savedData.name, name); // savedData.name
        this.writeName();
        this.showTextName();
      });
    }
  }

  writeName() {
    const savedName = localStorage.getItem(savedData.name);

    if (savedName) {
      for (let i = 0; i < this.names.length; i++) {
        this.names[i].innerHTML = savedName;
      }
    }
  }

  authorize() {
    for (let i = 0; i < this.wrapSignIn.length; i++) {
      this.hide(this.wrapSignIn[i]);
      this.show(this.wrapSignOut[i]);
    }
  }

  exit() {
    for (let i = 0; i < this.wrapSignOut.length; i++) {
      this.hide(this.wrapSignOut[i]);
      this.show(this.wrapSignIn[i]);
    }
  }

  hide(elem) {
    elem.classList.remove(cssClasses.showElem);
  }

  show(elem) {
    elem.classList.add(cssClasses.showElem);
  }
}