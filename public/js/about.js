(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["/js/about"],{

/***/ "./resources/js/frontend/about.js":
/*!****************************************!*\
  !*** ./resources/js/frontend/about.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery_lazy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery-lazy */ "./node_modules/jquery-lazy/jquery.lazy.js");
/* harmony import */ var jquery_lazy__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery_lazy__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jquery_lazy_jquery_lazy_plugins__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery-lazy/jquery.lazy.plugins */ "./node_modules/jquery-lazy/jquery.lazy.plugins.js");
/* harmony import */ var jquery_lazy_jquery_lazy_plugins__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery_lazy_jquery_lazy_plugins__WEBPACK_IMPORTED_MODULE_1__);


$(window).ready(function () {
  $('.about-image').each(function () {
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
  $('.about-image-small').each(function () {
    var imageElement = $(this);
    var image = $(this).data('image');

    if (image.length != 0) {
      var img = $('<img />').attr({
        'src': image
      }).on('load', function () {
        imageElement.attr("src", image);
      });
    }
  });
});

/***/ }),

/***/ 2:
/*!**********************************************!*\
  !*** multi ./resources/js/frontend/about.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/gregorysteenhagen/Desktop/ModernHobbyist/modern-hobbyist/resources/js/frontend/about.js */"./resources/js/frontend/about.js");


/***/ })

},[[2,"/js/manifest","/js/vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvZnJvbnRlbmQvYWJvdXQuanMiXSwibmFtZXMiOlsiJCIsIndpbmRvdyIsInJlYWR5IiwiZWFjaCIsImltYWdlRWxlbWVudCIsImltYWdlIiwiZGF0YSIsImxlbmd0aCIsImltZyIsImF0dHIiLCJvbiIsImNzcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUFBLENBQUMsQ0FBQ0MsTUFBRCxDQUFELENBQVVDLEtBQVYsQ0FBZ0IsWUFBVTtBQUN0QkYsR0FBQyxDQUFDLGNBQUQsQ0FBRCxDQUFrQkcsSUFBbEIsQ0FBdUIsWUFBVTtBQUM3QixRQUFJQyxZQUFZLEdBQUdKLENBQUMsQ0FBQyxJQUFELENBQXBCO0FBQ0EsUUFBSUssS0FBSyxHQUFHTCxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFNLElBQVIsQ0FBYSxPQUFiLENBQVo7O0FBRUEsUUFBR0QsS0FBSyxDQUFDRSxNQUFOLElBQWdCLENBQW5CLEVBQXFCO0FBQ2pCLFVBQUlDLEdBQUcsR0FBR1IsQ0FBQyxDQUFDLFNBQUQsQ0FBRCxDQUFhUyxJQUFiLENBQWtCO0FBQ3hCLGVBQU9KO0FBRGlCLE9BQWxCLEVBRVBLLEVBRk8sQ0FFSixNQUZJLEVBRUksWUFBVztBQUNyQk4sb0JBQVksQ0FBQ08sR0FBYixDQUFpQixZQUFqQixFQUErQixVQUFRTixLQUFSLEdBQWMsa0JBQTdDO0FBQ0FELG9CQUFZLENBQUNPLEdBQWIsQ0FBaUIsaUJBQWpCLEVBQW9DLE9BQXBDO0FBQ0gsT0FMUyxDQUFWO0FBTUg7QUFDSixHQVpEO0FBYUFYLEdBQUMsQ0FBQyxvQkFBRCxDQUFELENBQXdCRyxJQUF4QixDQUE2QixZQUFVO0FBQ25DLFFBQUlDLFlBQVksR0FBR0osQ0FBQyxDQUFDLElBQUQsQ0FBcEI7QUFDQSxRQUFJSyxLQUFLLEdBQUdMLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUU0sSUFBUixDQUFhLE9BQWIsQ0FBWjs7QUFFQSxRQUFHRCxLQUFLLENBQUNFLE1BQU4sSUFBZ0IsQ0FBbkIsRUFBcUI7QUFDakIsVUFBSUMsR0FBRyxHQUFHUixDQUFDLENBQUMsU0FBRCxDQUFELENBQWFTLElBQWIsQ0FBa0I7QUFDeEIsZUFBT0o7QUFEaUIsT0FBbEIsRUFFUEssRUFGTyxDQUVKLE1BRkksRUFFSSxZQUFXO0FBQ3JCTixvQkFBWSxDQUFDSyxJQUFiLENBQWtCLEtBQWxCLEVBQXdCSixLQUF4QjtBQUNILE9BSlMsQ0FBVjtBQUtIO0FBQ0osR0FYRDtBQVlILENBMUJELEUiLCJmaWxlIjoiL2pzL2Fib3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwianF1ZXJ5LWxhenlcIjtcbmltcG9ydCBcImpxdWVyeS1sYXp5L2pxdWVyeS5sYXp5LnBsdWdpbnNcIjtcblxuJCh3aW5kb3cpLnJlYWR5KGZ1bmN0aW9uKCl7XG4gICAgJCgnLmFib3V0LWltYWdlJykuZWFjaChmdW5jdGlvbigpe1xuICAgICAgICB2YXIgaW1hZ2VFbGVtZW50ID0gJCh0aGlzKTtcbiAgICAgICAgdmFyIGltYWdlID0gJCh0aGlzKS5kYXRhKCdpbWFnZScpO1xuXG4gICAgICAgIGlmKGltYWdlLmxlbmd0aCAhPSAwKXtcbiAgICAgICAgICAgIHZhciBpbWcgPSAkKCc8aW1nIC8+JykuYXR0cih7XG4gICAgICAgICAgICAgICAgJ3NyYyc6IGltYWdlLFxuICAgICAgICAgICAgfSkub24oJ2xvYWQnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBpbWFnZUVsZW1lbnQuY3NzKCdiYWNrZ3JvdW5kJywgJ3VybChcIicraW1hZ2UrJ1wiKSBjZW50ZXIgY2VudGVyJyk7XG4gICAgICAgICAgICAgICAgaW1hZ2VFbGVtZW50LmNzcygnYmFja2dyb3VuZC1zaXplJywgJ2NvdmVyJyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgICQoJy5hYm91dC1pbWFnZS1zbWFsbCcpLmVhY2goZnVuY3Rpb24oKXtcbiAgICAgICAgdmFyIGltYWdlRWxlbWVudCA9ICQodGhpcyk7XG4gICAgICAgIHZhciBpbWFnZSA9ICQodGhpcykuZGF0YSgnaW1hZ2UnKTtcblxuICAgICAgICBpZihpbWFnZS5sZW5ndGggIT0gMCl7XG4gICAgICAgICAgICB2YXIgaW1nID0gJCgnPGltZyAvPicpLmF0dHIoe1xuICAgICAgICAgICAgICAgICdzcmMnOiBpbWFnZSxcbiAgICAgICAgICAgIH0pLm9uKCdsb2FkJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgaW1hZ2VFbGVtZW50LmF0dHIoXCJzcmNcIixpbWFnZSlcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSk7XG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=