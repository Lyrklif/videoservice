'use strict';

// randomInteger
export default function (min, max) {
  const number = min - 0.5 + Math.random() * (max - min + 1);

  return Math.round(number);
}