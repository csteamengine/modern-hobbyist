(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["/js/backend/projects/projects"],{

/***/ "./resources/js/backend/projects/projects.js":
/*!***************************************************!*\
  !*** ./resources/js/backend/projects/projects.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

$(document).ready(function () {
  $('#projectsTable').DataTable();
  var reset = false; // $('.switch-input').on('click', function (event) {
  //     if (reset) {
  //         reset = false;
  //     } else {
  //         event.preventDefault();
  //         try {
  //             var route = $(this).data('url');
  //             var csrf_token = $('#projectTableCSRF').val();
  //
  //             var button = $(this);
  //             $.ajax({
  //                 /* the route pointing to the post function */
  //                 url: route,
  //                 type: 'POST',
  //                 /* send the csrf-token and the input to the controller */
  //                 data: {_token: csrf_token},
  //                 dataType: 'JSON',
  //                 /* remind that 'data' is the response of the AjaxController */
  //                 success: function (data) {
  //                     reset = true;
  //                     button.click();
  //                     var html = '<div class="alert alert-success" role="alert">' +
  //                         '        <button type="button" class="close" data-dismiss="alert" aria-label="Close">' +
  //                         '            <span aria-hidden="true">&times;</span>' +
  //                         '        </button>' +
  //                         '' + data['message'] +
  //                         '    </div>';
  //
  //                     $('#mainContainer').prepend(html);
  //
  //                     window.setTimeout(function () {
  //                         $(".alert").fadeTo(500, 0).slideUp(500, function () {
  //                             $(this).remove();
  //                         });
  //                     }, 4000);
  //                 },
  //                 error: function (err) {
  //                     var html = '<div class="alert alert-danger" role="alert">' +
  //                         '        <button type="button" class="close" data-dismiss="alert" aria-label="Close">' +
  //                         '            <span aria-hidden="true">&times;</span>' +
  //                         '        </button>' +
  //                         '' + err['responseJSON']['message'] +
  //                         '    </div>';
  //                     $('#mainContainer').prepend(html);
  //
  //                     window.setTimeout(function () {
  //                         $(".alert").fadeTo(500, 0).slideUp(500, function () {
  //                             $(this).remove();
  //                         });
  //                     }, 4000);
  //                 }
  //             });
  //         } catch (err) {
  //             var html = '<div class="alert alert-danger" role="alert">' +
  //                 '        <button type="button" class="close" data-dismiss="alert" aria-label="Close">' +
  //                 '            <span aria-hidden="true">&times;</span>' +
  //                 '        </button>' +
  //                 ' Oops! Something went wrong on our end.' +
  //                 '    </div>';
  //             $('#mainContainer').prepend(html);
  //         }
  //     }
  // });
});

/***/ }),

/***/ 7:
/*!*********************************************************!*\
  !*** multi ./resources/js/backend/projects/projects.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/gregorysteenhagen/Desktop/ModernHobbyist/modern-hobbyist/resources/js/backend/projects/projects.js */"./resources/js/backend/projects/projects.js");


/***/ })

},[[7,"/js/manifest"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYmFja2VuZC9wcm9qZWN0cy9wcm9qZWN0cy5qcyJdLCJuYW1lcyI6WyIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsIkRhdGFUYWJsZSIsInJlc2V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQUEsQ0FBQyxDQUFDQyxRQUFELENBQUQsQ0FBWUMsS0FBWixDQUFrQixZQUFZO0FBQzFCRixHQUFDLENBQUMsZ0JBQUQsQ0FBRCxDQUFvQkcsU0FBcEI7QUFDQSxNQUFJQyxLQUFLLEdBQUcsS0FBWixDQUYwQixDQUkxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSCxDQW5FRCxFIiwiZmlsZSI6Ii9qcy9iYWNrZW5kL3Byb2plY3RzL3Byb2plY3RzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xuICAgICQoJyNwcm9qZWN0c1RhYmxlJykuRGF0YVRhYmxlKCk7XG4gICAgdmFyIHJlc2V0ID0gZmFsc2U7XG5cbiAgICAvLyAkKCcuc3dpdGNoLWlucHV0Jykub24oJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgLy8gICAgIGlmIChyZXNldCkge1xuICAgIC8vICAgICAgICAgcmVzZXQgPSBmYWxzZTtcbiAgICAvLyAgICAgfSBlbHNlIHtcbiAgICAvLyAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgLy8gICAgICAgICB0cnkge1xuICAgIC8vICAgICAgICAgICAgIHZhciByb3V0ZSA9ICQodGhpcykuZGF0YSgndXJsJyk7XG4gICAgLy8gICAgICAgICAgICAgdmFyIGNzcmZfdG9rZW4gPSAkKCcjcHJvamVjdFRhYmxlQ1NSRicpLnZhbCgpO1xuICAgIC8vXG4gICAgLy8gICAgICAgICAgICAgdmFyIGJ1dHRvbiA9ICQodGhpcyk7XG4gICAgLy8gICAgICAgICAgICAgJC5hamF4KHtcbiAgICAvLyAgICAgICAgICAgICAgICAgLyogdGhlIHJvdXRlIHBvaW50aW5nIHRvIHRoZSBwb3N0IGZ1bmN0aW9uICovXG4gICAgLy8gICAgICAgICAgICAgICAgIHVybDogcm91dGUsXG4gICAgLy8gICAgICAgICAgICAgICAgIHR5cGU6ICdQT1NUJyxcbiAgICAvLyAgICAgICAgICAgICAgICAgLyogc2VuZCB0aGUgY3NyZi10b2tlbiBhbmQgdGhlIGlucHV0IHRvIHRoZSBjb250cm9sbGVyICovXG4gICAgLy8gICAgICAgICAgICAgICAgIGRhdGE6IHtfdG9rZW46IGNzcmZfdG9rZW59LFxuICAgIC8vICAgICAgICAgICAgICAgICBkYXRhVHlwZTogJ0pTT04nLFxuICAgIC8vICAgICAgICAgICAgICAgICAvKiByZW1pbmQgdGhhdCAnZGF0YScgaXMgdGhlIHJlc3BvbnNlIG9mIHRoZSBBamF4Q29udHJvbGxlciAqL1xuICAgIC8vICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgcmVzZXQgPSB0cnVlO1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgYnV0dG9uLmNsaWNrKCk7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICB2YXIgaHRtbCA9ICc8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtc3VjY2Vzc1wiIHJvbGU9XCJhbGVydFwiPicgK1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICcgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiY2xvc2VcIiBkYXRhLWRpc21pc3M9XCJhbGVydFwiIGFyaWEtbGFiZWw9XCJDbG9zZVwiPicgK1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICcgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mdGltZXM7PC9zcGFuPicgK1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICcgICAgICAgIDwvYnV0dG9uPicgK1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICcnICsgZGF0YVsnbWVzc2FnZSddICtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAnICAgIDwvZGl2Pic7XG4gICAgLy9cbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICQoJyNtYWluQ29udGFpbmVyJykucHJlcGVuZChodG1sKTtcbiAgICAvL1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICQoXCIuYWxlcnRcIikuZmFkZVRvKDUwMCwgMCkuc2xpZGVVcCg1MDAsIGZ1bmN0aW9uICgpIHtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmUoKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIH0sIDQwMDApO1xuICAgIC8vICAgICAgICAgICAgICAgICB9LFxuICAgIC8vICAgICAgICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGVycikge1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgdmFyIGh0bWwgPSAnPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiIHJvbGU9XCJhbGVydFwiPicgK1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICcgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiY2xvc2VcIiBkYXRhLWRpc21pc3M9XCJhbGVydFwiIGFyaWEtbGFiZWw9XCJDbG9zZVwiPicgK1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICcgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mdGltZXM7PC9zcGFuPicgK1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICcgICAgICAgIDwvYnV0dG9uPicgK1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICcnICsgZXJyWydyZXNwb25zZUpTT04nXVsnbWVzc2FnZSddICtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAnICAgIDwvZGl2Pic7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAkKCcjbWFpbkNvbnRhaW5lcicpLnByZXBlbmQoaHRtbCk7XG4gICAgLy9cbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAkKFwiLmFsZXJ0XCIpLmZhZGVUbyg1MDAsIDApLnNsaWRlVXAoNTAwLCBmdW5jdGlvbiAoKSB7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICQodGhpcykucmVtb3ZlKCk7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICB9LCA0MDAwKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgfVxuICAgIC8vICAgICAgICAgICAgIH0pO1xuICAgIC8vICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgLy8gICAgICAgICAgICAgdmFyIGh0bWwgPSAnPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiIHJvbGU9XCJhbGVydFwiPicgK1xuICAgIC8vICAgICAgICAgICAgICAgICAnICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImNsb3NlXCIgZGF0YS1kaXNtaXNzPVwiYWxlcnRcIiBhcmlhLWxhYmVsPVwiQ2xvc2VcIj4nICtcbiAgICAvLyAgICAgICAgICAgICAgICAgJyAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZ0aW1lczs8L3NwYW4+JyArXG4gICAgLy8gICAgICAgICAgICAgICAgICcgICAgICAgIDwvYnV0dG9uPicgK1xuICAgIC8vICAgICAgICAgICAgICAgICAnIE9vcHMhIFNvbWV0aGluZyB3ZW50IHdyb25nIG9uIG91ciBlbmQuJyArXG4gICAgLy8gICAgICAgICAgICAgICAgICcgICAgPC9kaXY+JztcbiAgICAvLyAgICAgICAgICAgICAkKCcjbWFpbkNvbnRhaW5lcicpLnByZXBlbmQoaHRtbCk7XG4gICAgLy8gICAgICAgICB9XG4gICAgLy8gICAgIH1cbiAgICAvLyB9KTtcbn0pO1xuXG4iXSwic291cmNlUm9vdCI6IiJ9