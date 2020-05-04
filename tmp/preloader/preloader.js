'use strict';

function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return !!right[Symbol.hasInstance](left); } else { return left instanceof right; } }

function _classCallCheck(instance, Constructor) { if (!_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Preloader =
  /*#__PURE__*/
  function () {
    function Preloader() {
      var _this = this;

      _classCallCheck(this, Preloader);

      this.preloader = document.getElementById('preloader');
      this.html = document.querySelector('html');

      if (this.preloader) {
        this.show();
        var timer = setTimeout(function () {
          _this.hide();
        }, 10000); // скрыть preloader после загрузки страницы

        window.addEventListener('load', function () {
          clearTimeout(timer);

          _this.hide();
        });
      } else {
        document.body.classList.remove('body_hidden');
      }
    }

    _createClass(Preloader, [{
      key: "show",
      value: function show() {
        this.preloader.classList.add('preloader_active'); // disableBodyScroll(this.preloader);

        this.html.classList.add('modalOpen');
      }
    }, {
      key: "hide",
      value: function hide() {
        document.body.classList.remove('body_hidden');
        this.preloader.classList.remove('preloader_active'); // enableBodyScroll(this.preloader);

        this.html.classList.remove('modalOpen');
      }
    }]);

    return Preloader;
  }();

new Preloader();