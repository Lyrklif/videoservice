'use strict';

export default class Checkbox {
  constructor() {
    this.checkboxes = document.querySelectorAll('.js-checkbox');

    if (this.checkboxes.length) {
      this.simulateClick();
    }
  }

  // симулировать клик при нажатии на Enter когда label.js-checkbox в фокусе
  simulateClick() {
    for (let i = 0; i < this.checkboxes.length; i++) {
      this.checkboxes[i].addEventListener('keydown', e => {
        if (e.key === 'Enter') {
          this.checkboxes[i].click();
        }
      });
    }
  }
}