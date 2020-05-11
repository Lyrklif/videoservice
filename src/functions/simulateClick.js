'use strict';

// симулировать клик при нажатии на Enter когда элемент в фокусе

const simulateClick = elem => {
  elem.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
      elem.click();
    }
  });
};

export default simulateClick;