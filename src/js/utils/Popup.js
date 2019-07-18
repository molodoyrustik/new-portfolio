var $ = require('jquery');

var Popups = (function () {
  var popup = $('.popup');

  return {
      close: function () {
          popup.hide();
      },

      init: function () {
          $('.popup__close, .popup__overlay').on('click', (e) => {
              e.preventDefault();
              this.close();
          })
      },

      open: function (text) {
          this.close();
          popup.find('.popup__content-inner').text(text);
          popup.fadeIn(200);
      }
  }
})();

module.exports = Popups;