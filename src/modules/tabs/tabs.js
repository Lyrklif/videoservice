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
    this.hashChange();

    for (let i = 0; i < this.tabs.length; i++) {
      this.tabs[i].addEventListener('click', e => {
        // e.preventDefault();
        if (!this.tabs[i].classList.contains(cssClasses.activeElem)) {
          let attr = this.tabs[i].dataset.tabControl;
          this.open(attr, i);
        }
      });
    }
  }

  open(name, index) {
    let indexContent;
    let indexTab;

    // если в адресной строке есть текст после #
    if (name) {
      indexContent = this.getIndexFoundedContent(name, index);
      indexTab = this.getIndexFoundedTab(name, index);
    }

    if (indexContent !== null && indexTab !== null) {
      this.removeClasses();
      this.tabs[indexTab].classList.add(cssClasses.activeElem);
      this.addClassesContent(indexContent);
    }
  }

  // удалить лишние классы
  removeClasses() {
    for (let i = 0; i < this.tabs.length; i++) {
      this.tabs[i].classList.remove(cssClasses.activeElem);
      this.contents[i].classList.remove(cssClasses.activeElem, cssClasses.decorShow);
    }
  }

  getIndexFoundedContent(href, index) {
    return this.getIndexFoundedElem(this.contents, 'tabContent', href, index);
  }

  getIndexFoundedTab(href, index) {
    return this.getIndexFoundedElem(this.tabs, 'tabControl', href, index);
  }

  // показать найденный блок
  getIndexFoundedElem(arr, attr, href, index) {
    if (typeof index !== 'undefined' && arr[index].dataset[attr] === href) {
      return index;
    }

    for (let i = 0; i < arr.length; i++) {
      let data = arr[i].dataset[attr];
      if (data === href) {
        return i;
      }
    }

    return null;
  }

  // добавить классы
  addClassesContent(i) {
    if (!this.contents[i]) return false;

    // показать блок с тем же индексом, что и у кнопки (display: block; opacity: 0;)
    this.contents[i].classList.add(cssClasses.activeElem);

    // добавить доп класс с opacity: 1;
    setTimeout(() => {
      this.contents[i].classList.add(cssClasses.decorShow);
    }, 100);
  }

  // отслеживать изменение хэша
  hashChange() {
    this.hash();

    // при изменении адресной строки
    window.addEventListener('hashchange', () => {
      this.hash();
    });
  }

  hash() {
    let hash = window.location.hash.substring(1);

    // если в адресной строке есть текст после #
    if (hash) {
      this.open(hash);
    }
  }
}

// window.globalTabs.open(name);