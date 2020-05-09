'use strict';

import Pristine from '../../../node_modules/pristinejs/dist/pristine';

import { savedData } from '../../scripts/vars.js';

// modal-authorize

export default class ModalAuthorize {
  constructor() {
    this.form = document.querySelector('.js-authorize-form');

    if (this.form) {
      this.login = this.form.querySelector('.js-login');
      this.password = this.form.querySelector('.js-password');
      this.remember = this.form.querySelector('.js-remember');

      this.writeData();
      this.event();
    }
  }

  event() {
    const param = {
      classTo: 'input',
      errorClass: 'input_error',
      successClass: 'input_success',
      errorTextParent: 'input',
      errorTextTag: 'span',
      errorTextClass: 'input__error-text'
    };

    const pristine = new Pristine(this.form, param);

    this.form.addEventListener('submit', e => {
      e.preventDefault();
      const valid = pristine.validate();

      if (valid) {
        this.setData();
        window.globalModal.hide();
        window.globalSiteAuthorize.authorize();
      }
    });
  }

  writeData() {
    const login = localStorage.getItem(savedData.login);
    const password = localStorage.getItem(savedData.password);

    if (login) this.login.value = login;
    if (password) this.password.value = password;
  }

  setData() {
    const login = this.login.value;
    const password = this.password.value;
    const remember = this.remember.checked;

    if (remember) {
      localStorage.setItem(savedData.login, login);
      localStorage.setItem(savedData.password, password);
    }
  }
}