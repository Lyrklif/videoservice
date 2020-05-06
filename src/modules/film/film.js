'use strict';

export default class Film {
  constructor() {
    this.text = document.querySelectorAll('.js-film-text');

    if (this.text.length) {
      this.init();
    }
  }

  init() {
    const options = {
      maxLines: 18
    };

    this.text.forEach(el => {
      $clampify(el, options);
    });
  }
}