'use strict';

import { url, imgSrc } from '../../api/themoviedb';
import getRandomNumbers from '../../functions/getRandomNumbers';

// Актуальные данные по фильмам
export default class Films {
  constructor() {
    this.films = document.querySelector('.js-films-list');

    if (this.films) {
      this.title = [ ...document.querySelectorAll('.js-film-title') ];
      this.desc = [ ...document.querySelectorAll('.js-film-desc') ];
      this.img = [ ...document.querySelectorAll('.js-film-img') ];

      this.init();
    }
  }

  init() {
    fetch(url).then(value => value.json()).then(result => {
      console.log('films => success', result.results);
      this.setInfo(result.results);
    }).catch(err => {
      console.log('films => err', err);
    });
  }

  setInfo(data) {
    const filmsApiCount = this.films.children.length;
    const cardCounts = getRandomNumbers(filmsApiCount, 0, data.length - 1);

    for (let i = 0; i < filmsApiCount; i++) {
      const title = data[cardCounts[i]].title || data[cardCounts[i]].name; // Название фильма
      const desc = data[cardCounts[i]].overview; // Описание
      const img = data[cardCounts[i]].backdrop_path; // Постер

      this.title[i].innerHTML = title;
      this.desc[i].innerHTML = desc;
      this.img[i].src = imgSrc + img;
      this.img[i].srcset = imgSrc + img;
    }

    window.globalFilm.init();
  }
}