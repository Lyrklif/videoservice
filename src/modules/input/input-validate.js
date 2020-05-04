'use strict';
/* eslint-disable no-undef */

import {
  dataAttributes, jsClasses
} from '../../scripts/vars';

import {
  modal
} from '../modal/modal';

import {
  getAttrTel,
  getAttrEmail,
  getAttrName,
  getAttrAddress,
  getAttrCity,
  getAttrKeyword,
  getAttrInterval
} from './input-get-attributes';


$(document).ready(() => {
  $('[data-form="validate"]').each((index, form) => {
    window.isValidForm = false; // глобальная переменная

    const rulesCity = getAttrCity(); // аттрибуты поля city
    const rulesTel = getAttrTel(); // аттрибуты поля tel
    const rulesEmail = getAttrEmail(); // аттрибуты поля email
    const rulesName = getAttrName(); // аттрибуты поля name
    const rulesAddress = getAttrAddress(); // аттрибуты поля address
    const rulesKeyword = getAttrKeyword(); // аттрибуты поля keyword
    const rulesInterval = getAttrInterval(); // аттрибуты поля interval
    const textarea = document.querySelector('.consultation-form__textarea');

    $(form).validate({
      debug: true,
      focusCleanup: true,
      onfocusout: false,
      success: 'valid',

      // место, где будет отображаться текст ошибки
      errorPlacement(error, element) {
        for (let i = 0; i < element.length; i++) {
          // найти родительский элемент и записать текст ошибки в последний дочерний элемент
          element[i].offsetParent.lastElementChild.textContent = error[i].textContent;
        }
      },

      // правила валидации input
      rules: {
        // правила валидации стандартного поля
        fluid: {
          required: $(this).attr(dataAttributes.required),
          maxlength: $(this).attr(dataAttributes.maxlength),
          minlength: $(this).attr(dataAttributes.minlength)
        },
        interval: {
          checkInterval: true // повторное объявление (без него не работает)
        },
        name: {
          checkName: true // повторное объявление (без него не работает)
        },
        keyword: {
          checkKeyword: true // повторное объявление (без него не работает)
        },
        tel: {
          checkTel: true // повторное объявление (без него не работает)
        },
        email: {
          checkEmail: true // повторное объявление (без него не работает)
        },
        textarea: {
          required: $(this).attr('data-rule-required')
        },
        select: {
          required: $(this).attr('data-rule-required')
        }
      }
    });

    /*
     * ************************************
     * ****** Правила для полей
     * ************************************
     */

    if (rulesName) {
      // правила валидации поля name
      $.validator.addClassRules('name', {
        required: $(this).attr(dataAttributes.required),
        maxlength: rulesName.rules.maxlength,
        minlength: rulesName.rules.minlength,
        checkName: rulesName.rules.regexpName
      });

      // Проверка имени по регулярному выражению
      $.validator.addMethod('checkName', (value, element, param) => {
        const paramFronHtml = getAttrName().rules.regexpName;
        let regexp = new RegExp(paramFronHtml);
        let isValid = regexp.test(value);

        return isValid;
      });
    }

    if (rulesKeyword) {
      // правила валидации поля name
      $.validator.addClassRules('keyword', {
        required: $(this).attr(dataAttributes.required),
        maxlength: rulesKeyword.rules.maxlength,
        minlength: rulesKeyword.rules.minlength,
        checkKeyword: rulesKeyword.rules.regexpName
      });

      // Проверка имени по регулярному выражению
      $.validator.addMethod('checkKeyword', function (value, element, param) {
        const paramFronHtml = getAttrKeyword().rules.regexpName;
        let regexp = new RegExp(paramFronHtml);
        let isValid = regexp.test(value);

        return this.optional(element) || isValid;
      });
    }

    // *** Interval
    if (rulesInterval) {
      // правила валидации поля name
      $.validator.addClassRules('interval', {
        required: $(this).attr(dataAttributes.required),
        maxlength: rulesInterval.rules.maxlength,
        minlength: rulesInterval.rules.minlength,
        checkInterval: rulesInterval.rules.regexpInterval
      });

      // Проверка имени по регулярному выражению
      $.validator.addMethod('checkInterval', function (value, element, param) {
        const paramFronHtml = getAttrInterval().rules.regexpInterval;
        let regexp = new RegExp(paramFronHtml);
        let isValid = regexp.test(value);

        return this.optional(element) || isValid;
      });
    }

    if (rulesAddress) {
      // правила валидации поля name
      $.validator.addClassRules('delivery_address', {
        required: $(this).attr(dataAttributes.required),
        maxlength: rulesAddress.rules.maxlength,
        minlength: rulesAddress.rules.minlength
      });
    }

    if (rulesTel) {
      // Проверка телефона по регулярному выражению
      $.validator.addMethod('checkTel', (value, element, param) => {
        const paramFronHtml = getAttrTel().rules.regexpTel;
        let regexp = new RegExp(paramFronHtml);
        let isValid = regexp.test(value);

        return isValid;
      });
    }

    if (rulesEmail) {
      // правила валидации поля email
      $.validator.addClassRules('email', {
        required: $(this).attr(dataAttributes.required),
        maxlength: rulesEmail.rules.maxlength,
        minlength: rulesEmail.rules.minlength,
        email: rulesEmail.rules.email,
        checkEmail: rulesName.rules.regexpEmail
      });

      // Проверка email по регулярному выражению
      $.validator.addMethod('checkEmail', (value, element, param) => {
        const paramFronHtml = element.dataset.regexpEmail;
        let regexp = new RegExp(paramFronHtml);
        let isValid = regexp.test(value);

        return isValid;
      });
    }

    if (rulesCity) {
      // правила валидации поля name_city
      $.validator.addClassRules('name_city', {
        required: $(this).attr(dataAttributes.required)
      });
    }

    /*
     * ************************************
     *  обработчик отправки данных формы
     * ************************************
     */

    // кнопка/ссылка в форме, разбитой на несколько шагов
    const stepBtn = $(form).find(`.${jsClasses.stepBtn}`);

    // если это форма, разбирая на несколько шагов
    if (stepBtn.length > 0) {
      stepBtn.click((e) => {
        e.preventDefault();

        // если данные валидны
        // if ($(form).valid()) {
        //   window.globalSearchSteps.showNextStep(); // показать следующий шаг
        // }
      });
    }

    $(form).submit(function (e) {
      e.preventDefault();

      if ($(this).valid()) {
        window.isValidForm = true;
      }

      // если все поля формы валидны
      if ($(this).valid()) {
        window.isValidForm = true;

        $.ajax({
          /*
           * your ajax options here
           * url: $(this).attr('action'),
           * type: $(this).attr('method'),
           * data: $(this).serialize(),
           */

          // в случае успешной отправки данных формы
          success(result) {
            return false;
          },

          // в случае, если данные формы НЕ отправлены
          error(jqXHR, exception) {
            window.isValidForm = false;
          }
        });
      } else {
        window.isValidForm = false;
      }
    });
  });
}); // end document.ready