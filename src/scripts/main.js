'use strict';

import 'lazysizes'; // ленивая загрузка изображений
import 'clampify'; // скрытие длинного текста
import 'simplebar'; // кастомизация скроллбара

import Icon from '../modules/icon/icon'; // svg icon
import Burger from '../modules/burger/burger'; // burger menu
import Modal from '../modules/modal/modal'; // модальные окна
import Film from '../modules/film/film'; // карточка фильма
import Checkbox from '../modules/checkbox/checkbox'; // checkbox
import Tabs from '../modules/tabs/tabs'; // вкладки
import SiteAuthorize from '../modules/site-authorize/site-authorize'; // авторизация
import ModalAuthorize from '../modules/modal-authorize/modal-authorize'; // модалка аворизации
import Films from '../modules/films/films'; // фильмы
import BtnSignOut from '../modules/btn-sign-out/btn-sign-out'; // sign-out

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
  new Checkbox();
  window.globalModal = new Modal();
  window.globalTabs = new Tabs();
  window.globalFilm = new Film();
  window.globalSiteAuthorize = new SiteAuthorize();
  new ModalAuthorize();
  new Films();
  new BtnSignOut();
});