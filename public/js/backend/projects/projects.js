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

/***/ 2:
/*!*********************************************************!*\
  !*** multi ./resources/js/backend/projects/projects.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/gregorysteenhagen/Desktop/Projects/steamengine/resources/js/backend/projects/projects.js */"./resources/js/backend/projects/projects.js");


/***/ })

},[[2,"/js/manifest"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYmFja2VuZC9wcm9qZWN0cy9wcm9qZWN0cy5qcyJdLCJuYW1lcyI6WyIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsIkRhdGFUYWJsZSIsInJlc2V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQUEsQ0FBQyxDQUFDQyxRQUFELENBQUQsQ0FBWUMsS0FBWixDQUFrQixZQUFZO0FBQzFCRixHQUFDLENBQUMsZ0JBQUQsQ0FBRCxDQUFvQkcsU0FBcEI7QUFDQSxNQUFJQyxLQUFLLEdBQUcsS0FBWixDQUYwQixDQUcxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSCxDQWxFRCxFIiwiZmlsZSI6Ii9qcy9iYWNrZW5kL3Byb2plY3RzL3Byb2plY3RzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xuICAgICQoJyNwcm9qZWN0c1RhYmxlJykuRGF0YVRhYmxlKCk7XG4gICAgdmFyIHJlc2V0ID0gZmFsc2U7XG4gICAgLy8gJCgnLnN3aXRjaC1pbnB1dCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xuICAgIC8vICAgICBpZiAocmVzZXQpIHtcbiAgICAvLyAgICAgICAgIHJlc2V0ID0gZmFsc2U7XG4gICAgLy8gICAgIH0gZWxzZSB7XG4gICAgLy8gICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIC8vICAgICAgICAgdHJ5IHtcbiAgICAvLyAgICAgICAgICAgICB2YXIgcm91dGUgPSAkKHRoaXMpLmRhdGEoJ3VybCcpO1xuICAgIC8vICAgICAgICAgICAgIHZhciBjc3JmX3Rva2VuID0gJCgnI3Byb2plY3RUYWJsZUNTUkYnKS52YWwoKTtcbiAgICAvL1xuICAgIC8vICAgICAgICAgICAgIHZhciBidXR0b24gPSAkKHRoaXMpO1xuICAgIC8vICAgICAgICAgICAgICQuYWpheCh7XG4gICAgLy8gICAgICAgICAgICAgICAgIC8qIHRoZSByb3V0ZSBwb2ludGluZyB0byB0aGUgcG9zdCBmdW5jdGlvbiAqL1xuICAgIC8vICAgICAgICAgICAgICAgICB1cmw6IHJvdXRlLFxuICAgIC8vICAgICAgICAgICAgICAgICB0eXBlOiAnUE9TVCcsXG4gICAgLy8gICAgICAgICAgICAgICAgIC8qIHNlbmQgdGhlIGNzcmYtdG9rZW4gYW5kIHRoZSBpbnB1dCB0byB0aGUgY29udHJvbGxlciAqL1xuICAgIC8vICAgICAgICAgICAgICAgICBkYXRhOiB7X3Rva2VuOiBjc3JmX3Rva2VufSxcbiAgICAvLyAgICAgICAgICAgICAgICAgZGF0YVR5cGU6ICdKU09OJyxcbiAgICAvLyAgICAgICAgICAgICAgICAgLyogcmVtaW5kIHRoYXQgJ2RhdGEnIGlzIHRoZSByZXNwb25zZSBvZiB0aGUgQWpheENvbnRyb2xsZXIgKi9cbiAgICAvLyAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIHJlc2V0ID0gdHJ1ZTtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbi5jbGljaygpO1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgdmFyIGh0bWwgPSAnPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LXN1Y2Nlc3NcIiByb2xlPVwiYWxlcnRcIj4nICtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAnICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImNsb3NlXCIgZGF0YS1kaXNtaXNzPVwiYWxlcnRcIiBhcmlhLWxhYmVsPVwiQ2xvc2VcIj4nICtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAnICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+JnRpbWVzOzwvc3Bhbj4nICtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAnICAgICAgICA8L2J1dHRvbj4nICtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAnJyArIGRhdGFbJ21lc3NhZ2UnXSArXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgJyAgICA8L2Rpdj4nO1xuICAgIC8vXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAkKCcjbWFpbkNvbnRhaW5lcicpLnByZXBlbmQoaHRtbCk7XG4gICAgLy9cbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAkKFwiLmFsZXJ0XCIpLmZhZGVUbyg1MDAsIDApLnNsaWRlVXAoNTAwLCBmdW5jdGlvbiAoKSB7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICQodGhpcykucmVtb3ZlKCk7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICB9LCA0MDAwKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgfSxcbiAgICAvLyAgICAgICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChlcnIpIHtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIHZhciBodG1sID0gJzxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1kYW5nZXJcIiByb2xlPVwiYWxlcnRcIj4nICtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAnICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImNsb3NlXCIgZGF0YS1kaXNtaXNzPVwiYWxlcnRcIiBhcmlhLWxhYmVsPVwiQ2xvc2VcIj4nICtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAnICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+JnRpbWVzOzwvc3Bhbj4nICtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAnICAgICAgICA8L2J1dHRvbj4nICtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAnJyArIGVyclsncmVzcG9uc2VKU09OJ11bJ21lc3NhZ2UnXSArXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgJyAgICA8L2Rpdj4nO1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgJCgnI21haW5Db250YWluZXInKS5wcmVwZW5kKGh0bWwpO1xuICAgIC8vXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgJChcIi5hbGVydFwiKS5mYWRlVG8oNTAwLCAwKS5zbGlkZVVwKDUwMCwgZnVuY3Rpb24gKCkge1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLnJlbW92ZSgpO1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgfSwgNDAwMCk7XG4gICAgLy8gICAgICAgICAgICAgICAgIH1cbiAgICAvLyAgICAgICAgICAgICB9KTtcbiAgICAvLyAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgIC8vICAgICAgICAgICAgIHZhciBodG1sID0gJzxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1kYW5nZXJcIiByb2xlPVwiYWxlcnRcIj4nICtcbiAgICAvLyAgICAgICAgICAgICAgICAgJyAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJjbG9zZVwiIGRhdGEtZGlzbWlzcz1cImFsZXJ0XCIgYXJpYS1sYWJlbD1cIkNsb3NlXCI+JyArXG4gICAgLy8gICAgICAgICAgICAgICAgICcgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mdGltZXM7PC9zcGFuPicgK1xuICAgIC8vICAgICAgICAgICAgICAgICAnICAgICAgICA8L2J1dHRvbj4nICtcbiAgICAvLyAgICAgICAgICAgICAgICAgJyBPb3BzISBTb21ldGhpbmcgd2VudCB3cm9uZyBvbiBvdXIgZW5kLicgK1xuICAgIC8vICAgICAgICAgICAgICAgICAnICAgIDwvZGl2Pic7XG4gICAgLy8gICAgICAgICAgICAgJCgnI21haW5Db250YWluZXInKS5wcmVwZW5kKGh0bWwpO1xuICAgIC8vICAgICAgICAgfVxuICAgIC8vICAgICB9XG4gICAgLy8gfSk7XG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=