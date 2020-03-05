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
  updateBackground();
});

function updateBackground() {
  if ($(window).scrollTop() >= $('#about').offset().top - $('#nav').outerHeight() && $(window).scrollTop() < $('#career').offset().top - $('#nav').outerHeight()) {
    $('.fullscreen-bg').hide();
    $('.homeText').hide();
    $('footer').hide();
  } else if ($(window).scrollTop() >= $('#career').offset().top - $('#nav').outerHeight()) {
    $('.fullscreen-bg').hide();
    $('.homeText').hide();
    $('footer').show();
  } else {
    $('.fullscreen-bg').show();
    $('.homeText').show();
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
  // var pattern = Trianglify({
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
  /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
  particlesJS.load('project-particles', 'js/particlesjs-config.json', function () {// console.log('callback - particles.js config loaded');
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
  $.ajax({
    type: 'GET',
    url: 'https://www.googleapis.com/youtube/v3/channels',
    data: {
      key: 'AIzaSyDYpzf9iciqWH0sENBiMqYACQ2xnMo5bDY',
      part: 'statistics',
      id: 'UCjgA1ehfjkZ4WMa5Cw9f1LA'
    },
    success: function success(data) {
      $('#youtubeVideoCount').html(data.items[0].statistics.videoCount);
    },
    error: function error(response) {
      console.log("Request Failed");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvZnJvbnRlbmQvaW5kZXguanMiXSwibmFtZXMiOlsiJCIsIndpbmRvdyIsInNjcm9sbCIsInVwZGF0ZUJhY2tncm91bmQiLCJzY3JvbGxUb3AiLCJvZmZzZXQiLCJ0b3AiLCJvdXRlckhlaWdodCIsImhpZGUiLCJzaG93IiwiVHh0VHlwZSIsImVsIiwidG9Sb3RhdGUiLCJwZXJpb2QiLCJsb29wTnVtIiwicGFyc2VJbnQiLCJ0eHQiLCJ0aWNrIiwiaXNEZWxldGluZyIsInByb3RvdHlwZSIsImkiLCJsZW5ndGgiLCJmdWxsVHh0Iiwic3Vic3RyaW5nIiwiaW5uZXJIVE1MIiwidGhhdCIsImRlbHRhIiwiTWF0aCIsInJhbmRvbSIsInNldFRpbWVvdXQiLCJkb2N1bWVudCIsInJlYWR5IiwiY3NzIiwic2Nyb2xsc3B5IiwiZWxlbWVudHMiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiZ2V0QXR0cmlidXRlIiwiSlNPTiIsInBhcnNlIiwiY3JlYXRlRWxlbWVudCIsInR5cGUiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJvbiIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImhhc2giLCJhbmltYXRlIiwibG9jYXRpb24iLCJwYXJ0aWNsZXNKUyIsImxvYWQiLCJlYWNoIiwiaW1hZ2VFbGVtZW50IiwiaW1hZ2UiLCJkYXRhIiwiaW1nIiwiYXR0ciIsImFqYXgiLCJ1cmwiLCJrZXkiLCJwYXJ0IiwiaWQiLCJzdWNjZXNzIiwiaHRtbCIsIml0ZW1zIiwic3RhdGlzdGljcyIsInZpZGVvQ291bnQiLCJlcnJvciIsInJlc3BvbnNlIiwiY29uc29sZSIsImxvZyIsIiRjYXJvdXNlbCIsImNhcm91c2VsIiwiaGFuZGxlZCIsImJpbmQiLCJjdXJyZW50IiwidGFyZ2V0IiwiZmluZCIsImluZHgiLCJpbmRleCIsInJlbW92ZUNsYXNzIiwiYWRkQ2xhc3MiLCJzaWJsaW5ncyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7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QUNJUixXQUFPLEdBQUMsQ0FBQ0EsT0FBVCxDQURKLENBQ3FCO0FBQ3BCO0FBQ0osQ0FmRDtBQWlCQXpFLENBQUMsQ0FBQyx5QkFBRCxDQUFELENBQTZCMkMsRUFBN0IsQ0FBZ0MsT0FBaEMsRUFBd0MsWUFBVTtBQUM5QztBQUNBM0MsR0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRaUYsUUFBUixDQUFpQixRQUFqQixFQUEyQkMsUUFBM0IsR0FBc0NGLFdBQXRDLENBQWtELFFBQWxELEVBRjhDLENBRzlDOztBQUNBUCxTQUFPLEdBQUMsSUFBUixDQUo4QyxDQUloQztBQUNqQixDQUxELEUiLCJmaWxlIjoiL2pzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwicGFydGljbGVzLmpzXCI7XG4kKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZUJhY2tncm91bmQoKTtcbn0pO1xuXG5mdW5jdGlvbiB1cGRhdGVCYWNrZ3JvdW5kKCl7XG4gICAgaWYoJCh3aW5kb3cpLnNjcm9sbFRvcCgpID49ICgkKCcjYWJvdXQnKS5vZmZzZXQoKS50b3AgLSAkKCcjbmF2Jykub3V0ZXJIZWlnaHQoKSkgJiYgJCh3aW5kb3cpLnNjcm9sbFRvcCgpIDwgKCQoJyNjYXJlZXInKS5vZmZzZXQoKS50b3AgLSAkKCcjbmF2Jykub3V0ZXJIZWlnaHQoKSkpe1xuICAgICAgICAkKCcuZnVsbHNjcmVlbi1iZycpLmhpZGUoKTtcbiAgICAgICAgJCgnLmhvbWVUZXh0JykuaGlkZSgpO1xuICAgICAgICAkKCdmb290ZXInKS5oaWRlKCk7XG4gICAgfWVsc2UgaWYoJCh3aW5kb3cpLnNjcm9sbFRvcCgpID49ICgkKCcjY2FyZWVyJykub2Zmc2V0KCkudG9wIC0gJCgnI25hdicpLm91dGVySGVpZ2h0KCkpKXtcbiAgICAgICAgJCgnLmZ1bGxzY3JlZW4tYmcnKS5oaWRlKCk7XG4gICAgICAgICQoJy5ob21lVGV4dCcpLmhpZGUoKTtcbiAgICAgICAgJCgnZm9vdGVyJykuc2hvdygpO1xuICAgIH1lbHNle1xuICAgICAgICAkKCcuZnVsbHNjcmVlbi1iZycpLnNob3coKTtcbiAgICAgICAgJCgnLmhvbWVUZXh0Jykuc2hvdygpO1xuICAgICAgICAkKCdmb290ZXInKS5oaWRlKCk7XG4gICAgfVxufVxuXG4vL21hZGUgYnkgdmlwdWwgbWlyYWprYXIgdGhldmlwdWxtLmFwcHNwb3QuY29tXG52YXIgVHh0VHlwZSA9IGZ1bmN0aW9uKGVsLCB0b1JvdGF0ZSwgcGVyaW9kKSB7XG4gICAgdGhpcy50b1JvdGF0ZSA9IHRvUm90YXRlO1xuICAgIHRoaXMuZWwgPSBlbDtcbiAgICB0aGlzLmxvb3BOdW0gPSAwO1xuICAgIHRoaXMucGVyaW9kID0gcGFyc2VJbnQocGVyaW9kLCAxMCkgfHwgMjAwMDtcbiAgICB0aGlzLnR4dCA9ICcnO1xuICAgIHRoaXMudGljaygpO1xuICAgIHRoaXMuaXNEZWxldGluZyA9IGZhbHNlO1xufTtcblxuVHh0VHlwZS5wcm90b3R5cGUudGljayA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBpID0gdGhpcy5sb29wTnVtICUgdGhpcy50b1JvdGF0ZS5sZW5ndGg7XG4gICAgdmFyIGZ1bGxUeHQgPSB0aGlzLnRvUm90YXRlW2ldO1xuXG4gICAgaWYgKHRoaXMuaXNEZWxldGluZykge1xuICAgICAgICB0aGlzLnR4dCA9IGZ1bGxUeHQuc3Vic3RyaW5nKDAsIHRoaXMudHh0Lmxlbmd0aCAtIDEpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMudHh0ID0gZnVsbFR4dC5zdWJzdHJpbmcoMCwgdGhpcy50eHQubGVuZ3RoICsgMSk7XG4gICAgfVxuXG4gICAgdGhpcy5lbC5pbm5lckhUTUwgPSAnPHNwYW4gY2xhc3M9XCJ3cmFwXCI+Jyt0aGlzLnR4dCsnPC9zcGFuPic7XG5cbiAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgdmFyIGRlbHRhID0gMjAwIC0gTWF0aC5yYW5kb20oKSAqIDEwMDtcblxuICAgIGlmICh0aGlzLmlzRGVsZXRpbmcpIHsgZGVsdGEgLz0gMjsgfVxuXG4gICAgaWYgKCF0aGlzLmlzRGVsZXRpbmcgJiYgdGhpcy50eHQgPT09IGZ1bGxUeHQpIHtcbiAgICAgICAgZGVsdGEgPSB0aGlzLnBlcmlvZDtcbiAgICAgICAgdGhpcy5pc0RlbGV0aW5nID0gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuaXNEZWxldGluZyAmJiB0aGlzLnR4dCA9PT0gJycpIHtcbiAgICAgICAgdGhpcy5pc0RlbGV0aW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMubG9vcE51bSsrO1xuICAgICAgICBkZWx0YSA9IDEwMDA7XG4gICAgfVxuXG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgdGhhdC50aWNrKCk7XG4gICAgfSwgZGVsdGEpO1xufTtcblxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG4gICAgLy8gdmFyIHBhdHRlcm4gPSBUcmlhbmdsaWZ5KHtcbiAgICAvLyAgICAgd2lkdGg6ICQod2luZG93KS53aWR0aCgpLFxuICAgIC8vICAgICBoZWlnaHQ6ICQod2luZG93KS5oZWlnaHQoKSxcbiAgICAvLyAgICAgY2VsbF9zaXplOiAzMDAsXG4gICAgLy8gICAgIHhfY29sb3JzOiBbJyMyQjJCMkInLCcjMzAzMzM1JywgJyMzQjNGNDEnLCcjMzAzMzM1JywnIzNCM0Y0MScsJyMzMDMzMzUnLCcjMkIyQjJCJ10sXG4gICAgLy8gICAgIHlfY29sb3JzOiBbJyMyQjJCMkInLCcjMzAzMzM1JywgJyMzQjNGNDEnLCcjMzAzMzM1JywnIzNCM0Y0MScsJyMzMDMzMzUnLCcjMkIyQjJCJ11cbiAgICAvLyB9KTtcbiAgICAvL1xuICAgIC8vICQoJy5wb2x5LWJhY2tncm91bmQnKS5hcHBlbmQocGF0dGVybi5jYW52YXMoKSk7XG4gICAgJCgnLnBhZ2UtY29udGVudCcpLmNzcygnYmFja2dyb3VuZC1jb2xvcicsICd0cmFuc3BhcmVudCcpO1xuXG4gICAgdXBkYXRlQmFja2dyb3VuZCgpO1xuXG4gICAgJCgnYm9keScpLnNjcm9sbHNweSgpO1xuXG4gICAgdmFyIGVsZW1lbnRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndHlwZXdyaXRlJyk7XG4gICAgZm9yICh2YXIgaT0wOyBpPGVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciB0b1JvdGF0ZSA9IGVsZW1lbnRzW2ldLmdldEF0dHJpYnV0ZSgnZGF0YS10eXBlJyk7XG4gICAgICAgIHZhciBwZXJpb2QgPSBlbGVtZW50c1tpXS5nZXRBdHRyaWJ1dGUoJ2RhdGEtcGVyaW9kJyk7XG4gICAgICAgIGlmICh0b1JvdGF0ZSkge1xuICAgICAgICAgICAgbmV3IFR4dFR5cGUoZWxlbWVudHNbaV0sIEpTT04ucGFyc2UodG9Sb3RhdGUpLCBwZXJpb2QpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIElOSkVDVCBDU1NcbiAgICB2YXIgY3NzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICAgIGNzcy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuICAgIGNzcy5pbm5lckhUTUwgPSBcIi50eXBld3JpdGUgPiAud3JhcCB7IGJvcmRlci1yaWdodDogMC4wOGVtIHNvbGlkICNmZmZ9XCI7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjc3MpO1xuXG4gICAgJChcIiNuYXYgdWwgbGkgYVtocmVmXj0nIyddXCIpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgLy8gcHJldmVudCBkZWZhdWx0IGFuY2hvciBjbGljayBiZWhhdmlvclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgLy8gc3RvcmUgaGFzaFxuICAgICAgICB2YXIgaGFzaCA9IHRoaXMuaGFzaDtcblxuICAgICAgICAvLyBhbmltYXRlXG4gICAgICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcbiAgICAgICAgICAgIHNjcm9sbFRvcDogJChoYXNoKS5vZmZzZXQoKS50b3BcbiAgICAgICAgfSwgMTAwMCwgZnVuY3Rpb24oKXtcblxuICAgICAgICAgICAgLy8gd2hlbiBkb25lLCBhZGQgaGFzaCB0byB1cmxcbiAgICAgICAgICAgIC8vIChkZWZhdWx0IGNsaWNrIGJlaGF2aW91cilcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gaGFzaDtcbiAgICAgICAgfSk7XG5cbiAgICB9KTtcblxufSk7XG5cbiQod2luZG93KS5yZWFkeShmdW5jdGlvbigpe1xuICAgIC8qIHBhcnRpY2xlc0pTLmxvYWQoQGRvbS1pZCwgQHBhdGgtanNvbiwgQGNhbGxiYWNrIChvcHRpb25hbCkpOyAqL1xuICAgIHBhcnRpY2xlc0pTLmxvYWQoJ3Byb2plY3QtcGFydGljbGVzJywgJ2pzL3BhcnRpY2xlc2pzLWNvbmZpZy5qc29uJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdjYWxsYmFjayAtIHBhcnRpY2xlcy5qcyBjb25maWcgbG9hZGVkJyk7XG4gICAgfSk7XG5cbiAgICAkKCcucHJvamVjdC1pbWFnZScpLmVhY2goZnVuY3Rpb24oKXtcbiAgICAgICAgdmFyIGltYWdlRWxlbWVudCA9ICQodGhpcyk7XG4gICAgICAgIHZhciBpbWFnZSA9ICQodGhpcykuZGF0YSgnaW1hZ2UnKTtcblxuICAgICAgICBpZihpbWFnZS5sZW5ndGggIT0gMCl7XG4gICAgICAgICAgICB2YXIgaW1nID0gJCgnPGltZyAvPicpLmF0dHIoe1xuICAgICAgICAgICAgICAgICdzcmMnOiBpbWFnZSxcbiAgICAgICAgICAgIH0pLm9uKCdsb2FkJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgaW1hZ2VFbGVtZW50LmF0dHIoJ3NyYycsIGltYWdlKTtcbiAgICAgICAgICAgICAgICAvLyBpbWFnZUVsZW1lbnQuY3NzKCdiYWNrZ3JvdW5kJywgJ3VybChcIicraW1hZ2UrJ1wiKSBjZW50ZXIgY2VudGVyJyk7XG4gICAgICAgICAgICAgICAgLy8gaW1hZ2VFbGVtZW50LmNzcygnYmFja2dyb3VuZC1zaXplJywgJ2NvdmVyJyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgICQoJy5wcm9qZWN0LWJnLWltYWdlJykuZWFjaChmdW5jdGlvbigpe1xuICAgICAgICB2YXIgaW1hZ2VFbGVtZW50ID0gJCh0aGlzKTtcbiAgICAgICAgdmFyIGltYWdlID0gJCh0aGlzKS5kYXRhKCdpbWFnZScpO1xuXG4gICAgICAgIGlmKGltYWdlLmxlbmd0aCAhPSAwKXtcbiAgICAgICAgICAgIHZhciBpbWcgPSAkKCc8aW1nIC8+JykuYXR0cih7XG4gICAgICAgICAgICAgICAgJ3NyYyc6IGltYWdlLFxuICAgICAgICAgICAgfSkub24oJ2xvYWQnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBpbWFnZUVsZW1lbnQuY3NzKCdiYWNrZ3JvdW5kJywgJ3VybChcIicraW1hZ2UrJ1wiKSBjZW50ZXIgY2VudGVyJyk7XG4gICAgICAgICAgICAgICAgaW1hZ2VFbGVtZW50LmNzcygnYmFja2dyb3VuZC1zaXplJywgJ2NvdmVyJyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgICQuYWpheCh7XG4gICAgICAgIHR5cGU6ICdHRVQnLFxuICAgICAgICB1cmw6ICdodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS95b3V0dWJlL3YzL2NoYW5uZWxzJyxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgICAga2V5OiAnQUl6YVN5RFlwemY5aWNpcVdIMHNFTkJpTXFZQUNRMnhuTW81YkRZJyxcbiAgICAgICAgICAgIHBhcnQ6ICdzdGF0aXN0aWNzJyxcbiAgICAgICAgICAgIGlkOiAnVUNqZ0ExZWhmamtaNFdNYTVDdzlmMUxBJ1xuICAgICAgICB9LFxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihkYXRhKXtcbiAgICAgICAgICAgICQoJyN5b3V0dWJlVmlkZW9Db3VudCcpLmh0bWwoZGF0YS5pdGVtc1swXS5zdGF0aXN0aWNzLnZpZGVvQ291bnQpO1xuICAgICAgICB9LFxuICAgICAgICBlcnJvcjogZnVuY3Rpb24ocmVzcG9uc2Upe1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJSZXF1ZXN0IEZhaWxlZFwiKTtcbiAgICAgICAgfVxuICAgIH0pO1xufSk7XG5cbnZhciAkY2Fyb3VzZWwgPSAkKCcjY2Fyb3VzZWxFeGFtcGxlSW5kaWNhdG9ycycpO1xuJGNhcm91c2VsLmNhcm91c2VsKCk7XG52YXIgaGFuZGxlZD1mYWxzZTsvL2dsb2JhbCB2YXJpYWJsZVxuXG4kY2Fyb3VzZWwuYmluZCgnc2xpZGUuYnMuY2Fyb3VzZWwnLCBmdW5jdGlvbiAoZSkge1xuICAgIHZhciBjdXJyZW50PSQoZS50YXJnZXQpLmZpbmQoJy5jYXJvdXNlbC1pdGVtLmFjdGl2ZScpO1xuICAgIHZhciBpbmR4PSQoY3VycmVudCkuaW5kZXgoKTtcblxuICAgIGlmKChpbmR4KzIpPiQoJy5jYXJvdXNlbC1pbmRpY2F0b3JzIGxpJykubGVuZ3RoKVxuICAgICAgICBpbmR4PS0xXG4gICAgaWYoIWhhbmRsZWQpXG4gICAge1xuICAgICAgICAkKCcuY2Fyb3VzZWwtaW5kaWNhdG9ycyBsaScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKVxuICAgICAgICAkKCcuY2Fyb3VzZWwtaW5kaWNhdG9ycyBsaTpudGgtY2hpbGQoJysoaW5keCsyKSsnKScpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICB9XG4gICAgZWxzZVxuICAgIHtcbiAgICAgICAgaGFuZGxlZD0haGFuZGxlZDsvL2lmIGhhbmRsZWQ9dHJ1ZSBtYWtlIGl0IGJhY2sgdG8gZmFsc2UgdG8gd29yayBub3JtYWxseS5cbiAgICB9XG59KTtcblxuJChcIi5jYXJvdXNlbC1pbmRpY2F0b3JzIGxpXCIpLm9uKCdjbGljaycsZnVuY3Rpb24oKXtcbiAgICAvL0NsaWNrIGV2ZW50IGZvciBpbmRpY2F0b3JzXG4gICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJykuc2libGluZ3MoKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgLy9yZW1vdmUgc2libGluZ3MgYWN0aXZlIGNsYXNzIGFuZCBhZGQgaXQgdG8gY3VycmVudCBjbGlja2VkIGl0ZW1cbiAgICBoYW5kbGVkPXRydWU7IC8vc2V0IGdsb2JhbCB2YXJpYWJsZSB0byB0cnVlIHRvIGlkZW50aWZ5IHdoZXRoZXIgaW5kaWNhdG9yIGNoYW5naW5nIHdhcyBoYW5kbGVkIG9yIG5vdC5cbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==