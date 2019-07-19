const $ = require('jquery');
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
const tabs = require('./modules/tabs');

// const authForm = require('./net/authForm');
// const worksNet = require('./net/works');

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
tabs();

// authForm();


