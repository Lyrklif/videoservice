'use strict';

import { url, imgSrc } from '../../api/themoviedb';

// Актуальные данные по фильмам
export default class Films {
  constructor() {
    this.films = document.querySelector('.js-api-films');

    if (this.films) {
      this.title = [...document.querySelectorAll('.js-film-title')];
      this.desc = [...document.querySelectorAll('.js-film-desc')];
      this.img = [...document.querySelectorAll('.js-film-img')];

      this.init();
    }
  }

  init() {
    fetch(url).then(value => {
      return value.json();
    }).then(result => {
      console.log('films => success', result.results);

      this.setInfo(result.results);
    }).catch(err => {
      console.log('films => err', err);
    });
  }

  setInfo(data) {
    for (let i = 0; i < data.length; i++) {
      const title = data[i].title; // Название фильма
      const desc = data[i].overview; // Описание
      const img = data[i].backdrop_path; // Постер

      this.title[i].innerHTML = title;
      this.desc[i].innerHTML = desc;
      this.img[i].src = imgSrc + img;
      this.img[i].srcset = imgSrc + img;
    }
  }
}