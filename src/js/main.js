const $ = require('jquery');
const axios = require('axios');

const preloader = require('./modules/preloader');
const blur = require('./modules/blur');
const auth = require('./modules/auth');
const mainMenu = require('./modules/mainMenu');
const mouseParallax = require('./modules/mouseParallax');
const scrollParallax = require('./modules/scrollParallax');
const sidebar = require('./modules/sidebar');
const slider = require('./modules/slider');
const goButton = require('./modules/goButtons');
const gmap = require('./modules/gmap');
const wow = require('./modules/wow');
const blog = require('./modules/blog');
const sidebarActiveClass = require('./modules/sidebarActiveClass');
const sidebarTransition = require('./modules/sidebarTransition');
const validation = require('./modules/validation');
const tabs = require('./modules/tabs');

preloader();
auth();
blur();
mainMenu();
mouseParallax();
scrollParallax();
sidebar();
slider();
goButton();
gmap();
wow();
blog();
sidebarActiveClass();
sidebarTransition();
validation(); 
tabs();

// var inputs = labels.find('.login__input');

// inputs.focus(function(e) {
//   $(this).addClass('login__input--focus');
//   $(this).parent('.login__label').addClass('focus');
// });

// inputs.blur(function(e) {
//   $(this).parent('.login__label').removeClass('focus');
// });
