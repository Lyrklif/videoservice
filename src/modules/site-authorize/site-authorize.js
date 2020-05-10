'use strict';

import { cssClasses, savedData } from '../../scripts/vars.js';

export default class SiteAuthorize {
  constructor() {
    this.wrapSignIn = [ ...document.querySelectorAll('.js-sign-in-wrap') ];
    this.wrapSignOut = [ ...document.querySelectorAll('.js-sign-out-wrap') ];
    this.exitButtons = [ ...document.querySelectorAll('.js-sign-out-btn') ];
    this.texts = [ ...document.querySelectorAll('.js-text-name') ];
    this.labels = [ ...document.querySelectorAll('.js-label-name') ];
    this.inputs = [ ...document.querySelectorAll('.js-input-name') ];

    // авторизоваться если есть сохранённые данные
    this.autoAuthorization();

    if (this.texts.length) this.simulateClick();
    if (this.exitButtons.length) this.clickBtnExitEvent();

    if (this.texts.length && this.labels.length && this.inputs.length) {
      this.clickTextNameEvent();
      this.inputBlurEvent();
    }
  } // end constructor

  // авторизоваться если есть сохранённые данные
  autoAuthorization() {
    const savedName = localStorage.getItem(savedData.name);

    if (savedName) {
      this.writeName(savedName);
      this.authorize();
    }

    // иначе записать в input значение из p (стандартное значение)
    else if (this.texts.length && this.inputs.length) {
      this.writeDefaultNameInInput();
    }
  }

  // авторизовать пользователя
  authorize() {
    for (let i = 0; i < this.wrapSignIn.length; i++) {
      this.hide(this.wrapSignIn[i]);
      this.show(this.wrapSignOut[i]);
    }

    this.writeName(this.inputs[0].value);
  }

  // выйти из аккаунта
  exit() {
    for (let i = 0; i < this.wrapSignOut.length; i++) {
      this.hide(this.wrapSignOut[i]);
      this.show(this.wrapSignIn[i]);
    }

    localStorage.removeItem(savedData.name);
  }

  // симулировать клик при нажатии на Enter когда p.js-text-name в фокусе
  simulateClick() {
    for (let i = 0; i < this.texts.length; i++) {
      this.texts[i].addEventListener('keydown', e => {
        if (e.key === 'Enter') {
          this.texts[i].click();
        }
      });
    }
  }

  // записать дефолтное значение в input
  writeDefaultNameInInput() {
    const name = this.texts[0].textContent;

    for (let i = 0; i < this.inputs.length; i++) {
      this.inputs[i].value = name;
    }
  }

  // записать имя
  writeName(name) {
    const savedName = name || localStorage.getItem(savedData.name);

    if (savedName) {
      const fixedName = this.getFixName(savedName);
      localStorage.setItem(savedData.name, fixedName);

      for (let i = 0; i < this.texts.length; i++) {
        this.texts[i].innerHTML = fixedName;
        this.inputs[i].value = fixedName;
      }
    }
  }

  // при нажатии на кнопку "выйти"
  clickBtnExitEvent() {
    for (let i = 0; i < this.exitButtons.length; i++) {
      this.exitButtons[i].addEventListener('click', () => {
        this.exit();
      });
    }
  }

  // при нажатии на имя показать input
  clickTextNameEvent() {
    for (let i = 0; i < this.texts.length; i++) {
      this.texts[i].addEventListener('click', () => {
        this.hide(this.texts[i]);
        this.show(this.labels[i]);

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

  // показать текст
  showTextName() {
    for (let i = 0; i < this.texts.length; i++) {
      this.hide(this.labels[i]);
      this.show(this.texts[i]);
    }
  }

  // вернуть исправленную строку имени
  getFixName(value) {
    let fixedName = value;
    if (value.length > 12) fixedName = `${value.substr(0, 12)}.`;
    return fixedName;
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