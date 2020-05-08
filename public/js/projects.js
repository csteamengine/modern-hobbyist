(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["/js/projects"],{

/***/ "./resources/js/frontend/projects.js":
/*!*******************************************!*\
  !*** ./resources/js/frontend/projects.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

$(document).ready(function () {
  $('.page-content').css('background-color', 'transparent');
});
$(window).ready(function () {
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

/***/ }),

/***/ 2:
/*!*************************************************!*\
  !*** multi ./resources/js/frontend/projects.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/gregorysteenhagen/Desktop/ModernHobbyist/modern-hobbyist/resources/js/frontend/projects.js */"./resources/js/frontend/projects.js");


/***/ })

},[[2,"/js/manifest"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvZnJvbnRlbmQvcHJvamVjdHMuanMiXSwibmFtZXMiOlsiJCIsImRvY3VtZW50IiwicmVhZHkiLCJjc3MiLCJ3aW5kb3ciLCJlYWNoIiwiaW1hZ2VFbGVtZW50IiwiaW1hZ2UiLCJkYXRhIiwibGVuZ3RoIiwiaW1nIiwiYXR0ciIsIm9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQUEsQ0FBQyxDQUFDQyxRQUFELENBQUQsQ0FBWUMsS0FBWixDQUFrQixZQUFXO0FBQ3pCRixHQUFDLENBQUMsZUFBRCxDQUFELENBQW1CRyxHQUFuQixDQUF1QixrQkFBdkIsRUFBMkMsYUFBM0M7QUFDSCxDQUZEO0FBSUFILENBQUMsQ0FBQ0ksTUFBRCxDQUFELENBQVVGLEtBQVYsQ0FBZ0IsWUFBVTtBQUN0QkYsR0FBQyxDQUFDLGdCQUFELENBQUQsQ0FBb0JLLElBQXBCLENBQXlCLFlBQVU7QUFDL0IsUUFBSUMsWUFBWSxHQUFHTixDQUFDLENBQUMsSUFBRCxDQUFwQjtBQUNBLFFBQUlPLEtBQUssR0FBR1AsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRUSxJQUFSLENBQWEsT0FBYixDQUFaOztBQUVBLFFBQUdELEtBQUssQ0FBQ0UsTUFBTixJQUFnQixDQUFuQixFQUFxQjtBQUNqQixVQUFJQyxHQUFHLEdBQUdWLENBQUMsQ0FBQyxTQUFELENBQUQsQ0FBYVcsSUFBYixDQUFrQjtBQUN4QixlQUFPSjtBQURpQixPQUFsQixFQUVQSyxFQUZPLENBRUosTUFGSSxFQUVJLFlBQVc7QUFDckJOLG9CQUFZLENBQUNLLElBQWIsQ0FBa0IsS0FBbEIsRUFBeUJKLEtBQXpCLEVBRHFCLENBRXJCO0FBQ0E7QUFDSCxPQU5TLENBQVY7QUFPSDtBQUNKLEdBYkQ7QUFjQVAsR0FBQyxDQUFDLG1CQUFELENBQUQsQ0FBdUJLLElBQXZCLENBQTRCLFlBQVU7QUFDbEMsUUFBSUMsWUFBWSxHQUFHTixDQUFDLENBQUMsSUFBRCxDQUFwQjtBQUNBLFFBQUlPLEtBQUssR0FBR1AsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRUSxJQUFSLENBQWEsT0FBYixDQUFaOztBQUVBLFFBQUdELEtBQUssQ0FBQ0UsTUFBTixJQUFnQixDQUFuQixFQUFxQjtBQUNqQixVQUFJQyxHQUFHLEdBQUdWLENBQUMsQ0FBQyxTQUFELENBQUQsQ0FBYVcsSUFBYixDQUFrQjtBQUN4QixlQUFPSjtBQURpQixPQUFsQixFQUVQSyxFQUZPLENBRUosTUFGSSxFQUVJLFlBQVc7QUFDckJOLG9CQUFZLENBQUNILEdBQWIsQ0FBaUIsWUFBakIsRUFBK0IsVUFBUUksS0FBUixHQUFjLGtCQUE3QztBQUNBRCxvQkFBWSxDQUFDSCxHQUFiLENBQWlCLGlCQUFqQixFQUFvQyxPQUFwQztBQUNILE9BTFMsQ0FBVjtBQU1IO0FBQ0osR0FaRDtBQWFILENBNUJELEUiLCJmaWxlIjoiL2pzL3Byb2plY3RzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG4gICAgJCgnLnBhZ2UtY29udGVudCcpLmNzcygnYmFja2dyb3VuZC1jb2xvcicsICd0cmFuc3BhcmVudCcpO1xufSk7XG5cbiQod2luZG93KS5yZWFkeShmdW5jdGlvbigpe1xuICAgICQoJy5wcm9qZWN0LWltYWdlJykuZWFjaChmdW5jdGlvbigpe1xuICAgICAgICB2YXIgaW1hZ2VFbGVtZW50ID0gJCh0aGlzKTtcbiAgICAgICAgdmFyIGltYWdlID0gJCh0aGlzKS5kYXRhKCdpbWFnZScpO1xuXG4gICAgICAgIGlmKGltYWdlLmxlbmd0aCAhPSAwKXtcbiAgICAgICAgICAgIHZhciBpbWcgPSAkKCc8aW1nIC8+JykuYXR0cih7XG4gICAgICAgICAgICAgICAgJ3NyYyc6IGltYWdlLFxuICAgICAgICAgICAgfSkub24oJ2xvYWQnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBpbWFnZUVsZW1lbnQuYXR0cignc3JjJywgaW1hZ2UpO1xuICAgICAgICAgICAgICAgIC8vIGltYWdlRWxlbWVudC5jc3MoJ2JhY2tncm91bmQnLCAndXJsKFwiJytpbWFnZSsnXCIpIGNlbnRlciBjZW50ZXInKTtcbiAgICAgICAgICAgICAgICAvLyBpbWFnZUVsZW1lbnQuY3NzKCdiYWNrZ3JvdW5kLXNpemUnLCAnY292ZXInKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgJCgnLnByb2plY3QtYmctaW1hZ2UnKS5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgICAgIHZhciBpbWFnZUVsZW1lbnQgPSAkKHRoaXMpO1xuICAgICAgICB2YXIgaW1hZ2UgPSAkKHRoaXMpLmRhdGEoJ2ltYWdlJyk7XG5cbiAgICAgICAgaWYoaW1hZ2UubGVuZ3RoICE9IDApe1xuICAgICAgICAgICAgdmFyIGltZyA9ICQoJzxpbWcgLz4nKS5hdHRyKHtcbiAgICAgICAgICAgICAgICAnc3JjJzogaW1hZ2UsXG4gICAgICAgICAgICB9KS5vbignbG9hZCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGltYWdlRWxlbWVudC5jc3MoJ2JhY2tncm91bmQnLCAndXJsKFwiJytpbWFnZSsnXCIpIGNlbnRlciBjZW50ZXInKTtcbiAgICAgICAgICAgICAgICBpbWFnZUVsZW1lbnQuY3NzKCdiYWNrZ3JvdW5kLXNpemUnLCAnY292ZXInKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSk7XG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=