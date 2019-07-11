const $ = require('jquery');

var Controls = require('./controls');
var Display = require('./display');
var Description = require('./description');
var App = require('./app');

const controls = new Controls({
  element: $('.slider__controls')
})

const display = new Display({
  element: $('.slider__display')
})

const description = new Description({
  element: $('.slider__desk')
})

module.exports = () => {
  const app = new App({
    controls,
    description,
    display
  });
  return app;
}