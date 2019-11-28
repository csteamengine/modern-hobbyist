(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["/js/index"],{

/***/ "./resources/js/frontend/index.js":
/*!****************************************!*\
  !*** ./resources/js/frontend/index.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var particles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! particles.js */ "./node_modules/particles.js/particles.js");
/* harmony import */ var particles_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(particles_js__WEBPACK_IMPORTED_MODULE_0__);

$(window).scroll(function () {
  // console.log($(this).scrollTop());
  updateBackground();
});

function updateBackground() {
  if ($(window).scrollTop() >= $('#about').offset().top - $('#nav').outerHeight() && $(window).scrollTop() < $('#services').offset().top - $('#nav').outerHeight()) {
    $('.fullscreen-bg').hide();
    $('.homeText').hide();
    $('#project-particles').show();
    $('footer').hide();
  } else if ($(window).scrollTop() >= $('#services').offset().top - $('#nav').outerHeight()) {
    $('.fullscreen-bg').hide();
    $('.homeText').hide();
    $('#project-particles').hide();
    $('footer').show();
  } else {
    $('.fullscreen-bg').show();
    $('.homeText').show();
    $('#project-particles').hide();
    $('footer').hide();
  }
} //made by vipul mirajkar thevipulm.appspot.com


var TxtType = function TxtType(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function () {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';
  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) {
    delta /= 2;
  }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 1000;
  }

  setTimeout(function () {
    that.tick();
  }, delta);
};

$(document).ready(function () {
  console.log("hello"); // var pattern = Trianglify({
  //     width: $(window).width(),
  //     height: $(window).height(),
  //     cell_size: 300,
  //     x_colors: ['#2B2B2B','#303335', '#3B3F41','#303335','#3B3F41','#303335','#2B2B2B'],
  //     y_colors: ['#2B2B2B','#303335', '#3B3F41','#303335','#3B3F41','#303335','#2B2B2B']
  // });
  //
  // $('.poly-background').append(pattern.canvas());

  $('.page-content').css('background-color', 'transparent');
  updateBackground();
  $('body').scrollspy();
  var elements = document.getElementsByClassName('typewrite');

  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-type');
    var period = elements[i].getAttribute('data-period');

    if (toRotate) {
      new TxtType(elements[i], JSON.parse(toRotate), period);
    }
  } // INJECT CSS


  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
  document.body.appendChild(css);
  $("#nav ul li a[href^='#']").on('click', function (e) {
    // prevent default anchor click behavior
    e.preventDefault(); // store hash

    var hash = this.hash; // animate

    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 1000, function () {
      // when done, add hash to url
      // (default click behaviour)
      window.location.hash = hash;
    });
  });
});
$(window).ready(function () {
  console.log("window");
  /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */

  particlesJS.load('project-particles', 'js/particlesjs-config.json', function () {
    console.log('callback - particles.js config loaded');
  });
  $('.project-image').each(function () {
    var imageElement = $(this);
    var image = $(this).data('image');

    if (image.length != 0) {
      var img = $('<img />').attr({
        'src': image
      }).on('load', function () {
        imageElement.attr('src', image); // imageElement.css('background', 'url("'+image+'") center center');
        // imageElement.css('background-size', 'cover');
      });
    }
  });
  $('.project-bg-image').each(function () {
    var imageElement = $(this);
    var image = $(this).data('image');

    if (image.length != 0) {
      var img = $('<img />').attr({
        'src': image
      }).on('load', function () {
        imageElement.css('background', 'url("' + image + '") center center');
        imageElement.css('background-size', 'cover');
      });
    }
  });
});
var $carousel = $('#carouselExampleIndicators');
$carousel.carousel();
var handled = false; //global variable

$carousel.bind('slide.bs.carousel', function (e) {
  var current = $(e.target).find('.carousel-item.active');
  var indx = $(current).index();
  if (indx + 2 > $('.carousel-indicators li').length) indx = -1;

  if (!handled) {
    $('.carousel-indicators li').removeClass('active');
    $('.carousel-indicators li:nth-child(' + (indx + 2) + ')').addClass('active');
  } else {
    handled = !handled; //if handled=true make it back to false to work normally.
  }
});
$(".carousel-indicators li").on('click', function () {
  //Click event for indicators
  $(this).addClass('active').siblings().removeClass('active'); //remove siblings active class and add it to current clicked item

  handled = true; //set global variable to true to identify whether indicator changing was handled or not.
});

/***/ }),

/***/ 1:
/*!**********************************************!*\
  !*** multi ./resources/js/frontend/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/gregorysteenhagen/Desktop/Projects/steamengine/resources/js/frontend/index.js */"./resources/js/frontend/index.js");


/***/ })

},[[1,"/js/manifest","/js/vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvZnJvbnRlbmQvaW5kZXguanMiXSwibmFtZXMiOlsiJCIsIndpbmRvdyIsInNjcm9sbCIsInVwZGF0ZUJhY2tncm91bmQiLCJzY3JvbGxUb3AiLCJvZmZzZXQiLCJ0b3AiLCJvdXRlckhlaWdodCIsImhpZGUiLCJzaG93IiwiVHh0VHlwZSIsImVsIiwidG9Sb3RhdGUiLCJwZXJpb2QiLCJsb29wTnVtIiwicGFyc2VJbnQiLCJ0eHQiLCJ0aWNrIiwiaXNEZWxldGluZyIsInByb3RvdHlwZSIsImkiLCJsZW5ndGgiLCJmdWxsVHh0Iiwic3Vic3RyaW5nIiwiaW5uZXJIVE1MIiwidGhhdCIsImRlbHRhIiwiTWF0aCIsInJhbmRvbSIsInNldFRpbWVvdXQiLCJkb2N1bWVudCIsInJlYWR5IiwiY29uc29sZSIsImxvZyIsImNzcyIsInNjcm9sbHNweSIsImVsZW1lbnRzIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImdldEF0dHJpYnV0ZSIsIkpTT04iLCJwYXJzZSIsImNyZWF0ZUVsZW1lbnQiLCJ0eXBlIiwiYm9keSIsImFwcGVuZENoaWxkIiwib24iLCJlIiwicHJldmVudERlZmF1bHQiLCJoYXNoIiwiYW5pbWF0ZSIsImxvY2F0aW9uIiwicGFydGljbGVzSlMiLCJsb2FkIiwiZWFjaCIsImltYWdlRWxlbWVudCIsImltYWdlIiwiZGF0YSIsImltZyIsImF0dHIiLCIkY2Fyb3VzZWwiLCJjYXJvdXNlbCIsImhhbmRsZWQiLCJiaW5kIiwiY3VycmVudCIsInRhcmdldCIsImZpbmQiLCJpbmR4IiwiaW5kZXgiLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwic2libGluZ3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBQSxDQUFDLENBQUNDLE1BQUQsQ0FBRCxDQUFVQyxNQUFWLENBQWlCLFlBQVc7QUFDeEI7QUFDQUMsa0JBQWdCO0FBQ25CLENBSEQ7O0FBS0EsU0FBU0Es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QyxDQUloQztBQUNqQixDQUxELEUiLCJmaWxlIjoiL2pzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwicGFydGljbGVzLmpzXCI7XG4kKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uKCkge1xuICAgIC8vIGNvbnNvbGUubG9nKCQodGhpcykuc2Nyb2xsVG9wKCkpO1xuICAgIHVwZGF0ZUJhY2tncm91bmQoKTtcbn0pO1xuXG5mdW5jdGlvbiB1cGRhdGVCYWNrZ3JvdW5kKCl7XG4gICAgaWYoJCh3aW5kb3cpLnNjcm9sbFRvcCgpID49ICgkKCcjYWJvdXQnKS5vZmZzZXQoKS50b3AgLSAkKCcjbmF2Jykub3V0ZXJIZWlnaHQoKSkgJiYgJCh3aW5kb3cpLnNjcm9sbFRvcCgpIDwgKCQoJyNzZXJ2aWNlcycpLm9mZnNldCgpLnRvcCAtICQoJyNuYXYnKS5vdXRlckhlaWdodCgpKSl7XG4gICAgICAgICQoJy5mdWxsc2NyZWVuLWJnJykuaGlkZSgpO1xuICAgICAgICAkKCcuaG9tZVRleHQnKS5oaWRlKCk7XG4gICAgICAgICQoJyNwcm9qZWN0LXBhcnRpY2xlcycpLnNob3coKTtcbiAgICAgICAgJCgnZm9vdGVyJykuaGlkZSgpO1xuICAgIH1lbHNlIGlmKCQod2luZG93KS5zY3JvbGxUb3AoKSA+PSAoJCgnI3NlcnZpY2VzJykub2Zmc2V0KCkudG9wIC0gJCgnI25hdicpLm91dGVySGVpZ2h0KCkpKXtcbiAgICAgICAgJCgnLmZ1bGxzY3JlZW4tYmcnKS5oaWRlKCk7XG4gICAgICAgICQoJy5ob21lVGV4dCcpLmhpZGUoKTtcbiAgICAgICAgJCgnI3Byb2plY3QtcGFydGljbGVzJykuaGlkZSgpO1xuICAgICAgICAkKCdmb290ZXInKS5zaG93KCk7XG4gICAgfWVsc2V7XG4gICAgICAgICQoJy5mdWxsc2NyZWVuLWJnJykuc2hvdygpO1xuICAgICAgICAkKCcuaG9tZVRleHQnKS5zaG93KCk7XG4gICAgICAgICQoJyNwcm9qZWN0LXBhcnRpY2xlcycpLmhpZGUoKTtcbiAgICAgICAgJCgnZm9vdGVyJykuaGlkZSgpO1xuICAgIH1cbn1cblxuLy9tYWRlIGJ5IHZpcHVsIG1pcmFqa2FyIHRoZXZpcHVsbS5hcHBzcG90LmNvbVxudmFyIFR4dFR5cGUgPSBmdW5jdGlvbihlbCwgdG9Sb3RhdGUsIHBlcmlvZCkge1xuICAgIHRoaXMudG9Sb3RhdGUgPSB0b1JvdGF0ZTtcbiAgICB0aGlzLmVsID0gZWw7XG4gICAgdGhpcy5sb29wTnVtID0gMDtcbiAgICB0aGlzLnBlcmlvZCA9IHBhcnNlSW50KHBlcmlvZCwgMTApIHx8IDIwMDA7XG4gICAgdGhpcy50eHQgPSAnJztcbiAgICB0aGlzLnRpY2soKTtcbiAgICB0aGlzLmlzRGVsZXRpbmcgPSBmYWxzZTtcbn07XG5cblR4dFR5cGUucHJvdG90eXBlLnRpY2sgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgaSA9IHRoaXMubG9vcE51bSAlIHRoaXMudG9Sb3RhdGUubGVuZ3RoO1xuICAgIHZhciBmdWxsVHh0ID0gdGhpcy50b1JvdGF0ZVtpXTtcblxuICAgIGlmICh0aGlzLmlzRGVsZXRpbmcpIHtcbiAgICAgICAgdGhpcy50eHQgPSBmdWxsVHh0LnN1YnN0cmluZygwLCB0aGlzLnR4dC5sZW5ndGggLSAxKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnR4dCA9IGZ1bGxUeHQuc3Vic3RyaW5nKDAsIHRoaXMudHh0Lmxlbmd0aCArIDEpO1xuICAgIH1cblxuICAgIHRoaXMuZWwuaW5uZXJIVE1MID0gJzxzcGFuIGNsYXNzPVwid3JhcFwiPicrdGhpcy50eHQrJzwvc3Bhbj4nO1xuXG4gICAgdmFyIHRoYXQgPSB0aGlzO1xuICAgIHZhciBkZWx0YSA9IDIwMCAtIE1hdGgucmFuZG9tKCkgKiAxMDA7XG5cbiAgICBpZiAodGhpcy5pc0RlbGV0aW5nKSB7IGRlbHRhIC89IDI7IH1cblxuICAgIGlmICghdGhpcy5pc0RlbGV0aW5nICYmIHRoaXMudHh0ID09PSBmdWxsVHh0KSB7XG4gICAgICAgIGRlbHRhID0gdGhpcy5wZXJpb2Q7XG4gICAgICAgIHRoaXMuaXNEZWxldGluZyA9IHRydWU7XG4gICAgfSBlbHNlIGlmICh0aGlzLmlzRGVsZXRpbmcgJiYgdGhpcy50eHQgPT09ICcnKSB7XG4gICAgICAgIHRoaXMuaXNEZWxldGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmxvb3BOdW0rKztcbiAgICAgICAgZGVsdGEgPSAxMDAwO1xuICAgIH1cblxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoYXQudGljaygpO1xuICAgIH0sIGRlbHRhKTtcbn07XG5cbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuICAgIGNvbnNvbGUubG9nKFwiaGVsbG9cIik7XG4gICAgLy8gdmFyIHBhdHRlcm4gPSBUcmlhbmdsaWZ5KHtcbiAgICAvLyAgICAgd2lkdGg6ICQod2luZG93KS53aWR0aCgpLFxuICAgIC8vICAgICBoZWlnaHQ6ICQod2luZG93KS5oZWlnaHQoKSxcbiAgICAvLyAgICAgY2VsbF9zaXplOiAzMDAsXG4gICAgLy8gICAgIHhfY29sb3JzOiBbJyMyQjJCMkInLCcjMzAzMzM1JywgJyMzQjNGNDEnLCcjMzAzMzM1JywnIzNCM0Y0MScsJyMzMDMzMzUnLCcjMkIyQjJCJ10sXG4gICAgLy8gICAgIHlfY29sb3JzOiBbJyMyQjJCMkInLCcjMzAzMzM1JywgJyMzQjNGNDEnLCcjMzAzMzM1JywnIzNCM0Y0MScsJyMzMDMzMzUnLCcjMkIyQjJCJ11cbiAgICAvLyB9KTtcbiAgICAvL1xuICAgIC8vICQoJy5wb2x5LWJhY2tncm91bmQnKS5hcHBlbmQocGF0dGVybi5jYW52YXMoKSk7XG4gICAgJCgnLnBhZ2UtY29udGVudCcpLmNzcygnYmFja2dyb3VuZC1jb2xvcicsICd0cmFuc3BhcmVudCcpO1xuXG4gICAgdXBkYXRlQmFja2dyb3VuZCgpO1xuXG4gICAgJCgnYm9keScpLnNjcm9sbHNweSgpO1xuXG4gICAgdmFyIGVsZW1lbnRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndHlwZXdyaXRlJyk7XG4gICAgZm9yICh2YXIgaT0wOyBpPGVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciB0b1JvdGF0ZSA9IGVsZW1lbnRzW2ldLmdldEF0dHJpYnV0ZSgnZGF0YS10eXBlJyk7XG4gICAgICAgIHZhciBwZXJpb2QgPSBlbGVtZW50c1tpXS5nZXRBdHRyaWJ1dGUoJ2RhdGEtcGVyaW9kJyk7XG4gICAgICAgIGlmICh0b1JvdGF0ZSkge1xuICAgICAgICAgICAgbmV3IFR4dFR5cGUoZWxlbWVudHNbaV0sIEpTT04ucGFyc2UodG9Sb3RhdGUpLCBwZXJpb2QpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIElOSkVDVCBDU1NcbiAgICB2YXIgY3NzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICAgIGNzcy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuICAgIGNzcy5pbm5lckhUTUwgPSBcIi50eXBld3JpdGUgPiAud3JhcCB7IGJvcmRlci1yaWdodDogMC4wOGVtIHNvbGlkICNmZmZ9XCI7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjc3MpO1xuXG4gICAgJChcIiNuYXYgdWwgbGkgYVtocmVmXj0nIyddXCIpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgLy8gcHJldmVudCBkZWZhdWx0IGFuY2hvciBjbGljayBiZWhhdmlvclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgLy8gc3RvcmUgaGFzaFxuICAgICAgICB2YXIgaGFzaCA9IHRoaXMuaGFzaDtcblxuICAgICAgICAvLyBhbmltYXRlXG4gICAgICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcbiAgICAgICAgICAgIHNjcm9sbFRvcDogJChoYXNoKS5vZmZzZXQoKS50b3BcbiAgICAgICAgfSwgMTAwMCwgZnVuY3Rpb24oKXtcblxuICAgICAgICAgICAgLy8gd2hlbiBkb25lLCBhZGQgaGFzaCB0byB1cmxcbiAgICAgICAgICAgIC8vIChkZWZhdWx0IGNsaWNrIGJlaGF2aW91cilcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gaGFzaDtcbiAgICAgICAgfSk7XG5cbiAgICB9KTtcblxufSk7XG5cbiQod2luZG93KS5yZWFkeShmdW5jdGlvbigpe1xuICAgIGNvbnNvbGUubG9nKFwid2luZG93XCIpO1xuICAgIC8qIHBhcnRpY2xlc0pTLmxvYWQoQGRvbS1pZCwgQHBhdGgtanNvbiwgQGNhbGxiYWNrIChvcHRpb25hbCkpOyAqL1xuICAgIHBhcnRpY2xlc0pTLmxvYWQoJ3Byb2plY3QtcGFydGljbGVzJywgJ2pzL3BhcnRpY2xlc2pzLWNvbmZpZy5qc29uJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdjYWxsYmFjayAtIHBhcnRpY2xlcy5qcyBjb25maWcgbG9hZGVkJyk7XG4gICAgfSk7XG5cbiAgICAkKCcucHJvamVjdC1pbWFnZScpLmVhY2goZnVuY3Rpb24oKXtcbiAgICAgICAgdmFyIGltYWdlRWxlbWVudCA9ICQodGhpcyk7XG4gICAgICAgIHZhciBpbWFnZSA9ICQodGhpcykuZGF0YSgnaW1hZ2UnKTtcblxuICAgICAgICBpZihpbWFnZS5sZW5ndGggIT0gMCl7XG4gICAgICAgICAgICB2YXIgaW1nID0gJCgnPGltZyAvPicpLmF0dHIoe1xuICAgICAgICAgICAgICAgICdzcmMnOiBpbWFnZSxcbiAgICAgICAgICAgIH0pLm9uKCdsb2FkJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgaW1hZ2VFbGVtZW50LmF0dHIoJ3NyYycsIGltYWdlKTtcbiAgICAgICAgICAgICAgICAvLyBpbWFnZUVsZW1lbnQuY3NzKCdiYWNrZ3JvdW5kJywgJ3VybChcIicraW1hZ2UrJ1wiKSBjZW50ZXIgY2VudGVyJyk7XG4gICAgICAgICAgICAgICAgLy8gaW1hZ2VFbGVtZW50LmNzcygnYmFja2dyb3VuZC1zaXplJywgJ2NvdmVyJyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgICQoJy5wcm9qZWN0LWJnLWltYWdlJykuZWFjaChmdW5jdGlvbigpe1xuICAgICAgICB2YXIgaW1hZ2VFbGVtZW50ID0gJCh0aGlzKTtcbiAgICAgICAgdmFyIGltYWdlID0gJCh0aGlzKS5kYXRhKCdpbWFnZScpO1xuXG4gICAgICAgIGlmKGltYWdlLmxlbmd0aCAhPSAwKXtcbiAgICAgICAgICAgIHZhciBpbWcgPSAkKCc8aW1nIC8+JykuYXR0cih7XG4gICAgICAgICAgICAgICAgJ3NyYyc6IGltYWdlLFxuICAgICAgICAgICAgfSkub24oJ2xvYWQnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBpbWFnZUVsZW1lbnQuY3NzKCdiYWNrZ3JvdW5kJywgJ3VybChcIicraW1hZ2UrJ1wiKSBjZW50ZXIgY2VudGVyJyk7XG4gICAgICAgICAgICAgICAgaW1hZ2VFbGVtZW50LmNzcygnYmFja2dyb3VuZC1zaXplJywgJ2NvdmVyJyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0pO1xufSk7XG5cbnZhciAkY2Fyb3VzZWwgPSAkKCcjY2Fyb3VzZWxFeGFtcGxlSW5kaWNhdG9ycycpO1xuJGNhcm91c2VsLmNhcm91c2VsKCk7XG52YXIgaGFuZGxlZD1mYWxzZTsvL2dsb2JhbCB2YXJpYWJsZVxuXG4kY2Fyb3VzZWwuYmluZCgnc2xpZGUuYnMuY2Fyb3VzZWwnLCBmdW5jdGlvbiAoZSkge1xuICAgIHZhciBjdXJyZW50PSQoZS50YXJnZXQpLmZpbmQoJy5jYXJvdXNlbC1pdGVtLmFjdGl2ZScpO1xuICAgIHZhciBpbmR4PSQoY3VycmVudCkuaW5kZXgoKTtcblxuICAgIGlmKChpbmR4KzIpPiQoJy5jYXJvdXNlbC1pbmRpY2F0b3JzIGxpJykubGVuZ3RoKVxuICAgICAgICBpbmR4PS0xXG4gICAgaWYoIWhhbmRsZWQpXG4gICAge1xuICAgICAgICAkKCcuY2Fyb3VzZWwtaW5kaWNhdG9ycyBsaScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKVxuICAgICAgICAkKCcuY2Fyb3VzZWwtaW5kaWNhdG9ycyBsaTpudGgtY2hpbGQoJysoaW5keCsyKSsnKScpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICB9XG4gICAgZWxzZVxuICAgIHtcbiAgICAgICAgaGFuZGxlZD0haGFuZGxlZDsvL2lmIGhhbmRsZWQ9dHJ1ZSBtYWtlIGl0IGJhY2sgdG8gZmFsc2UgdG8gd29yayBub3JtYWxseS5cbiAgICB9XG59KTtcblxuJChcIi5jYXJvdXNlbC1pbmRpY2F0b3JzIGxpXCIpLm9uKCdjbGljaycsZnVuY3Rpb24oKXtcbiAgICAvL0NsaWNrIGV2ZW50IGZvciBpbmRpY2F0b3JzXG4gICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJykuc2libGluZ3MoKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgLy9yZW1vdmUgc2libGluZ3MgYWN0aXZlIGNsYXNzIGFuZCBhZGQgaXQgdG8gY3VycmVudCBjbGlja2VkIGl0ZW1cbiAgICBoYW5kbGVkPXRydWU7IC8vc2V0IGdsb2JhbCB2YXJpYWJsZSB0byB0cnVlIHRvIGlkZW50aWZ5IHdoZXRoZXIgaW5kaWNhdG9yIGNoYW5naW5nIHdhcyBoYW5kbGVkIG9yIG5vdC5cbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==