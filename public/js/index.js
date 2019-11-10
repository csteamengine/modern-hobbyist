(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["/js/index"],{

/***/ "./resources/js/frontend/index.js":
/*!****************************************!*\
  !*** ./resources/js/frontend/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

//made by vipul mirajkar thevipulm.appspot.com
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

/***/ }),

/***/ 1:
/*!**********************************************!*\
  !*** multi ./resources/js/frontend/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/gregorysteenhagen/Desktop/Projects/steamengine/resources/js/frontend/index.js */"./resources/js/frontend/index.js");


/***/ })

},[[1,"/js/manifest"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvZnJvbnRlbmQvaW5kZXguanMiXSwibmFtZXMiOlsiVHh0VHlwZSIsImVsIiwidG9Sb3RhdGUiLCJwZXJpb2QiLCJsb29wTnVtIiwicGFyc2VJbnQiLCJ0eHQiLCJ0aWNrIiwiaXNEZWxldGluZyIsInByb3RvdHlwZSIsImkiLCJsZW5ndGgiLCJmdWxsVHh0Iiwic3Vic3RyaW5nIiwiaW5uZXJIVE1MIiwidGhhdCIsImRlbHRhIiwiTWF0aCIsInJhbmRvbSIsInNldFRpbWVvdXQiLCIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsInNjcm9sbHNweSIsImVsZW1lbnRzIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImdldEF0dHJpYnV0ZSIsIkpTT04iLCJwYXJzZSIsImNzcyIsImNyZWF0ZUVsZW1lbnQiLCJ0eXBlIiwiYm9keSIsImFwcGVuZENoaWxkIiwib24iLCJlIiwicHJldmVudERlZmF1bHQiLCJoYXNoIiwiYW5pbWF0ZSIsInNjcm9sbFRvcCIsIm9mZnNldCIsInRvcCIsIndpbmRvdyIsImxvY2F0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBLElBQUlBLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQVNDLEVBQVQsRUFBYUMsUUFBYixFQUF1QkMsTUFBdkIsRUFBK0I7QUFDekMsT0FBS0QsUUFBTCxHQUFnQkEsUUFBaEI7QUFDQSxPQUFLRCxFQUFMLEdBQVVBLEVBQVY7QUFDQSxPQUFLRyxPQUFMLEdBQWUsQ0FBZjtBQUNBLE9BQUtELE1BQUwsR0FBY0UsUUFBUSxDQUFDRixNQUFELEVBQVMsRUFBVCxDQUFSLElBQXdCLElBQXRDO0FBQ0EsT0FBS0csR0FBTCxHQUFXLEVBQVg7QUFDQSxPQUFLQyxJQUFMO0FBQ0EsT0FBS0MsVUFBTCxHQUFrQixLQUFsQjtBQUNILENBUkQ7O0FBVUFSLE9BQU8sQ0FBQ1MsU0FBUixDQUFrQkYsSUFBbEIsR0FBeUIsWUFBVztBQUNoQyxNQUFJRyxDQUFDLEdB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Q2lCLElBQUQsQ0FBRCxDQUFRRyxNQUFSLEdBQWlCQztBQURSLEtBQXhCLEVBRUcsSUFGSCxFQUVTLFlBQVU7QUFFZjtBQUNBO0FBQ0FDLFlBQU0sQ0FBQ0MsUUFBUCxDQUFnQk4sSUFBaEIsR0FBdUJBLElBQXZCO0FBQ0gsS0FQRDtBQVNILEdBakJEO0FBbUJILENBcENELEUiLCJmaWxlIjoiL2pzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy9tYWRlIGJ5IHZpcHVsIG1pcmFqa2FyIHRoZXZpcHVsbS5hcHBzcG90LmNvbVxudmFyIFR4dFR5cGUgPSBmdW5jdGlvbihlbCwgdG9Sb3RhdGUsIHBlcmlvZCkge1xuICAgIHRoaXMudG9Sb3RhdGUgPSB0b1JvdGF0ZTtcbiAgICB0aGlzLmVsID0gZWw7XG4gICAgdGhpcy5sb29wTnVtID0gMDtcbiAgICB0aGlzLnBlcmlvZCA9IHBhcnNlSW50KHBlcmlvZCwgMTApIHx8IDIwMDA7XG4gICAgdGhpcy50eHQgPSAnJztcbiAgICB0aGlzLnRpY2soKTtcbiAgICB0aGlzLmlzRGVsZXRpbmcgPSBmYWxzZTtcbn07XG5cblR4dFR5cGUucHJvdG90eXBlLnRpY2sgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgaSA9IHRoaXMubG9vcE51bSAlIHRoaXMudG9Sb3RhdGUubGVuZ3RoO1xuICAgIHZhciBmdWxsVHh0ID0gdGhpcy50b1JvdGF0ZVtpXTtcblxuICAgIGlmICh0aGlzLmlzRGVsZXRpbmcpIHtcbiAgICAgICAgdGhpcy50eHQgPSBmdWxsVHh0LnN1YnN0cmluZygwLCB0aGlzLnR4dC5sZW5ndGggLSAxKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnR4dCA9IGZ1bGxUeHQuc3Vic3RyaW5nKDAsIHRoaXMudHh0Lmxlbmd0aCArIDEpO1xuICAgIH1cblxuICAgIHRoaXMuZWwuaW5uZXJIVE1MID0gJzxzcGFuIGNsYXNzPVwid3JhcFwiPicrdGhpcy50eHQrJzwvc3Bhbj4nO1xuXG4gICAgdmFyIHRoYXQgPSB0aGlzO1xuICAgIHZhciBkZWx0YSA9IDIwMCAtIE1hdGgucmFuZG9tKCkgKiAxMDA7XG5cbiAgICBpZiAodGhpcy5pc0RlbGV0aW5nKSB7IGRlbHRhIC89IDI7IH1cblxuICAgIGlmICghdGhpcy5pc0RlbGV0aW5nICYmIHRoaXMudHh0ID09PSBmdWxsVHh0KSB7XG4gICAgICAgIGRlbHRhID0gdGhpcy5wZXJpb2Q7XG4gICAgICAgIHRoaXMuaXNEZWxldGluZyA9IHRydWU7XG4gICAgfSBlbHNlIGlmICh0aGlzLmlzRGVsZXRpbmcgJiYgdGhpcy50eHQgPT09ICcnKSB7XG4gICAgICAgIHRoaXMuaXNEZWxldGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmxvb3BOdW0rKztcbiAgICAgICAgZGVsdGEgPSAxMDAwO1xuICAgIH1cblxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoYXQudGljaygpO1xuICAgIH0sIGRlbHRhKTtcbn07XG5cbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuICAgICQoJ2JvZHknKS5zY3JvbGxzcHkoKTtcblxuICAgIHZhciBlbGVtZW50cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3R5cGV3cml0ZScpO1xuICAgIGZvciAodmFyIGk9MDsgaTxlbGVtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgdG9Sb3RhdGUgPSBlbGVtZW50c1tpXS5nZXRBdHRyaWJ1dGUoJ2RhdGEtdHlwZScpO1xuICAgICAgICB2YXIgcGVyaW9kID0gZWxlbWVudHNbaV0uZ2V0QXR0cmlidXRlKCdkYXRhLXBlcmlvZCcpO1xuICAgICAgICBpZiAodG9Sb3RhdGUpIHtcbiAgICAgICAgICAgIG5ldyBUeHRUeXBlKGVsZW1lbnRzW2ldLCBKU09OLnBhcnNlKHRvUm90YXRlKSwgcGVyaW9kKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBJTkpFQ1QgQ1NTXG4gICAgdmFyIGNzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgICBjc3MudHlwZSA9IFwidGV4dC9jc3NcIjtcbiAgICBjc3MuaW5uZXJIVE1MID0gXCIudHlwZXdyaXRlID4gLndyYXAgeyBib3JkZXItcmlnaHQ6IDAuMDhlbSBzb2xpZCAjZmZmfVwiO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY3NzKTtcblxuICAgICQoXCIjbmF2IHVsIGxpIGFbaHJlZl49JyMnXVwiKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgICAgIC8vIHByZXZlbnQgZGVmYXVsdCBhbmNob3IgY2xpY2sgYmVoYXZpb3JcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIC8vIHN0b3JlIGhhc2hcbiAgICAgICAgdmFyIGhhc2ggPSB0aGlzLmhhc2g7XG5cbiAgICAgICAgLy8gYW5pbWF0ZVxuICAgICAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7XG4gICAgICAgICAgICBzY3JvbGxUb3A6ICQoaGFzaCkub2Zmc2V0KCkudG9wXG4gICAgICAgIH0sIDEwMDAsIGZ1bmN0aW9uKCl7XG5cbiAgICAgICAgICAgIC8vIHdoZW4gZG9uZSwgYWRkIGhhc2ggdG8gdXJsXG4gICAgICAgICAgICAvLyAoZGVmYXVsdCBjbGljayBiZWhhdmlvdXIpXG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9IGhhc2g7XG4gICAgICAgIH0pO1xuXG4gICAgfSk7XG5cbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==