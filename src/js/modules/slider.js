const $ = require('jquery');
const title = require('./title');

title();

module.exports = () => {
    var duration = 300,
    inProcess = false;

  function moveSlide(container, direction, type) {
    var items = $('.slider__controls-photo', container);
    var direction = direction == 'down' ? 100 : -100;
    var activeItem = items.filter('.active');

    var counter = activeItem.index() + 1;
    if (counter >= items.length) counter = 0;

    if (type === 'prev') {
      counter = activeItem.index() - 1;

      if (counter < 0) counter = items.length - 1;
    }

    var reqItem = items.eq(counter);

    activeItem.animate({
      'top': direction + '%'
    }, duration);

    reqItem.animate({
      'top': 0
    }, duration, function () {
      activeItem.removeClass('active')
        .css('visibility', 'hidden')
        .css('top', -1 * direction + '%')
        .css('visibility', 'visible');

      $(this).addClass('active');

      inProcess = false;
    });
  }

  function moveWork(container, type) {
    var items = $('.slider__display-inner', container);
    var activeItem = items.filter('.active');
    var workCounter = activeItem.index() + 1;

    if (workCounter >= items.length) workCounter = 0;

    if (type === 'prev') {
      workCounter = activeItem.index() - 1;

      if (workCounter < 0) workCounter = items.length - 1;
    }

    var reqItem = items.eq(workCounter);

    activeItem.removeClass('active')
    reqItem.addClass('active')
    inProcess = true;
  }


  
  function moveDesk(container, type) {
    var items = $('.slider__desk-wrapper', container);
    var activeItem = items.filter('.active');
    var workCounter = activeItem.index() + 1;

    if (workCounter >= items.length) workCounter = 0;

    if (type === 'prev') {
      workCounter = activeItem.index() - 1;

      if (workCounter < 0) workCounter = items.length - 1;
    }

    var reqItem = items.eq(workCounter);

    activeItem.removeClass('active')
    reqItem.addClass('active')

    inProcess = true;
  }

  

  $('.slider__controls-item--next').on('click', (e) => {
    e.preventDefault();

    if (!inProcess) {
      inProcess = true;
      moveSlide($('.slider__controls-item--prev'), 'down');
      moveSlide($('.slider__controls-item--next'), 'up');
      moveWork($('.slider__display'));
      moveDesk($('.slider__desk'))
    }
  });

  $('.slider__controls-item--prev').on('click', (e) => {
    e.preventDefault();
    if (!inProcess) {
      inProcess = true;
      moveSlide($('.slider__controls-item--prev'), 'down', 'prev');
      moveSlide($('.slider__controls-item--next'), 'up', 'prev');
      moveWork($('.slider__display'), 'prev');
      moveDesk($('.slider__desk'), 'prev')
    }
  });

}