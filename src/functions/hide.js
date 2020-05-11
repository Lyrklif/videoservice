'use strict';

import { cssClasses } from '../scripts/vars';

// hide

const hide = elem => {
  elem.classList.remove(cssClasses.showElem);
};

export default hide;