'use strict';

class Preloader {
  constructor() {
    this.preloader = document.getElementById('preloader');
    this.html = document.querySelector('html');

    if (this.preloader) {
      this.show();
      let timer = setTimeout(() => {
        this.hide();
      }, 10000);

      // скрыть preloader после загрузки страницы
      window.addEventListener('load', () => {
        clearTimeout(timer);
        this.hide();
      });
    } else {
      document.body.classList.remove('body_hidden');
    }
  }

  show() {
    this.preloader.classList.add('preloader_active');
    this.html.classList.add('modalOpen');
  }

  hide() {
    document.body.classList.remove('body_hidden');
    this.preloader.classList.remove('preloader_active');
    this.html.classList.remove('modalOpen');
  }
}

new Preloader();