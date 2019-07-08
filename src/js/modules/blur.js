const $ = require('jquery');

const blur = (() => {
  const reviews = $(".reviews");
  const flag = Boolean(reviews.length);
  const feedbackBg = reviews.find(".feedback__bg")

  return {
    flag,
    set: function() {
      const position = reviews.offset().top - feedbackBg.offset().top;
      feedbackBg.css({
        "background-position": "center " + position + "px"
      })
    }
  };
})();

module.exports = () => {
  if (!blur.flag) return null;

  $(document).ready(() => {
    blur.set();

    $(window).on('resize', () => {
      blur.set();
    })  
  })
};