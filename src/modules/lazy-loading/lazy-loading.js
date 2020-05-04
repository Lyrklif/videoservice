'use strict';

// lazy-loading

window.addEventListener('load', () => {
  setTimeout(() => {
    [].forEach.call(document.querySelectorAll('img[data-src]'), img => {
      img.setAttribute('src', img.getAttribute('data-src'));
      img.onload = function () {
        img.removeAttribute('data-src');
      };
    });
  }, 1000);
});