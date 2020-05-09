'use strict';

import 'lazysizes'; // ленивая загрузка изображений
import 'clampify'; // скрытие длинного текста
import 'simplebar';

import Icon from '../modules/icon/icon';
import Burger from '../modules/burger/burger';
import Modal from '../modules/modal/modal';
import Form from '../modules/form/form';
import Film from '../modules/film/film';
import Checkbox from '../modules/checkbox/checkbox'; // checkbox
import Tabs from '../modules/tabs/tabs'; // при вводе текста в input placeholder поднимается
import Channels from '../modules/channels/channels'; // channels
import SiteAuthorize from '../modules/site-authorize/site-authorize'; // site-authorize

import '@babel/polyfill';
import cssVars from 'css-vars-ponyfill';
import detection from 'sa-polyfills/build/sa-detection';

if (detection.isIE10Plus()) {
  cssVars({
    onlyVars: true
  });
}

window.addEventListener('load', () => {
  new Icon();
  new Burger();
  new Form();
  new Checkbox();
  window.globalModal = new Modal();
  window.globalTabs = new Tabs();
  new Film();
  new Channels();
  new SiteAuthorize();
});