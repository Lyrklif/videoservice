'use strict';

// якорные ссылки


import {
  jsClasses,
  dataAttributes,
  cssClasses,
  defaultArguments
} from '../../scripts/vars.js'; // переменные

// import scrollHeader from '../header/header';

// *** ПЛАВНЫЙ ПЕРЕХОД К ЯКОРНОЙ ССЫЛКЕ

export default class Anchor {
  constructor() {
    window.addEventListener('load', () => {
      // ссылки, в href которых есть символ #, нет атрибутов data-modal и data-subpage, а также сам href не состоит из одного только #
      this.anchors = [].slice.call(document.querySelectorAll('a[href*="#"]:not([data-modal]):not([href="#"])'));

      if (this.anchors) {
        this.events();
        this.hash();
      }
    });
  }

  events() {
    const anchorsJQ = $(this.anchors);

    anchorsJQ.click(function () {
      // window.globalHeader.hideHeader(); //  скрыть header
      // window.globalHeader.scrollRemove(); // отключить показ/скрытие header
      // window.globalHeader.partHeaderHide(); //  скрыть часть header
      // window.globalHeader.partHeaderToggleRemove(); //  отключить показ/скрытие части header

      // забираем идентификатор бока с атрибута href
      let href = $(this).attr('href');
      let id = href.split('#')[1];

      // скролл к элементу на странице,если элемент существует
      if (document.querySelector(`#${id}`)) {
        // e.preventDefault(); // выключено из-за слайдера на стр. "ЭПЦ для торгов"
        let top = $(`#${id}`).offset().top - defaultArguments.anhorScrollTopOffset;

        // анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({
          scrollTop: top
        }, defaultArguments.scrollSpeed);
      }

      setTimeout(() => {
        // window.globalHeader.scrollInit(); // включить показ/скрытие header
        // window.globalHeader.partHeaderToggleInit(); // включить показ/скрытие части header
      }, defaultArguments.headerInitSetTimeout);
    });
  }

  // скролл к элементу на странице
  scrollToAchor(id) {
    // узнаем высоту от начала страницы до блока на который ссылается якорь
    let top = $(`#${id}`).offset().top - defaultArguments.anhorScrollTopOffset;

    // анимируем переход на расстояние - top за 1500 мс
    $('body,html').animate({
      scrollTop: top
    }, defaultArguments.scrollSpeed);
  }

  hash() {
    let hash = window.location.hash.substring(1);

    if (hash) {
      this.modal = document.getElementById('modal');
      this.modal2 = document.getElementById('modal2');

      let noModal = false;

      // если этот id не относится к modal
      if (!(this.modal.querySelector(`#${hash}`))) {
        noModal = true;
      } else {
        noModal = false;
      }

      // если этот id не относится к modal2
      if (this.modal2) {
        if (!(this.modal2.querySelector(`#${hash}`))) {
          noModal = true;
        } else {
          noModal = false;
        }
      }

      // если этот id не относится к модальным окнам
      if (noModal) {
        window.scroll(0, 0);
        let id = hash;

        // если на странице есть элкмент с таким id
        if (document.querySelector(`#${id}`)) {
          this.scrollToAchor(id);
        }
      }
    }
  }
}