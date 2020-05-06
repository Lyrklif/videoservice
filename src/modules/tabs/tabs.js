'use strict';
/* eslint-disable prefer-const */
/* eslint-disable no-undef */

import { cssClasses } from '../../scripts/vars.js';

// Переключение вкладок

export default class Tabs {
  constructor() {
    this.tabs = [...document.querySelectorAll('[data-tab-control]')];
    this.contents = [...document.querySelectorAll('[data-tab-content]')];

    if (this.tabs.length && this.contents.length) {
      this.init();
    }
  }

  init() {
    for (let i = 0; i < this.tabs.length; i++) {
      this.tabs[i].addEventListener('click', e => {
        if (this.tabs[i].classList.contains(cssClasses.activeElem)) {
          e.preventDefault();
        } else {
          this.removeClasses();
          this.tabs[i].classList.add(cssClasses.activeElem);
          this.showFoundContent(i, this.tabs[i].dataset.tabControl);
        }
      });
    }
  }

  // удалить лишние классы
  removeClasses() {
    for (let i = 0; i < this.tabs.length; i++) {
      this.tabs[i].classList.remove(cssClasses.activeElem);
      this.contents[i].classList.remove(cssClasses.activeElem, cssClasses.decorShow);
    }
  }

  // показать найденный блок
  showFoundContent(index, href) {
    if (this.contents[index].dataset.tabContent === href) {
      this.addClasses(index);
    } else {
      for (let i = 0; i < this.contents.length; i++) {
        let data = this.contents[i].dataset.tabContent;
        if (data === href) {
          this.addClasses(i);
        }
      }
    }
  }

  // добавить классы
  addClasses(i) {
    // показать блок с тем же индексом, что и у кнопки (display: block; opacity: 0;)
    this.contents[i].classList.add(cssClasses.activeElem);

    // добавить доп класс с opacity: 1;
    setTimeout(() => {
      this.contents[i].classList.add(cssClasses.decorShow);
    }, 100);
  }
}