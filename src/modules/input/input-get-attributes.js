'use strict';

/*
 * ************************************
 * *** получить атрибуты полей
 * ************************************
 */

// возвращает аттрибуты поля input tel
export const getAttrTel = () => {
  const input = document.querySelector('input[name="tel"]');
  let data;

  if (input) {
    data = {
      rules: {
        regexpTel: input.dataset.regexpTel, // регулярное выражение
        mask: input.dataset.mask, // маска для tel
        maxlength: input.dataset.ruleMaxlength, // max символов
        minlength: input.dataset.ruleMinlength // min символов
      },
      messages: {
        msgTel: input.dataset.msgTel, // msg для tel
        msg: input.dataset.msg // msg основной
      }
    };
  }

  return data;
};

// возвращает аттрибуты поля input tel
export const getAttrKeyword = () => {
  const input = document.querySelector('input[name="keyword"]');
  let data;

  if (input) {
    data = {
      rules: {
        regexpName: input.dataset.regexpName, // регулярное выражение
        maxlength: input.dataset.ruleMaxlength, // max символов
        minlength: input.dataset.ruleMinlength // min символов
      },
      messages: {
        msg: input.dataset.msg // msg основной
      }
    };
  }

  return data;
};

// возвращает аттрибуты поля input tel
export const getAttrInterval = () => {
  const input = document.querySelector('input[name="interval"]');
  let data;

  if (input) {
    data = {
      rules: {
        regexpInterval: input.dataset.regexpInterval, // регулярное выражение
        maxlength: input.dataset.ruleMaxlength, // max символов
        minlength: input.dataset.ruleMinlength // min символов
      },
      messages: {
        msg: input.dataset.msg // msg основной
      }
    };
  }

  return data;
};

// возвращает аттрибуты поля input email
export const getAttrEmail = () => {
  const input = document.querySelector('input[name="email"]');
  let data;

  if (input) {
    data = {
      rules: {
        email: input.dataset.ruleEmail, // email?
        maxlength: input.dataset.ruleMaxlength, // max символов
        minlength: input.dataset.ruleMinlength // min символов
      },
      messages: {
        msgEmail: input.dataset.msgEmail // msg для email
      }
    };
  }

  return data;
};

// возвращает аттрибуты поля input name
export const getAttrName = () => {
  const input = document.querySelector('input[name="name"]');
  let data;

  if (input) {
    data = {
      rules: {
        regexpName: input.dataset.regexpName, // регулярное выражение
        maxlength: input.dataset.ruleMaxlength, // max символов
        minlength: input.dataset.ruleMinlength // min символов
      }
    };
  }

  return data;
};

// возвращает аттрибуты delivery_address
export const getAttrAddress = () => {
  const input = document.querySelector('input[name="delivery_address"]');
  let data;

  if (input) {
    data = {
      rules: {
        // required: input.dataset.ruleRequired, // обязательное поле?
        maxlength: input.dataset.ruleMaxlength, // max символов
        minlength: input.dataset.ruleMinlength // min символов
      },
      messages: {
        msg: input.dataset.msg, // msg основной
        msgRequired: input.dataset.msgRequired, // msg для обязательного поля
        msgMinlength: input.dataset.msgMinlength, // msg для min символов
        msgMaxlength: input.dataset.msgMaxlength // msg для max символов
      }
    };
  }

  return data;
};

// возвращает аттрибуты стандартного поля input
export const getAttrCity = () => {
  const input = document.querySelector('input[name="name_city"]');
  let data;

  if (input) {
    data = {
      rules: {
        // required: input.dataset.ruleRequired, // обязательное поле?
        maxlength: input.dataset.ruleMaxlength, // max символов
        minlength: input.dataset.ruleMinlength // min символов
      },
      messages: {
        msg: input.dataset.msg, // msg основной
        msgRequired: input.dataset.msgRequired, // msg для обязательного поля
        msgMinlength: input.dataset.msgMinlength, // msg для min символов
        msgMaxlength: input.dataset.msgMaxlength // msg для max символов
      }
    };
  }

  return data;
};