'use strict';

export default class BtnSignOut {
  constructor() {
    this.buttons = document.querySelectorAll('.js-btn-sign-out');

    if (this.buttons.length) {
      this.init();
    }
  }

  init() {
    for (let i = 0; i < this.buttons.length; i++) {
      this.buttons[i].addEventListener('click', e => {
        e.preventDefault();

        window.globalSiteAuthorize.exit();
      });
    }
  }
}