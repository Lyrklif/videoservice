'use strict';

// your code here
import './jquery-global.js'; // jquery
import 'lazysizes'; // ленивая загрузка изображений
import 'jquery-ajax'; // jquery-ajax
import 'slick-carousel'; // slick-slider (слайдер)
import 'clampify'; // скрытие длинного текста
import 'jquery-validation'; // jQuery validation plugin
import 'jquery-mask-plugin'; // маска для input
import 'jquery.scrollbar'; // jquery.scrollbar

import '../modules/identify-device/identify-device.js'; // проверка на сенсорное устройство
import AddressesMap from '../modules/addresses-map/addresses-map.js'; // настройки карты, параметры берутся из атрибутов
import Header from '../modules/header/header'; // настройка появления/скрытия header при скролле
import MainSlider from '../modules/main-slider/main-slider'; // слайдер на главной странице
import MainBanner from '../modules/main-banner/main-banner'; // главный баннер
import SpecifyCity from '../modules/specify-city/specify-city'; // окошко для смена города
import SubpageSlider from '../modules/subpage-slider/subpage-slider'; // слайдер подстраниц на 03. ЭЦП для торгов
import SpoilerCard from '../modules/spoiler-card/spoiler-card'; // карточки, у которых часть текста скрыта
import FAQ_Item from '../modules/faq-item/faq-item';

import Input from '../modules/input/input'; // при вводе текста в input placeholder поднимается
import '../modules/input/input-mask.js'; // маска для input
import '../modules/input/input-validate.js'; // валидация форм, проверка input на валидность
import '../modules/input/input-clean.js'; // очищать поля input и textarea

import '../modules/answer-question/answer-question.js'; // показать/скрыть форму/блок успеха
import '../modules/cost-calc/cost-calc.js'; // показать/скрыть форму/блок успеха
import '../modules/consultation-form/consultation-success.js'; // consultation-form
import CitiesFilter from '../modules/modal-city/modal-city.js'; // фильтрация городов при вводе названия
import LicensesSlider from '../modules/licenses-slider/licenses-slider.js'; // слайдер лицензий
import Anchor from '../modules/anchor/anchor.js'; // якорные ссылки
import FAQ from '../modules/faq/faq.js'; // раскрывающиеся блоки (спойлеры) в Часто задаваемых вопросах
import ButtonLoader from '../modules/btn-loader/btn-loader.js'; // btn-loader
// import '../modules/lazy-loading/lazy-loading.js'; // ленивая загрузка некоторых изображений
import Region from '../modules/region/region.js'; // блок с выбором региона
import SearchSteps from '../modules/search-steps/search-steps'; // Параметры поиска госзакупок
import SortItems from '../modules/sort-items/sort-items'; // сортировка faq
import ArrowUp from '../modules/arrow-up/arrow-up.js'; // Кнопка наверх
import PartnerVerification from '../modules/partner-verification/partner-verification.js'; // Проверка партнёра по ИНН
import LoaderBlock from '../modules/loader-block/loader-block.js'; // Блок загрузки
import NavResponses from '../modules/nav-responses/nav-responses.js'; // прилипающий навигационный блок
import SearchOfSite from '../modules/modal-search/modal-search.js'; // modal поиска по сайту

import '@babel/polyfill';
import cssVars from 'css-vars-ponyfill';
import detection from 'sa-polyfills/build/sa-detection';
import Icon from '../modules/icon/icon';
import Burger from '../modules/burger/burger';
import Modal from '../modules/modal/modal';
import Scrollbar from '../modules/scroll/scroll';
import Instructions from '../modules/instructions/instructions';
import PartnersCarousel from '../modules/partners-carousel/partners-carousel';
import VerificationForm from '../modules/verification-form/verification-form';
import ConsultationForm from '../modules/consultation-form/consultation-form';

if (detection.isIE10Plus()) {
  cssVars({
    onlyVars: true
  });
}

new Icon();

new MainSlider();
new MainBanner();
window.globalHeader = new Header();
window.globalSubpageSlider = new SubpageSlider();
window.globalSpecifyCity = new SpecifyCity();
new SpoilerCard();
new FAQ_Item();
new Input();
new Scrollbar();
new Instructions();
new PartnersCarousel();
new Burger();
new ConsultationForm();

window.globalModal = new Modal();
new CitiesFilter();
new LicensesSlider();
new Anchor();
new FAQ();
window.globalButtonLoader = new ButtonLoader();
window.globalRegion = new Region();
window.globalSearchSteps = new SearchSteps();
new SortItems();
new ArrowUp();
window.globalVerificationForm = new VerificationForm();
window.globalPartnerVerification = new PartnerVerification();
window.globalLoaderBlock = new LoaderBlock();
new NavResponses();
window.globalSearchOfSite = new SearchOfSite();
window.globalAddressesMap = new AddressesMap();