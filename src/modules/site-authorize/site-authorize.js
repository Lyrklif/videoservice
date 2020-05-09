'use strict';
// site-authorize




export default class SiteAuthorize {
  constructor() {
    this.wrappers = document.querySelectorAll('.js-site-authorize');
    this.exitButtons = document.querySelectorAll('.js-sign-out');
    this.authorize = false;
  }

  authorize() {
    this.authorize = true;
  }
}