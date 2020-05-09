'use strict';

// validation
import Pristine from '../../../node_modules/pristinejs/dist/pristine';

export default class Form {
  constructor() {
    this.forms = document.querySelectorAll('form');

    if (this.forms.length) {
      this.validate();
    }
  }

  validate() {
    const param = {
      classTo: 'input',
      errorClass: 'input_error',
      successClass: 'input_success',
      errorTextParent: 'input',
      errorTextTag: 'span',
      errorTextClass: 'input__error-text'
    };

    for (let i = 0; i < this.forms.length; i++) {
      const pristine = new Pristine(this.forms[i], param);

      this.forms[i].addEventListener('submit', e => {
        e.preventDefault();
        let valid = pristine.validate();
      });
    }
  }
}