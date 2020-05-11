'use strict';

import { cssClasses } from '../scripts/vars';

// show

const show = elem => {
  elem.classList.add(cssClasses.showElem);
};

export default show;