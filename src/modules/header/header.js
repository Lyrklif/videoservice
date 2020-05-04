'use strict';

// настройка появления/скрытия header при скролле

import {
  cssClasses,
  screen,
  defaultArguments,
  jsClasses
} from '../../scripts/vars.js';

import { check_down_lg, check_up_lg_inclusive } from '../check-size-screen/check-size-screen';

export default class Header {
  constructor() {
    this.scrollPrev = 0;

    // после загрузки страницы
    window.addEventListener('load', () => {
      // шапка сайта
      this.header = document.querySelector(`.${jsClasses.header}`);
      this.headerBottom = $('.header__nav > .container');

      this.search = this.header.querySelector(`.${jsClasses.searchBox}`);
      if (this.search) {
        this.addGlow();
      }

      // if (this.header) {
      //   this.scrollInit();
      // }

      // this.partHeaderSettings(); // применить настройки при открытии страницы
      // this.partHeaderToggleInit(); // применять настройки при скролле
    });
  }

  addGlow() {
    setTimeout(() => {
      this.search.classList.add(cssClasses.glow);
    }, 15000);
  }

  // добавить обработчик для показа/скрытия части header
  partHeaderToggleInit() {
    window.addEventListener('scroll', this.partHeaderSettings);
  }

  // удалить обработчик для показа/скрытия части header
  partHeaderToggleRemove() {
    window.removeEventListener('scroll', this.partHeaderSettings);
  }

  // логика показа/скрытия нижней части шапки
  partHeaderSettings() {
    // (!!!) т.к. вызов this невозможен создаётся локальная переменная
    let headerBottom = $('.header__nav > .container');

    // если десктоп
    if (check_up_lg_inclusive()) {
      if (pageYOffset > 50) {
        // скрыть блок
        headerBottom.slideUp({ duration: 150, easing: 'linear' });
      } else {
        // показать блок
        headerBottom.slideDown({ duration: 150, easing: 'linear' });
      }
    }
  }

  // скрыть часть шапки
  partHeaderHide() {
    this.headerBottom.slideUp({ duration: 150, easing: 'linear' });
  }

  // включить показ/скрытие header
  scrollInit() {
    // window.addEventListener('scroll', this.scrollHeaderHandler);
  }

  // отключить показ/скрытие header
  scrollRemove() {
    // window.removeEventListener('scroll', this.scrollHeaderHandler);
  }

  // скрыть шапку
  hideHeader() {
    this.header.classList.add(cssClasses.decorHide); // opacity

    setTimeout(() => {
      this.header.classList.add(cssClasses.hideElem); // скрыть
    }, 100);
  }

  // настройки показа/скрытия header
  scrollHeaderHandler() {
    let isMobile = check_down_lg();
    if (!isMobile) return;

    // (!!!) т.к. вызов this невозможен создаётся локальная переменная
    let header = document.querySelector(`.${jsClasses.header}`);
    let scrolled = window.pageYOffset;

    // при скролле вниз
    if (scrolled > 100 && scrolled > this.scrollPrev) {
      header.classList.add(cssClasses.decorHide); // opacity

      setTimeout(() => {
        header.classList.add(cssClasses.hideElem); // скрыть
      }, 100);

      // при скролле верх
    } else {
      header.classList.remove(cssClasses.hideElem); // показать

      setTimeout(() => {
        header.classList.remove(cssClasses.decorHide); // opacity
      }, 100);
    }
    this.scrollPrev = scrolled;
  }
}