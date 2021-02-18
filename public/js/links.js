(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["/js/links"],{

/***/ "./resources/js/frontend/links.js":
/*!****************************************!*\
  !*** ./resources/js/frontend/links.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

$(document).ready(function () {
  $('.page-content').css('background-color', 'transparent');
});
$(window).ready(function () {
  $('.link-image').each(function () {
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
  $('.link-bg-image').each(function () {
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

/***/ }),

/***/ 6:
/*!**********************************************!*\
  !*** multi ./resources/js/frontend/links.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/gregorysteenhagen/Desktop/ModernHobbyist/modern-hobbyist/resources/js/frontend/links.js */"./resources/js/frontend/links.js");


/***/ })

},[[6,"/js/manifest"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvZnJvbnRlbmQvbGlua3MuanMiXSwibmFtZXMiOlsiJCIsImRvY3VtZW50IiwicmVhZHkiLCJjc3MiLCJ3aW5kb3ciLCJlYWNoIiwiaW1hZ2VFbGVtZW50IiwiaW1hZ2UiLCJkYXRhIiwibGVuZ3RoIiwiaW1nIiwiYXR0ciIsIm9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQUEsQ0FBQyxDQUFDQyxRQUFELENBQUQsQ0FBWUMsS0FBWixDQUFrQixZQUFXO0FBQ3pCRixHQUFDLENBQUMsZUFBRCxDQUFELENBQW1CRyxHQUFuQixDQUF1QixrQkFBdkIsRUFBMkMsYUFBM0M7QUFDSCxDQUZEO0FBSUFILENBQUMsQ0FBQ0ksTUFBRCxDQUFELENBQVVGLEtBQVYsQ0FBZ0IsWUFBVTtBQUN0QkYsR0FBQyxDQUFDLGFBQUQsQ0FBRCxDQUFpQkssSUFBakIsQ0FBc0IsWUFBVTtBQUM1QixRQUFJQyxZQUFZLEdBQUdOLENBQUMsQ0FBQyxJQUFELENBQXBCO0FBQ0EsUUFBSU8sS0FBSyxHQUFHUCxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFRLElBQVIsQ0FBYSxPQUFiLENBQVo7O0FBRUEsUUFBR0QsS0FBSyxDQUFDRSxNQUFOLElBQWdCLENBQW5CLEVBQXFCO0FBQ2pCLFVBQUlDLEdBQUcsR0FBR1YsQ0FBQyxDQUFDLFNBQUQsQ0FBRCxDQUFhVyxJQUFiLENBQWtCO0FBQ3hCLGVBQU9KO0FBRGlCLE9BQWxCLEVBRVBLLEVBRk8sQ0FFSixNQUZJLEVBRUksWUFBVztBQUNyQk4sb0JBQVksQ0FBQ0ssSUFBYixDQUFrQixLQUFsQixFQUF5QkosS0FBekIsRUFEcUIsQ0FFckI7QUFDQTtBQUNILE9BTlMsQ0FBVjtBQU9IO0FBQ0osR0FiRDtBQWNBUCxHQUFDLENBQUMsZ0JBQUQsQ0FBRCxDQUFvQkssSUFBcEIsQ0FBeUIsWUFBVTtBQUMvQixRQUFJQyxZQUFZLEdBQUdOLENBQUMsQ0FBQyxJQUFELENBQXBCO0FBQ0EsUUFBSU8sS0FBSyxHQUFHUCxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFRLElBQVIsQ0FBYSxPQUFiLENBQVo7O0FBRUEsUUFBR0QsS0FBSyxDQUFDRSxNQUFOLElBQWdCLENBQW5CLEVBQXFCO0FBQ2pCLFVBQUlDLEdBQUcsR0FBR1YsQ0FBQyxDQUFDLFNBQUQsQ0FBRCxDQUFhVyxJQUFiLENBQWtCO0FBQ3hCLGVBQU9KO0FBRGlCLE9BQWxCLEVBRVBLLEVBRk8sQ0FFSixNQUZJLEVBRUksWUFBVztBQUNyQk4sb0JBQVksQ0FBQ0gsR0FBYixDQUFpQixZQUFqQixFQUErQixVQUFRSSxLQUFSLEdBQWMsa0JBQTdDO0FBQ0FELG9CQUFZLENBQUNILEdBQWIsQ0FBaUIsaUJBQWpCLEVBQW9DLE9BQXBDO0FBQ0gsT0FMUyxDQUFWO0FBTUg7QUFDSixHQVpEO0FBYUgsQ0E1QkQsRSIsImZpbGUiOiIvanMvbGlua3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcbiAgICAkKCcucGFnZS1jb250ZW50JykuY3NzKCdiYWNrZ3JvdW5kLWNvbG9yJywgJ3RyYW5zcGFyZW50Jyk7XG59KTtcblxuJCh3aW5kb3cpLnJlYWR5KGZ1bmN0aW9uKCl7XG4gICAgJCgnLmxpbmstaW1hZ2UnKS5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgICAgIHZhciBpbWFnZUVsZW1lbnQgPSAkKHRoaXMpO1xuICAgICAgICB2YXIgaW1hZ2UgPSAkKHRoaXMpLmRhdGEoJ2ltYWdlJyk7XG5cbiAgICAgICAgaWYoaW1hZ2UubGVuZ3RoICE9IDApe1xuICAgICAgICAgICAgdmFyIGltZyA9ICQoJzxpbWcgLz4nKS5hdHRyKHtcbiAgICAgICAgICAgICAgICAnc3JjJzogaW1hZ2UsXG4gICAgICAgICAgICB9KS5vbignbG9hZCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGltYWdlRWxlbWVudC5hdHRyKCdzcmMnLCBpbWFnZSk7XG4gICAgICAgICAgICAgICAgLy8gaW1hZ2VFbGVtZW50LmNzcygnYmFja2dyb3VuZCcsICd1cmwoXCInK2ltYWdlKydcIikgY2VudGVyIGNlbnRlcicpO1xuICAgICAgICAgICAgICAgIC8vIGltYWdlRWxlbWVudC5jc3MoJ2JhY2tncm91bmQtc2l6ZScsICdjb3ZlcicpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICAkKCcubGluay1iZy1pbWFnZScpLmVhY2goZnVuY3Rpb24oKXtcbiAgICAgICAgdmFyIGltYWdlRWxlbWVudCA9ICQodGhpcyk7XG4gICAgICAgIHZhciBpbWFnZSA9ICQodGhpcykuZGF0YSgnaW1hZ2UnKTtcblxuICAgICAgICBpZihpbWFnZS5sZW5ndGggIT0gMCl7XG4gICAgICAgICAgICB2YXIgaW1nID0gJCgnPGltZyAvPicpLmF0dHIoe1xuICAgICAgICAgICAgICAgICdzcmMnOiBpbWFnZSxcbiAgICAgICAgICAgIH0pLm9uKCdsb2FkJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgaW1hZ2VFbGVtZW50LmNzcygnYmFja2dyb3VuZCcsICd1cmwoXCInK2ltYWdlKydcIikgY2VudGVyIGNlbnRlcicpO1xuICAgICAgICAgICAgICAgIGltYWdlRWxlbWVudC5jc3MoJ2JhY2tncm91bmQtc2l6ZScsICdjb3ZlcicpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9KTtcbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==