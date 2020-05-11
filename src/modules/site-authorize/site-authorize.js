'use strict';

import { savedData } from '../../scripts/vars.js';
import hide from '../../functions/hide';
import show from '../../functions/show';

/*
 * window.globalSiteAuthorize.authorize();
 * window.globalSiteAuthorize.exit();
 */

export default class SiteAuthorize {
  constructor() {
    this.wrapSignIn = [...document.querySelectorAll('.js-sign-in-wrap')];
    this.wrapSignOut = [...document.querySelectorAll('.js-sign-out-wrap')];

    if (this.wrapSignIn.length && this.wrapSignOut.length) {
      this.init();
    }
  }

  init() {
    const savedName = localStorage.getItem(savedData.name);

    // авторизоваться если есть сохранённые данные
    if (savedName) {
      window.globalUserName.writeName(savedName);
      this.authorize();
    } else {
      // иначе записать в input значение из стандартное значение
      window.globalUserName.writeDefaultName();
    }
  }

  // авторизовать пользователя
  authorize() {
    for (let i = 0; i < this.wrapSignIn.length; i++) {
      hide(this.wrapSignIn[i]);
      show(this.wrapSignOut[i]);
    }

    window.globalUserName.writeName();
  }

  // выйти из аккаунта
  exit() {
    for (let i = 0; i < this.wrapSignOut.length; i++) {
      hide(this.wrapSignOut[i]);
      show(this.wrapSignIn[i]);
    }

    localStorage.removeItem(savedData.name);
  }
}