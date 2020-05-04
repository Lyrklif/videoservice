'use strict';

// your code here
import './jquery-global.js'; // jquery
import 'lazysizes'; // ленивая загрузка изображений
import 'clampify'; // скрытие длинного текста
import 'jquery.scrollbar'; // jquery.scrollbar

import Header from '../modules/header/header'; // настройка появления/скрытия header при скролле
import Input from '../modules/input/input'; // при вводе текста в input placeholder поднимается

import '@babel/polyfill';
import cssVars from 'css-vars-ponyfill';
import detection from 'sa-polyfills/build/sa-detection';
import Icon from '../modules/icon/icon';
import Burger from '../modules/burger/burger';
import Modal from '../modules/modal/modal';

if (detection.isIE10Plus()) {
  cssVars({
    onlyVars: true
  });
}

new Icon();
new Header();
new Scrollbar();
new Burger();
new Input();
window.globalModal = new Modal();