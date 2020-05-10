'use strict';

export default class Film {
  constructor() {
    this.text = document.querySelectorAll('.js-film-desc');

    if (this.text.length) {
      this.init();
    }
  }

  init() {
    const options = {
      maxLines: 18
    };

    for (let i = 0; i < this.text.length; i++) {
      $clampify(this.text[i], options);
    }
  }
}