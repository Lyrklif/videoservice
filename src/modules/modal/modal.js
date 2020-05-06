'use strict';

import {
  disableBodyScroll,
  enableBodyScroll
} from 'body-scroll-lock';

export default class Modal {
  constructor() {
    this.modal = document.querySelector('.js-modal');
    this.overlay = document.querySelector('.js-modal-overlay');
    this.html = document.querySelector('html');
    this.main = document.querySelector('.js-site');
    this.scrollbarWidth = this.getScrollbarWidth();

    if (this.modal) {
      this.events();
    }
  }

  getScrollbarWidth() {
    const scrollDiv = document.createElement('div');
    scrollDiv.className = 'scrollbar-measure';
    document.body.appendChild(scrollDiv);

    // Получить scrollbar width
    const width = scrollDiv.offsetWidth - scrollDiv.clientWidth;

    // Удалить созданный блок 
    document.body.removeChild(scrollDiv);

    return width;
  }

  events() {
    this.hashChange();
    const links = document.querySelectorAll('[data-modal]');

    for (let i = 0; i < links.length; i++) {
      links[i].addEventListener('click', e => {
        e.preventDefault();
        const id = links[i].dataset.modal;

        if (id && id !== 'data-modal') {
          this.show(id);
        } else {
          this.hide();
        }
      });
    }

    // при нажатии на overlay закрывать модальное окно
    this.overlay.addEventListener('click', e => {
      e.preventDefault();
      this.hide();
    });

    // при нажатии на esc закрывать модальное окно
    document.addEventListener('keyup', e => {
      if (e.keyCode === 27 || e.type === 'click') {
        this.hide();
      }
    });
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

    // если в адресной строке есть текст после # и существует модальное окно с таким id
    if (hash && this.modal.querySelector(`#${hash}`)) {
      this.show(hash);
    } else {
      this.hide();
    }
  }

  show(id) {
    const tab = document.getElementById(id); // текущее модальное окно
    const tabModal = tab.parentElement.parentElement;
    const input = tab.querySelector('input:not([type="checkbox"]):not([type="radio"])'); // первый input в модальном окне

    if (tab) tab.classList.add('modal__tab_active');
    this.modal.classList.add('modal_active'); // ***

    this.focusInput(input); // поставить focus на input

    disableBodyScroll(tabModal);

    this.main.style.paddingRight = `${this.scrollbarWidth}px`; // добавить отступ размером с ширину скроллбара
    this.html.classList.add('modalOpen');
  }

  // поставить focus на input
  focusInput(input) {
    if (input) {
      setTimeout(() => {
        input.focus();
      }, 100);
    }
  }

  hide() {
    this.modal.classList.remove('modal_active');

    // удалить hash из адресной строки
    history.pushState('', document.title, window.location.pathname);
    enableBodyScroll(this.modal);

    const tab = document.querySelector('.modal__tab_active');
    if (tab) tab.classList.remove('modal__tab_active');

    setTimeout(() => {
      this.main.style.paddingRight = ''; // убрать отступ
      this.html.classList.remove('modalOpen');
    }, 0);
  }
}

/*
 * window.globalModal.show(id);
 * window.globalModal.hide();
 */