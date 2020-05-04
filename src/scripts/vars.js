// Разрешения экрана
export const screen = {
  ssm: 400,
  sm: 575,
  md: 767,
  lg: 1023,
  xl: 1279
};

// Классы, используемые в скриптах (стилевые)
export const cssClasses = {
  decorShow: 'show-slow',
  decorHide: 'hide-slow',
  activeElem: 'active',
  showElem: 'show',
  hideElem: 'hide',
  disableElem: 'disable',
  progress: 'in-progress',
  correct: 'correct',
  sticky: 'sticky',
  fullWidth: 'full-width',
  glow: 'glow',
};

// Классы для bootstrap
export const bootstrapClasses = {
  container: 'container',
  containerFluid: 'container-fluid'
};

// Стандартные значения
export const defaultArguments = {
  animationSpeed: 300,
  scrollSpeed: 300,
  headerInitSetTimeout: 400,
  // anhorScrollTopOffset: 120,
  // anhorScrollTopOffset: 140,
  anhorScrollTopOffset: 154,
  headerHeight: 84,

  // specifyCity
  specifyCityTimeShow: 5000,

  // продолжительность анимации easing
  easingDuration: 400
};

// Классы js-*, используемые в скриптах
export const jsClasses = {
  header: 'js-header',
  input: 'js-input',
  subpageSlider: 'js-subpage-slider',

  scrollUp: 'js-scroll-up',

  stepBtn: 'js-search-step',

  faqItemText: 'js-faq-item-text',

  // answer-question
  answerQuestion: 'js-answer-question',
  answerQuestionForm: 'js-answer-question-form',
  answerQuestionSuccess: 'js-answer-question-success',

  // cost-calc
  costCalcBlock: 'js-cost-calc-block',
  costCalc: 'js-cost-calc',

  // Sort input
  inputReset: 'js-search-reset',
  inputSearchStart: 'js-start-search',

  sortItem: 'js-sort-item',
  sortContent: 'js-sort-content',

  // SpecifyCity
  specifyCity: 'js-specify-city',
  specifyCityOverlay: 'js-specify-overlay',
  specifyCityBtnProgress: 'js-btn-progress',
  specifyCityChooseAnother: 'js-specify-link',

  // step form
  stepForm: 'js-step-form',
  stepNewsletter: 'js-newsletter-step',
  stepNext: 'js-form-step',
  stepResults: 'js-search-results',

  // loaderBlock
  loaderBlock: 'js-loader-block',

  // verification-form
  verificationForm: 'js-verification-form',

  // partner-verification
  partnerFound: 'js-partner-found',
  partnerNotFound: 'js-partner-not-found',

  // js-nav-responses
  navResponses: 'js-nav-responses',
  // navResponsesSticky: 'js-nav-responses-sticky-point',
  navResponsesAnchorBlock: 'js-answer-card',

  // поиск по сайту
  searchOfSiteResults: 'js-search-of-site-results',
  searchOfSiteShowAll: 'js-modal-search-show-all',
  searchOfSiteSearchList: 'js-modal-search-list',

  searchBox: 'js-search-box',
};

export const dataAttributes = {
  pageSwitch: 'data-subpage-switch',

  required: 'data-rule-required',
  minlength: 'data-rule-minlength',
  maxlength: 'data-rule-maxlength',

  email: 'data-rule-email',

  tel: 'data-rule-tel',
  mask: 'data-mask',
  regexpTel: 'data-regexp-tel',
  regexpName: 'data-regexp-name',

  msg: 'data-msg',
  msgTel: 'data-msg-tel',
  msgRequired: 'data-msg-required',
  msgMinlength: 'data-msg-minlength',
  msgMaxlength: 'data-msg-maxlength',
  msgEmail: 'data-msg-email',
  msgName: 'data-msg-name'
};

export const ids = {
  sortInput: 'SORT_ITEMS_INPUT'
};

export const valueForValidate = {

};