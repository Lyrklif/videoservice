'use strict';

// getRandomNumbers

import randomInteger from './randomInteger';

const checkNumber = (arr, number) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === number) return false;
  }

  return true;
};

const getRandomNumbers = (length, min = 0, max = 100) => {
  const arr = [];

  for (let i = 0; i < length; i++) {
    const number = randomInteger(min, max);

    if (checkNumber(arr, number)) arr.push(number);
    else --i;
  }

  return arr;
};

export default getRandomNumbers;