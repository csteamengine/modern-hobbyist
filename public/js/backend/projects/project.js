(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["/js/backend/projects/project"],{

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./resources/js/backend/projects/project.js":
/*!**************************************************!*\
  !*** ./resources/js/backend/projects/project.js ***!
  \**************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.js");
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bootstrap__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var summernote__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! summernote */ "./node_modules/summernote/dist/summernote.js");
/* harmony import */ var summernote__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(summernote__WEBPACK_IMPORTED_MODULE_1__);


$(document).ready(function () {
  var $fileInput = $('#images').on('change', function () {
    readImage();
  });

  if ($('#preview-images-zone-existing').children().length == 0) {
    $('#preview-images-zone-existing').hide();
  }

  $("#preview-images-zone-existing").sortable();
  $('.image-cancel').on('click', function () {
    var no = $(this).data('no');
    $(".preview-image.preview-show-" + no).remove(); // if($('#preview-images-zone-existing').children().length == 0){
    //     $('#preview-images-zone-existing').hide();
    // }
  });
  $('.image-url').on('click', function () {
    /* Get the text field */
    var imageURL = $(this).data('url');
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val(imageURL).select();
    /* Copy the text inside the text field */

    document.execCommand("copy");
  });
  $('#clearImages').on('click', function () {
    $fileInput.val('');
    $("#preview-images-zone").children('.preview-image').remove();
    $("#preview-images-zone").hide();
    $('#newImagesLabel').hide();
  });
  $(document).ready(function () {
    $('#summernote').summernote({
      height: 300
    });
  });
});
var num = 4;

function readImage() {
  if (window.File && window.FileList && window.FileReader) {
    var files = event.target.files; //FileList object

    var output = $("#preview-images-zone");

    for (var i = 0; i < files.length; i++) {
      var file = files[i];
      if (!file.type.match('image')) continue;
      var picReader = new FileReader();
      picReader.addEventListener('load', function (event) {
        var picFile = event.target;
        var html = '<div class="preview-image preview-show-' + num + '">' + '<div class="image-zone">' + '<img id="pro-img-' + num + '" src="' + picFile.result + '">' + '</div>' + '</div>';
        output.append(html);
        num = num + 1;
      });
      picReader.readAsDataURL(file);
    }

    output.show();
    $('#newImagesLabel').show();
  } else {
    console.log('File format not supported');
  }
}

/***/ }),

/***/ 4:
/*!********************************************************!*\
  !*** multi ./resources/js/backend/projects/project.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/gregorysteenhagen/Desktop/Projects/steamengine/resources/js/backend/projects/project.js */"./resources/js/backend/projects/project.js");


/***/ })

},[[4,"/js/manifest","/js/vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9iYWNrZW5kL3Byb2plY3RzL3Byb2plY3QuanMiXSwibmFtZXMiOlsiJCIsImRvY3VtZW50IiwicmVhZHkiLCIkZmlsZUlucHV0Iiwib24iLCJyZWFkSW1hZ2UiLCJjaGlsZHJlbiIsImxlbmd0aCIsImhpZGUiLCJzb3J0YWJsZSIsIm5vIiwiZGF0YSIsInJlbW92ZSIsImltYWdlVVJMIiwiJHRlbXAiLCJhcHBlbmQiLCJ2YWwiLCJzZWxlY3QiLCJleGVjQ29tbWFuZCIsInN1bW1lcm5vdGUiLCJoZWlnaHQiLCJudW0iLCJ3aW5kb3ciLCJGaWxlIiwiRmlsZUxpc3QiLCJGaWxlUmVhZGVyIiwiZmlsZXMiLCJldmVudCIsInRhcmdldCIsIm91dHB1dCIsImkiLCJmaWxlIiwidHlwZSIsIm1hdGNoIiwicGljUmVhZGVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsInBpY0ZpbGUiLCJodG1sIiwicmVzdWx0IiwicmVhZEFzRGF0YVVSTCIsInNob3ciLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRDQUE0Qzs7QUFFNUM7Ozs7Ozs7Ozs7Ozs7QUNuQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQUEsQ0FBQyxDQUFDQyxRQUFELENBQUQsQ0FBWUMsS0FBWixDQUFrQixZQUFXO0FBQ3pCLE1BQUlDLFVBQVUsR0FBR0gsQ0FBQyxDQUFDLFNBQUQsQ0FBRCxDQUFhSSxFQUFiLENBQWdCLFFBQWhCLEVBQTBCLFlBQVU7QUFDakRDLGFBQVM7QUFDWixHQUZnQixDQUFqQjs7QUFJQSxNQUFHTCxDQUFDLENBQUMsK0JBQUQsQ0FBRCxDQUFtQ00sUUFBbkMsR0FB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Q2QsTUFBUCxDQUFjc0IsSUFBZDtBQUNBaEIsV0FBRyxHQUFHQSxHQUFHLEdBQUcsQ0FBWjtBQUNILE9BWEQ7QUFhQWEsZUFBUyxDQUFDSyxhQUFWLENBQXdCUixJQUF4QjtBQUNIOztBQUNERixVQUFNLENBQUNXLElBQVA7QUFDQXhDLEtBQUMsQ0FBQyxpQkFBRCxDQUFELENBQXFCd0MsSUFBckI7QUFDSCxHQTNCRCxNQTJCTztBQUNIQyxXQUFPLENBQUNDLEdBQVIsQ0FBWSwyQkFBWjtBQUNIO0FBQ0osQyIsImZpbGUiOiIvanMvYmFja2VuZC9wcm9qZWN0cy9wcm9qZWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGc7XG5cbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXG5nID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcztcbn0pKCk7XG5cbnRyeSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuXHRnID0gZyB8fCBuZXcgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xufSBjYXRjaCAoZSkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcbn1cblxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3Ncbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cblxubW9kdWxlLmV4cG9ydHMgPSBnO1xuIiwiaW1wb3J0IFwiYm9vdHN0cmFwXCI7XG5pbXBvcnQgXCJzdW1tZXJub3RlXCI7XG5cbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuICAgIHZhciAkZmlsZUlucHV0ID0gJCgnI2ltYWdlcycpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbigpe1xuICAgICAgICByZWFkSW1hZ2UoKTtcbiAgICB9KTtcblxuICAgIGlmKCQoJyNwcmV2aWV3LWltYWdlcy16b25lLWV4aXN0aW5nJykuY2hpbGRyZW4oKS5sZW5ndGggPT0gMCl7XG4gICAgICAgICQoJyNwcmV2aWV3LWltYWdlcy16b25lLWV4aXN0aW5nJykuaGlkZSgpO1xuICAgIH1cblxuICAgICQoIFwiI3ByZXZpZXctaW1hZ2VzLXpvbmUtZXhpc3RpbmdcIiApLnNvcnRhYmxlKCk7XG5cbiAgICAkKCcuaW1hZ2UtY2FuY2VsJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIGxldCBubyA9ICQodGhpcykuZGF0YSgnbm8nKTtcbiAgICAgICAgJChcIi5wcmV2aWV3LWltYWdlLnByZXZpZXctc2hvdy1cIitubykucmVtb3ZlKCk7XG5cbiAgICAgICAgLy8gaWYoJCgnI3ByZXZpZXctaW1hZ2VzLXpvbmUtZXhpc3RpbmcnKS5jaGlsZHJlbigpLmxlbmd0aCA9PSAwKXtcbiAgICAgICAgLy8gICAgICQoJyNwcmV2aWV3LWltYWdlcy16b25lLWV4aXN0aW5nJykuaGlkZSgpO1xuICAgICAgICAvLyB9XG4gICAgfSk7XG5cbiAgICAkKCcuaW1hZ2UtdXJsJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICAgICAgLyogR2V0IHRoZSB0ZXh0IGZpZWxkICovXG4gICAgICAgIHZhciBpbWFnZVVSTCA9ICQodGhpcykuZGF0YSgndXJsJyk7XG5cbiAgICAgICAgdmFyICR0ZW1wID0gJChcIjxpbnB1dD5cIik7XG4gICAgICAgICQoXCJib2R5XCIpLmFwcGVuZCgkdGVtcCk7XG4gICAgICAgICR0ZW1wLnZhbChpbWFnZVVSTCkuc2VsZWN0KCk7XG5cbiAgICAgICAgLyogQ29weSB0aGUgdGV4dCBpbnNpZGUgdGhlIHRleHQgZmllbGQgKi9cbiAgICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoXCJjb3B5XCIpO1xuICAgIH0pO1xuXG4gICAgJCgnI2NsZWFySW1hZ2VzJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICAgICAgJGZpbGVJbnB1dC52YWwoJycpO1xuICAgICAgICAkKFwiI3ByZXZpZXctaW1hZ2VzLXpvbmVcIikuY2hpbGRyZW4oJy5wcmV2aWV3LWltYWdlJykucmVtb3ZlKCk7XG4gICAgICAgICQoXCIjcHJldmlldy1pbWFnZXMtem9uZVwiKS5oaWRlKCk7XG4gICAgICAgICQoJyNuZXdJbWFnZXNMYWJlbCcpLmhpZGUoKTtcbiAgICB9KTtcblxuICAgICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuICAgICAgICAkKCcjc3VtbWVybm90ZScpLnN1bW1lcm5vdGUoe1xuICAgICAgICAgICAgaGVpZ2h0OiAzMDAsXG4gICAgICAgIH0pO1xuICAgIH0pO1xufSk7XG5cblxuXG52YXIgbnVtID0gNDtcbmZ1bmN0aW9uIHJlYWRJbWFnZSgpIHtcbiAgICBpZiAod2luZG93LkZpbGUgJiYgd2luZG93LkZpbGVMaXN0ICYmIHdpbmRvdy5GaWxlUmVhZGVyKSB7XG4gICAgICAgIHZhciBmaWxlcyA9IGV2ZW50LnRhcmdldC5maWxlczsgLy9GaWxlTGlzdCBvYmplY3RcbiAgICAgICAgdmFyIG91dHB1dCA9ICQoXCIjcHJldmlldy1pbWFnZXMtem9uZVwiKTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZpbGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgZmlsZSA9IGZpbGVzW2ldO1xuICAgICAgICAgICAgaWYgKCFmaWxlLnR5cGUubWF0Y2goJ2ltYWdlJykpIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICB2YXIgcGljUmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcblxuICAgICAgICAgICAgcGljUmVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICB2YXIgcGljRmlsZSA9IGV2ZW50LnRhcmdldDtcbiAgICAgICAgICAgICAgICB2YXIgaHRtbCA9XG4gICAgICAgICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwicHJldmlldy1pbWFnZSBwcmV2aWV3LXNob3ctJyArIG51bSArICdcIj4nICtcbiAgICAgICAgICAgICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwiaW1hZ2Utem9uZVwiPicgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICc8aW1nIGlkPVwicHJvLWltZy0nICsgbnVtICsgJ1wiIHNyYz1cIicgKyBwaWNGaWxlLnJlc3VsdCArICdcIj4nICtcbiAgICAgICAgICAgICAgICAgICAgICAgICc8L2Rpdj4nICtcbiAgICAgICAgICAgICAgICAgICAgJzwvZGl2Pic7XG5cbiAgICAgICAgICAgICAgICBvdXRwdXQuYXBwZW5kKGh0bWwpO1xuICAgICAgICAgICAgICAgIG51bSA9IG51bSArIDE7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcGljUmVhZGVyLnJlYWRBc0RhdGFVUkwoZmlsZSk7XG4gICAgICAgIH1cbiAgICAgICAgb3V0cHV0LnNob3coKTtcbiAgICAgICAgJCgnI25ld0ltYWdlc0xhYmVsJykuc2hvdygpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdGaWxlIGZvcm1hdCBub3Qgc3VwcG9ydGVkJyk7XG4gICAgfVxufVxuXG4iXSwic291cmNlUm9vdCI6IiJ9