(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["/js/jobModal"],{

/***/ "./resources/js/frontend/jobModal.js":
/*!*******************************************!*\
  !*** ./resources/js/frontend/jobModal.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

$('#jobHighlightModal').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget); // Button that triggered the modal

  var jobTitle = button.data('title'); // Extract info from data-* attributes

  var description = button.data('description');
  var image = button.data('image');
  var tenure = button.data('tenure');
  var company = button.data('company');
  var url = button.data('url'); // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
  // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.

  var modal = $(this);
  modal.find('.modal-title').text(jobTitle);
  modal.find('.modal-body-content').text(description);
  modal.find('.modal-body-image').attr('src', image);
  modal.find('.modal-body-date').text(tenure);
  modal.find('.modal-body-company').html(company);
  console.log(url.search('http'));

  if (url.search("http") < 0) {
    url = "//" + url;
  }

  modal.find('.modal-body-url').attr('href', url);
});

/***/ }),

/***/ 4:
/*!*************************************************!*\
  !*** multi ./resources/js/frontend/jobModal.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/gregorysteenhagen/Desktop/ModernHobbyist/modern-hobbyist/resources/js/frontend/jobModal.js */"./resources/js/frontend/jobModal.js");


/***/ })

},[[4,"/js/manifest"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvZnJvbnRlbmQvam9iTW9kYWwuanMiXSwibmFtZXMiOlsiJCIsIm9uIiwiZXZlbnQiLCJidXR0b24iLCJyZWxhdGVkVGFyZ2V0Iiwiam9iVGl0bGUiLCJkYXRhIiwiZGVzY3JpcHRpb24iLCJpbWFnZSIsInRlbnVyZSIsImNvbXBhbnkiLCJ1cmwiLCJtb2RhbCIsImZpbmQiLCJ0ZXh0IiwiYXR0ciIsImh0bWwiLCJjb25zb2xlIiwibG9nIiwic2VhcmNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQUEsQ0FBQyxDQUFDLG9CQUFELENBQUQsQ0FBd0JDLEVBQXhCLENBQTJCLGVBQTNCLEVBQTRDLFVBQVVDLEtBQVYsRUFBaUI7QUFDekQsTUFBSUMsTUFBTSxHQUFHSCxDQUFDLENBQUNFLEtBQUssQ0FBQ0UsYUFBUCxDQUFkLENBRHlELENBQ3BCOztBQUNyQyxNQUFJQyxRQUFRLEdBQUdGLE1BQU0sQ0FBQ0csSUFBUCxDQUFZLE9BQVosQ0FBZixDQUZ5RCxDQUVwQjs7QUFDckMsTUFBSUMsV0FBVyxHQUFHSixNQUFNLENBQUNHLElBQVAsQ0FBWSxhQUFaLENBQWxCO0FBQ0EsTUFBSUUsS0FBSyxHQUFHTCxNQUFNLENBQUNHLElBQVAsQ0FBWSxPQUFaLENBQVo7QUFDQSxNQUFJRyxNQUFNLEdBQUdOLE1BQU0sQ0FBQ0csSUFBUCxDQUFZLFFBQVosQ0FBYjtBQUNBLE1BQUlJLE9BQU8sR0FBR1AsTUFBTSxDQUFDRyxJQUFQLENBQVksU0FBWixDQUFkO0FBQ0EsTUFBSUssR0FBRyxHQUFHUixNQUFNLENBQUNHLElBQVAsQ0FBWSxLQUFaLENBQVYsQ0FQeUQsQ0FRekQ7QUFDQTs7QUFDQSxNQUFJTSxLQUFLLEdBQUdaLENBQUMsQ0FBQyxJQUFELENBQWI7QUFDQVksT0FBSyxDQUFDQyxJQUFOLENBQVcsY0FBWCxFQUEyQkMsSUFBM0IsQ0FBZ0NULFFBQWhDO0FBQ0FPLE9BQUssQ0FBQ0MsSUFBTixDQUFXLHFCQUFYLEVBQWtDQyxJQUFsQyxDQUF1Q1AsV0FBdkM7QUFDQUssT0FBSyxDQUFDQyxJQUFOLENBQVcsbUJBQVgsRUFBZ0NFLElBQWhDLENBQXFDLEtBQXJDLEVBQTJDUCxLQUEzQztBQUNBSSxPQUFLLENBQUNDLElBQU4sQ0FBVyxrQkFBWCxFQUErQkMsSUFBL0IsQ0FBb0NMLE1BQXBDO0FBQ0FHLE9BQUssQ0FBQ0MsSUFBTixDQUFXLHFCQUFYLEVBQWtDRyxJQUFsQyxDQUF1Q04sT0FBdkM7QUFFQU8sU0FBTyxDQUFDQyxHQUFSLENBQVlQLEdBQUcsQ0FBQ1EsTUFBSixDQUFXLE1BQVgsQ0FBWjs7QUFDQSxNQUFJUixHQUFHLENBQUNRLE1BQUosQ0FBVyxNQUFYLElBQXFCLENBQXpCLEVBQTJCO0FBQ3ZCUixPQUFHLEdBQUcsT0FBT0EsR0FBYjtBQUNIOztBQUNEQyxPQUFLLENBQUNDLElBQU4sQ0FBVyxpQkFBWCxFQUE4QkUsSUFBOUIsQ0FBbUMsTUFBbkMsRUFBMkNKLEdBQTNDO0FBQ0gsQ0F0QkQsRSIsImZpbGUiOiIvanMvam9iTW9kYWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyIkKCcjam9iSGlnaGxpZ2h0TW9kYWwnKS5vbignc2hvdy5icy5tb2RhbCcsIGZ1bmN0aW9uIChldmVudCkge1xuICAgIHZhciBidXR0b24gPSAkKGV2ZW50LnJlbGF0ZWRUYXJnZXQpOyAvLyBCdXR0b24gdGhhdCB0cmlnZ2VyZWQgdGhlIG1vZGFsXG4gICAgdmFyIGpvYlRpdGxlID0gYnV0dG9uLmRhdGEoJ3RpdGxlJyk7IC8vIEV4dHJhY3QgaW5mbyBmcm9tIGRhdGEtKiBhdHRyaWJ1dGVzXG4gICAgdmFyIGRlc2NyaXB0aW9uID0gYnV0dG9uLmRhdGEoJ2Rlc2NyaXB0aW9uJyk7XG4gICAgdmFyIGltYWdlID0gYnV0dG9uLmRhdGEoJ2ltYWdlJyk7XG4gICAgdmFyIHRlbnVyZSA9IGJ1dHRvbi5kYXRhKCd0ZW51cmUnKTtcbiAgICB2YXIgY29tcGFueSA9IGJ1dHRvbi5kYXRhKCdjb21wYW55Jyk7XG4gICAgdmFyIHVybCA9IGJ1dHRvbi5kYXRhKCd1cmwnKTtcbiAgICAvLyBJZiBuZWNlc3NhcnksIHlvdSBjb3VsZCBpbml0aWF0ZSBhbiBBSkFYIHJlcXVlc3QgaGVyZSAoYW5kIHRoZW4gZG8gdGhlIHVwZGF0aW5nIGluIGEgY2FsbGJhY2spLlxuICAgIC8vIFVwZGF0ZSB0aGUgbW9kYWwncyBjb250ZW50LiBXZSdsbCB1c2UgalF1ZXJ5IGhlcmUsIGJ1dCB5b3UgY291bGQgdXNlIGEgZGF0YSBiaW5kaW5nIGxpYnJhcnkgb3Igb3RoZXIgbWV0aG9kcyBpbnN0ZWFkLlxuICAgIHZhciBtb2RhbCA9ICQodGhpcyk7XG4gICAgbW9kYWwuZmluZCgnLm1vZGFsLXRpdGxlJykudGV4dChqb2JUaXRsZSk7XG4gICAgbW9kYWwuZmluZCgnLm1vZGFsLWJvZHktY29udGVudCcpLnRleHQoZGVzY3JpcHRpb24pO1xuICAgIG1vZGFsLmZpbmQoJy5tb2RhbC1ib2R5LWltYWdlJykuYXR0cignc3JjJyxpbWFnZSk7XG4gICAgbW9kYWwuZmluZCgnLm1vZGFsLWJvZHktZGF0ZScpLnRleHQodGVudXJlKTtcbiAgICBtb2RhbC5maW5kKCcubW9kYWwtYm9keS1jb21wYW55JykuaHRtbChjb21wYW55KTtcblxuICAgIGNvbnNvbGUubG9nKHVybC5zZWFyY2goJ2h0dHAnKSk7XG4gICAgaWYgKHVybC5zZWFyY2goXCJodHRwXCIpIDwgMCl7XG4gICAgICAgIHVybCA9IFwiLy9cIiArIHVybDtcbiAgICB9XG4gICAgbW9kYWwuZmluZCgnLm1vZGFsLWJvZHktdXJsJykuYXR0cignaHJlZicsIHVybCk7XG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=