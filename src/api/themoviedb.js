'use strict';

const getURL = () => {
  const site = 'https://api.themoviedb.org/';
  const param = '3/trending/all/week';
  const lang = '?language=ru';
  const api = '30bcec8f5dda885072b3eeb762fe32c3';

  const url = `${site}${param}${lang}&api_key=${api}`;

  return url;
};

export const url = getURL();
export const imgSrc = 'https://image.tmdb.org/t/p/w500/';