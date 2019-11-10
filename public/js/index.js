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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvZnJvbnRlbmQvaW5kZXguanMiXSwibmFtZXMiOlsiVHh0VHlwZSIsImVsIiwidG9Sb3RhdGUiLCJwZXJpb2QiLCJsb29wTnVtIiwicGFyc2VJbnQiLCJ0eHQiLCJ0aWNrIiwiaXNEZWxldGluZyIsInByb3RvdHlwZSIsImkiLCJsZW5ndGgiLCJmdWxsVHh0Iiwic3Vic3RyaW5nIiwiaW5uZXJIVE1MIiwidGhhdCIsImRlbHRhIiwiTWF0aCIsInJhbmRvbSIsInNldFRpbWVvdXQiLCIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsImVsZW1lbnRzIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImdldEF0dHJpYnV0ZSIsIkpTT04iLCJwYXJzZSIsImNzcyIsImNyZWF0ZUVsZW1lbnQiLCJ0eXBlIiwiYm9keSIsImFwcGVuZENoaWxkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBLElBQUlBLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQVNDLEVBQVQsRUFBYUMsUUFBYixFQUF1QkMsTUFBdkIsRUFBK0I7QUFDekMsT0FBS0QsUUFBTCxHQUFnQkEsUUFBaEI7QUFDQSxPQUFLRCxFQUFMLEdBQVVBLEVBQVY7QUFDQSxPQUFLRyxPQUFMLEdBQWUsQ0FBZjtBQUNBLE9BQUtELE1BQUwsR0FBY0UsUUFBUSxDQUFDRixNQUFELEVBQVMsRUFBVCxDQUFSLElBQXdCLElBQXRDO0FBQ0EsT0FBS0csR0FBTCxHQUFXLEVBQVg7QUFDQSxPQUFLQyxJQUFMO0FBQ0EsT0FBS0MsVUFBTCxHQUFrQixLQUFsQjtBQUNILENBUkQ7O0FBVUFSLE9BQU8sQ0FBQ1MsU0FBUixDQUFrQkYsSUFBbEIsR0FBeUIsWUFBVztBQUNoQyxNQUFJRyxDQUFDLEdBQUcsS0FBS04sT0FBTCxHQUFlLEtBQUtGLFFBQUwsQ0FBY1MsTUFBckM7QUFDQSxNQUFJQyxPQUFPLEdBQUcsS0FBS1YsUUFBTCxDQUFjUSxDQUFkLENBQWQ7O0FBRUEsTUFBSSxLQUFLRixVQUFULEVBQXFCO0FBQ2pCLFNBQUtGLEdBQUwsR0FBV00sT0FBTyxDQUFDQyxTQUFSLENBQWtCLENBQWxCLEVBQXFCLEtBQUtQLEdBQUwsQ0FBU0ssTUFBVCxHQUFrQixDQUF2QyxDQUFYO0FBQ0gsR0FGRCxNQUVPO0FBQ0gsU0FBS0wsR0FBTCxHQUFXTSxPQUFPLENBQUNDLFNBQVIsQ0FBa0IsQ0FBbEIsRUFBcUIsS0FBS1AsR0FBTCxDQUFTSyxNQUFULEdBQWtCLENBQXZDLENBQVg7QUFDSDs7QUFFRCxPQUFLVixFQUFMLENBQVFhLFNBQVIsR0FBb0Isd0JBQXNCLEtBQUtSLEdBQTNCLEdBQStCLFNBQW5EO0FBRUEsTUFBSVMsSUFBSSxHQUFHLElBQVg7QUFDQSxNQUFJQyxLQUFLLEdBQUcsTUFBTUMsSUFBSSxDQUFDQyxNQUFMLEtBQWdCLEdBQWxDOztBQUVBLE1BQUksS0FBS1YsVUFBVCxFQUFxQjtBQUFFUSxTQUFLLElBQUksQ0FBVDtBQUFhOztBQUVwQyxNQUFJLENBQUMsS0FBS1IsVUFBTixJQUFvQixLQUFLRixHQUFMLEtBQWFNLE9BQXJDLEVBQThDO0FBQzFDSSxTQUFLLEdBQUcsS0FBS2IsTUFBYjtBQUNBLFNBQUtLLFVBQUwsR0FBa0IsSUFBbEI7QUFDSCxHQUhELE1BR08sSUFBSSxLQUFLQSxVQUFMLElBQW1CLEtBQUtGLEdBQUwsS0FBYSxFQUFwQyxFQUF3QztBQUMzQyxTQUFLRSxVQUFMLEdBQWtCLEtBQWxCO0FBQ0EsU0FBS0osT0FBTDtBQUNBWSxTQUFLLEdBQUcsSUFBUjtBQUNIOztBQUVERyxZQUFVLENBQUMsWUFBVztBQUNsQkosUUFBSSxDQUFDUixJQUFMO0FBQ0gsR0FGUyxFQUVQUyxLQUZPLENBQVY7QUFHSCxDQTdCRDs7QUErQkFJLENBQUMsQ0FBQ0MsUUFBRCxDQUFELENBQVlDLEtBQVosQ0FBa0IsWUFBVztBQUN6QixNQUFJQyxRQUFRLEdBQUdGLFFBQVEsQ0FBQ0csc0JBQVQsQ0FBZ0MsV0FBaEMsQ0FBZjs7QUFDQSxPQUFLLElBQUlkLENBQUMsR0FBQyxDQUFYLEVBQWNBLENBQUMsR0FBQ2EsUUFBUSxDQUFDWixNQUF6QixFQUFpQ0QsQ0FBQyxFQUFsQyxFQUFzQztBQUNsQyxRQUFJUixRQUFRLEdBQUdxQixRQUFRLENBQUNiLENBQUQsQ0FBUixDQUFZZSxZQUFaLENBQXlCLFdBQXpCLENBQWY7QUFDQSxRQUFJdEIsTUFBTSxHQUFHb0IsUUFBUSxDQUFDYixDQUFELENBQVIsQ0FBWWUsWUFBWixDQUF5QixhQUF6QixDQUFiOztBQUNBLFFBQUl2QixRQUFKLEVBQWM7QUFDVixVQUFJRixPQUFKLENBQVl1QixRQUFRLENBQUNiLENBQUQsQ0FBcEIsRUFBeUJnQixJQUFJLENBQUNDLEtBQUwsQ0FBV3pCLFFBQVgsQ0FBekIsRUFBK0NDLE1BQS9DO0FBQ0g7QUFDSixHQVJ3QixDQVN6Qjs7O0FBQ0EsTUFBSXlCLEdBQUcsR0FBR1AsUUFBUSxDQUFDUSxhQUFULENBQXVCLE9BQXZCLENBQVY7QUFDQUQsS0FBRyxDQUFDRSxJQUFKLEdBQVcsVUFBWDtBQUNBRixLQUFHLENBQUNkLFNBQUosR0FBZ0IsdURBQWhCO0FBQ0FPLFVBQVEsQ0FBQ1UsSUFBVCxDQUFjQyxXQUFkLENBQTBCSixHQUExQjtBQUNILENBZEQsRSIsImZpbGUiOiIvanMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL21hZGUgYnkgdmlwdWwgbWlyYWprYXIgdGhldmlwdWxtLmFwcHNwb3QuY29tXG52YXIgVHh0VHlwZSA9IGZ1bmN0aW9uKGVsLCB0b1JvdGF0ZSwgcGVyaW9kKSB7XG4gICAgdGhpcy50b1JvdGF0ZSA9IHRvUm90YXRlO1xuICAgIHRoaXMuZWwgPSBlbDtcbiAgICB0aGlzLmxvb3BOdW0gPSAwO1xuICAgIHRoaXMucGVyaW9kID0gcGFyc2VJbnQocGVyaW9kLCAxMCkgfHwgMjAwMDtcbiAgICB0aGlzLnR4dCA9ICcnO1xuICAgIHRoaXMudGljaygpO1xuICAgIHRoaXMuaXNEZWxldGluZyA9IGZhbHNlO1xufTtcblxuVHh0VHlwZS5wcm90b3R5cGUudGljayA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBpID0gdGhpcy5sb29wTnVtICUgdGhpcy50b1JvdGF0ZS5sZW5ndGg7XG4gICAgdmFyIGZ1bGxUeHQgPSB0aGlzLnRvUm90YXRlW2ldO1xuXG4gICAgaWYgKHRoaXMuaXNEZWxldGluZykge1xuICAgICAgICB0aGlzLnR4dCA9IGZ1bGxUeHQuc3Vic3RyaW5nKDAsIHRoaXMudHh0Lmxlbmd0aCAtIDEpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMudHh0ID0gZnVsbFR4dC5zdWJzdHJpbmcoMCwgdGhpcy50eHQubGVuZ3RoICsgMSk7XG4gICAgfVxuXG4gICAgdGhpcy5lbC5pbm5lckhUTUwgPSAnPHNwYW4gY2xhc3M9XCJ3cmFwXCI+Jyt0aGlzLnR4dCsnPC9zcGFuPic7XG5cbiAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgdmFyIGRlbHRhID0gMjAwIC0gTWF0aC5yYW5kb20oKSAqIDEwMDtcblxuICAgIGlmICh0aGlzLmlzRGVsZXRpbmcpIHsgZGVsdGEgLz0gMjsgfVxuXG4gICAgaWYgKCF0aGlzLmlzRGVsZXRpbmcgJiYgdGhpcy50eHQgPT09IGZ1bGxUeHQpIHtcbiAgICAgICAgZGVsdGEgPSB0aGlzLnBlcmlvZDtcbiAgICAgICAgdGhpcy5pc0RlbGV0aW5nID0gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuaXNEZWxldGluZyAmJiB0aGlzLnR4dCA9PT0gJycpIHtcbiAgICAgICAgdGhpcy5pc0RlbGV0aW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMubG9vcE51bSsrO1xuICAgICAgICBkZWx0YSA9IDEwMDA7XG4gICAgfVxuXG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgdGhhdC50aWNrKCk7XG4gICAgfSwgZGVsdGEpO1xufTtcblxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG4gICAgdmFyIGVsZW1lbnRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndHlwZXdyaXRlJyk7XG4gICAgZm9yICh2YXIgaT0wOyBpPGVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciB0b1JvdGF0ZSA9IGVsZW1lbnRzW2ldLmdldEF0dHJpYnV0ZSgnZGF0YS10eXBlJyk7XG4gICAgICAgIHZhciBwZXJpb2QgPSBlbGVtZW50c1tpXS5nZXRBdHRyaWJ1dGUoJ2RhdGEtcGVyaW9kJyk7XG4gICAgICAgIGlmICh0b1JvdGF0ZSkge1xuICAgICAgICAgICAgbmV3IFR4dFR5cGUoZWxlbWVudHNbaV0sIEpTT04ucGFyc2UodG9Sb3RhdGUpLCBwZXJpb2QpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIElOSkVDVCBDU1NcbiAgICB2YXIgY3NzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICAgIGNzcy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuICAgIGNzcy5pbm5lckhUTUwgPSBcIi50eXBld3JpdGUgPiAud3JhcCB7IGJvcmRlci1yaWdodDogMC4wOGVtIHNvbGlkICNmZmZ9XCI7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjc3MpO1xufSk7XG4iXSwic291cmNlUm9vdCI6IiJ9