var $ = require('jquery');
var sidebarTransition = require('./sidebarTransition');

function init() {
  if ($(window).width() >= 1200) {
    var wScroll = $(window).scrollTop();
    var menu = $('.blog-page__static .sidebar__list');
    var sidebar = $('.blog-page__static .sidebar');
    var stickyStart = sidebar.offset().top;
    var menuClone = sidebar.clone();
    var fixedSidebar = $('.blog-page__fixed .blog-page__left');
  
    if (wScroll >= stickyStart) {
      if (!fixedSidebar.find('.sidebar').length) {
        fixedSidebar.append(menuClone);
        menu.hide();
        sidebarTransition();
      }
    } else {
      fixedSidebar.find('.sidebar').remove();
      menu.show();
    }
  } 
}

module.exports = () => {
  $(document).ready(() => {
    if($('.blog-page').length) {
      init();
      $(window).scroll(function() {
        init()
      });
    }
  })
}