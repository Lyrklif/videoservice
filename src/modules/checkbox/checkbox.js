'use strict';

import simulateClick from '../../functions/simulateClick';

export default class Checkbox {
  constructor() {
    this.checkboxes = document.querySelectorAll('.js-checkbox');

    if (this.checkboxes.length) {
      this.simulateClickCheckbox();
    }
  }

  // симулировать клик при нажатии на Enter когда label.js-checkbox в фокусе
  simulateClickCheckbox() {
    for (let i = 0; i < this.checkboxes.length; i++) {
      simulateClick(this.checkboxes[i]);
    }
  }
}