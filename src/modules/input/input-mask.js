'use strict';

import {
  getAttrTel,
  getAttrEmail,
  getAttrName,
  getAttrCity
} from './input-get-attributes';

// маска для input

$(document).ready(() => {
  // маска для поля ввода номера телефона
  const maskTel = getAttrTel().rules.mask;
  $('input[data-rule-tel="true"]').mask(maskTel, {
    autoclear: false
  });

  $('input[data-mask-money="true"]').mask('000 000 000 000 000 000', {
    autoclear: false,
    reverse: true
  });
});