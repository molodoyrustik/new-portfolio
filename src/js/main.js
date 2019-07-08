const $ = require('jquery');

const preloader = require('./modules/preloader');
const blur = require('./modules/blur');
const auth = require('./modules/auth');
const mainMenu = require('./modules/mainMenu');
const mouseParallax = require('./modules/mouseParallax');
const scrollParallax = require('./modules/scrollParallax');
const sidebar = require('./modules/sidebar');
const slider = require('./modules/slider');

preloader();
auth();
blur();
mainMenu();
mouseParallax();
scrollParallax();
sidebar();

var Controls = require('./modules/controls');
var Display = require('./modules/display');
var Description = require('./modules/description');
var App = require('./modules/app');

const controls = new Controls({
  element: $('.slider__controls')
})

const display = new Display({
  element: $('.slider__display')
})

const description = new Description({
  element: $('.slider__desk')
})

const app = new App({
  controls,
  description,
  display
});