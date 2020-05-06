'use strict';
/* eslint-disable prefer-const */
/* eslint-disable no-undef */

import { cssClasses } from '../../scripts/vars.js';

// Переключение вкладок

export default class Tabs {
  constructor() {
    this.tabsList = [...document.querySelectorAll('[data-tab-control]')];
    this.contentList = [...document.querySelectorAll('[data-tab-content]')];

    if (this.tabsList.length && this.contentList.length) {
      this.settings(this.tabsList, this.contentList);
    }
  }

  settings(tabsList, contentList) {
    // классы, которые добавляются к элементам в процессе выполнения скрипта
    const activeClass = cssClasses.activeElem; // класс, который присваивается активному tab
    const animateClass = cssClasses.decorShow; // класс, который нужен для плавного появления блока

    tabsList.forEach((tab, index) => tab.addEventListener('click', () => {
      // если нажали на неактивную кнопку
      if (!(tab.classList.contains(activeClass))) {
        tabsList.forEach(tab => {
          tab.classList.remove(activeClass);
        });

        // скрыть все блоки с контентом
        contentList.forEach(content => {
          content.classList.remove(activeClass, animateClass); // удалить классы .active и .show-slow
        });

        tabsList[index].classList.add(activeClass); // добавить класс .active

        // показать блок с тем же индексом, что и у кнопки (display: block; opacity: 0;)
        contentList[index].classList.add(activeClass); // добавить класс .active

        // через 300ms добавить этому блоку доп класс с opacity: 1;
        setTimeout(() => {
          contentList[index].classList.add(animateClass); // добавить класс .show-slow
        }, 300);
      }
    }));
  }
}