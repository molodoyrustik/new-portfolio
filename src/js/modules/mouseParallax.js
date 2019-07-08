module.exports = () => {
  if(document.querySelector('.mouse-parallax')) {
    var parallaxContainer = document.querySelector('.mouse-parallax'),
    layers = parallaxContainer.children;

    var moveLayers = function (e) {
      var initialX = (window.innerWidth / 2) - e.pageX
        initialY = (window.innerHeight / 2) - e.pageY;

      [].slice.call(layers).forEach(function (layer, i) {
        var
          divider = i / 100, 
          positionX = initialX * divider,
          positionY = initialY * divider,
          bottomPosition = (window.innerHeight / 2) * divider,
          layerStyle = layer.style,
          transformString = 'translate3d(' + positionX + 'px ,' + positionY + 'px , 0)';

        layerStyle.transform = transformString;
        layerStyle.bottom = `-${bottomPosition}px`;
      });
    }

    window.addEventListener('mousemove', moveLayers);
  }
}