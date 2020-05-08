'use strict';

// your code here
import 'lazysizes'; // ленивая загрузка изображений
import 'clampify'; // скрытие длинного текста
import 'simplebar';

import '@babel/polyfill';
import cssVars from 'css-vars-ponyfill';
import detection from 'sa-polyfills/build/sa-detection';
import Icon from '../modules/icon/icon';
import Burger from '../modules/burger/burger';
import Modal from '../modules/modal/modal';
import Film from '../modules/film/film';
import Header from '../modules/header/header'; // настройка появления/скрытия header при скролле
import Input from '../modules/input/input'; // при вводе текста в input placeholder поднимается
import Checkbox from '../modules/checkbox/checkbox'; // checkbox
import Tabs from '../modules/tabs/tabs'; // при вводе текста в input placeholder поднимается
import Channels from '../modules/channels/channels'; // channels

if (detection.isIE10Plus()) {
  cssVars({
    onlyVars: true
  });
}

window.addEventListener('load', () => {
  new Icon();
  new Header();
  new Burger();
  new Input();
  new Checkbox();
  window.globalModal = new Modal();
  window.globalTabs = new Tabs();
  new Film();
  new Channels();
});