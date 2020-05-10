'use strict';

const getURL = () => {
  const site = 'https://api.themoviedb.org/';
  const request = '3/trending/all/week';
  const lang = '?language=ru';
  const api = '&api_key=30bcec8f5dda885072b3eeb762fe32c3';

  // https://api.themoviedb.org/3/trending/all/week?language=ru&api_key=30bcec8f5dda885072b3eeb762fe32c3
  const url = `${site}${request}${lang}${api}`;

  return url;
};

export const url = getURL();
export const imgSrc = 'https://image.tmdb.org/t/p/w500/';