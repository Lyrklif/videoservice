'use strict';

import {
  disableBodyScroll,
  enableBodyScroll
} from 'body-scroll-lock';

export default class Modal {
  constructor() {
    window.addEventListener('load', () => {
      this.modal = document.getElementById('modal');
      this.modal2 = document.getElementById('modal2');
      this.content = document.querySelectorAll('.modal__content');
      this.overlay = document.querySelectorAll('.modal__overlay');
      this.html = document.querySelector('html');
      this.main = document.querySelector('.page');
      this.header = document.querySelector('.js-header');
      this.footer = document.querySelector('.footer');
      this.preloader = document.querySelector('#preloader');

      /*
       * **********************************************
       * Создать блок для расчёта ширины scrollbar
       */
      const scrollDiv = document.createElement('div');
      scrollDiv.className = 'scrollbar-measure';
      document.body.appendChild(scrollDiv);

      // Получить scrollbar width
      this.scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;

      // Удалить созданный блок 
      document.body.removeChild(scrollDiv);

      // **********************************************

      if (this.modal || this.modal2) {
        this.events();
      }
    });
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

    for (let i = 0; i < this.overlay.length; i++) {
      this.overlay[i].addEventListener('click', e => {
        e.preventDefault();
        this.hide();
      });
    }

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
    window.addEventListener('hashchange', e => {
      this.hash();
    });
  }

  hash() {
    let hash = window.location.hash.substring(1);

    // если в адресной строке есть текст после #
    if (hash) {
      // если существует модальное окно с таким id
      if (this.modal.querySelector(`#${hash}`)) {
        this.show(hash); // открыть модальное окно
      }

      if (this.modal2) {
        if (this.modal2.querySelector(`#${hash}`)) {
          this.show(hash); // открыть модальное окно
        }
      }
    } else {
      // если в адресной строке нет текста после #
      this.hide();
    }
  }

  show(id) {
    const tab = document.getElementById(id); // текущее модальное окно
    const tabModal = tab.parentElement.parentElement;
    const input = tab.querySelector('input:not([type="checkbox"]):not([type="radio"])'); // первый input в модальном окне
    if (id === 'city' || id === 'city_contacts') {
      for (let i = 0; i < this.content.length; i++) {
        this.content[i].classList.add('modal__content_large');
      }
    } else if (id === 'licenses' || id === 'licenses-teacher') {
      for (let i = 0; i < this.content.length; i++) {
        this.content[i].classList.add('modal__content_licenses');
      }
    } else if (id === 'search') {
      for (let i = 0; i < this.content.length; i++) {
        this.content[i].classList.add('modal__content_search');
      }
    }

    if (tab) tab.classList.add('modal__tab_active');
    tabModal.classList.add('modal_active');

    this.focusInput(input); // поставить focus на input

    // если это не относится к модальному окну выбора города
    if (id !== 'city' && id !== 'city_contacts' && id !== 'state-platforms_v2' && id !== 'search') {
      history.pushState({}, `${id}`, `#${id}`); // добавить hash в адресную строку без скролла вверх
    }
    disableBodyScroll(tabModal);

    // добавить отступ размером с ширину скроллбара
    this.main.style.paddingRight = `${this.scrollbarWidth}px`; // *****************************************
    this.header.style.paddingRight = `${this.scrollbarWidth}px`; // *****************************************
    this.footer.style.paddingRight = `${this.scrollbarWidth}px`; // *****************************************

    this.html.classList.add('modalOpen');
  }

  showSuccess() {
    this.hide();
    // eslint-disable-next-line prefer-arrow-callback
    let timeout = setTimeout(function () {
      window.globalModal.show('success'); // показать модальное окно "успех"
    }, 300);

    // очистить поля
    window.globalFluids.clean(this.modal);
    if (this.modal2) {
      window.globalFluids.clean(this.modal2);
    }

    // window.globalButtonLoader.removeProcessingAll();
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
    if (this.modal2) {
      this.modal2.classList.remove('modal_active');
    }

    // удалить hash из адресной строки без перезагрузки страницы
    history.pushState('', document.title, window.location.pathname);
    enableBodyScroll(this.modal);

    if (this.modal2) {
      enableBodyScroll(this.modal2);
    }

    setTimeout(() => {
      const tab = document.querySelector('.modal__tab_active');
      if (tab) {
        tab.classList.remove('modal__tab_active');
        for (let i = 0; i < this.content.length; i++) {
          this.content[i].classList.remove('modal__content_large', 'modal__content_licenses', 'modal__content_search');
        }
      }
    }, 300);

    setTimeout(() => {
      this.main.style.paddingRight = ''; // убрать отступ (он был размерос с ширину скроллбара)
      this.header.style.paddingRight = ''; // убрать отступ (он был размерос с ширину скроллбара)
      this.footer.style.paddingRight = ''; // убрать отступ (он был размерос с ширину скроллбара)

      this.html.classList.remove('modalOpen');
    }, 100);
  }
}

/*
 * window.globalModal.show(id);
 * window.globalModal.hide();
 * window.globalModal.showSuccess();
 */