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
  let arr = [];

  for (let i = 0; i < length; i++) {
    let number = randomInteger(min, max);

    if (checkNumber(arr, number)) arr.push(number);
    else --i;
  }

  return arr;
};

export default getRandomNumbers;