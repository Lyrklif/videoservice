'use strict';

import { url, imgSrc } from '../../api/themoviedb';
import getRandomNumbers from '../../functions/getRandomNumbers';

// Актуальные данные по фильмам
export default class Films {
  constructor() {
    this.films = document.querySelector('.js-films-list');

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
    const filmCount = this.films.children.length;
    const counts = getRandomNumbers(filmCount, 0, data.length - 1);

    for (let i = 0; i < filmCount; i++) {
      const title = data[counts[i]].title || data[counts[i]].name; // Название фильма
      const desc = data[counts[i]].overview; // Описание
      const img = data[counts[i]].backdrop_path; // Постер

      this.title[i].innerHTML = title;
      this.desc[i].innerHTML = desc;
      this.img[i].src = imgSrc + img;
      this.img[i].srcset = imgSrc + img;
    }
  }
}