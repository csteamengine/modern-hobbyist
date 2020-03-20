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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9iYWNrZW5kL3Byb2plY3RzL3Byb2plY3QuanMiXSwibmFtZXMiOlsiJCIsImRvY3VtZW50IiwicmVhZHkiLCIkZmlsZUlucHV0Iiwib24iLCJyZWFkSW1hZ2UiLCJjaGlsZHJlbiIsImxlbmd0aCIsImhpZGUiLCJzb3J0YWJsZSIsIm5vIiwiZGF0YSIsInJlbW92ZSIsInZhbCIsInN1bW1lcm5vdGUiLCJoZWlnaHQiLCJudW0iLCJ3aW5kb3ciLCJGaWxlIiwiRmlsZUxpc3QiLCJGaWxlUmVhZGVyIiwiZmlsZXMiLCJldmVudCIsInRhcmdldCIsIm91dHB1dCIsImkiLCJmaWxlIiwidHlwZSIsIm1hdGNoIiwicGljUmVhZGVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsInBpY0ZpbGUiLCJodG1sIiwicmVzdWx0IiwiYXBwZW5kIiwicmVhZEFzRGF0YVVSTCIsInNob3ciLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRDQUE0Qzs7QUFFNUM7Ozs7Ozs7Ozs7Ozs7QUNuQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQUEsQ0FBQyxDQUFDQyxRQUFELENBQUQsQ0FBWUMsS0FBWixDQUFrQixZQUFXO0FBQ3pCLE1BQUlDLFVBQVUsR0FBR0gsQ0FBQyxDQUFDLFNBQUQsQ0FBRCxDQUFhSSxFQUFiLENBQWdCLFFBQWhCLEVBQTBCLFlBQVU7QUFDakRDLGFBQVM7QUFDWixHQUZnQixDQUFqQjs7QUFJQSxNQUFHTCxDQUFDLENBQUMsK0JBQUQsQ0FBRCxDQUFtQ00sUUFBbkMsR0FBOENDLE1BQTlDLElBQXdELENBQTNELEVBQTZEO0FBQ3pEUCxLQUFDLENBQUMsK0JBQUQsQ0FBRCxDQUFtQ1EsSUFBbkM7QUFDSDs7QUFFRFIsR0FBQyxDQUFFLCtCQUFGLENBQUQsQ0FBcUNTLFFBQXJDO0FBRUFULEdBQUMsQ0FBQyxlQUFELENBQUQsQ0FBbUJJLEVBQW5CLENBQXNCLE9BQXRCLEVBQStCLFlBQVc7QUFDdEMsUUFBSU0sRUFBRSxHQUFHVixDQUFDLENBQUMsSUFBRCxDQUFELENBQVFXLElBQVIsQ0FBYSxJQUFiLENBQVQ7QUFDQVgsS0FBQyxDQUFDLGlDQUErQlUsRUFBaEMsQ0FBRCxDQUFxQ0UsTUFBckMsR0FGc0MsQ0FJdEM7QUFDQTtBQUNBO0FBQ0gsR0FQRDtBQVNBWixHQUFDLENBQUMsY0FBRCxDQUFELENBQWtCSSxFQUFsQixDQUFxQixPQUFyQixFQUE4QixZQUFVO0FBQ3BDRCxjQUFVLENBQUNVLEdBQVgsQ0FBZSxFQUFmO0FBQ0FiLEtBQUMsQ0FBQyxzQkFBRCxDQUFELENBQTBCTSxRQUExQixDQUFtQyxnQkFBbkMsRUFBcURNLE1BQXJEO0FBQ0FaLEtBQUMsQ0FBQyxzQkFBRCxDQUFELENBQTBCUSxJQUExQjtBQUNBUixLQUFDLENBQUMsaUJBQUQsQ0FBRCxDQUFxQlEsSUFBckI7QUFDSCxHQUxEO0FBT0FSLEdBQUMsQ0FBQ0MsUUFBRCxDQUFELENBQVlDLEtBQVosQ0FBa0IsWUFBVztBQUN6QkYsS0FBQyxDQUFDLGFBQUQsQ0FBRCxDQUFpQmMsVUFBakIsQ0FBNEI7QUFDeEJDLFlBQU0sRUFBRTtBQURnQixLQUE1QjtBQUdILEdBSkQ7QUFLSCxDQWhDRDtBQW9DQSxJQUFJQyxHQUFHLEdBQUcsQ0FBVjs7QUFDQSxTQUFTWCxTQUFULEdBQXFCO0FBQ2pCLE1BQUlZLE1BQU0sQ0FBQ0MsSUFBUCxJQUFlRCxNQUFNLENBQUNFLFFBQXRCLElBQWtDRixNQUFNLENBQUNHLFVBQTdDLEVBQXlEO0FBQ3JELFFBQUlDLEtBQUssR0FBR0MsS0FBSyxDQUFDQyxNQUFOLENBQWFGLEtBQXpCLENBRHFELENBQ3JCOztBQUNoQyxRQUFJRyxNQUFNLEdBQUd4QixDQUFDLENBQUMsc0JBQUQsQ0FBZDs7QUFFQSxTQUFLLElBQUl5QixDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHSixLQUFLLENBQUNkLE1BQTFCLEVBQWtDa0IsQ0FBQyxFQUFuQyxFQUF1QztBQUNuQyxVQUFJQyxJQUFJLEdBQUdMLEtBQUssQ0FBQ0ksQ0FBRCxDQUFoQjtBQUNBLFVBQUksQ0FBQ0MsSUFBSSxDQUFDQyxJQUFMLENBQVVDLEtBQVYsQ0FBZ0IsT0FBaEIsQ0FBTCxFQUErQjtBQUUvQixVQUFJQyxTQUFTLEdBQUcsSUFBSVQsVUFBSixFQUFoQjtBQUVBUyxlQUFTLENBQUNDLGdCQUFWLENBQTJCLE1BQTNCLEVBQW1DLFVBQVVSLEtBQVYsRUFBaUI7QUFDaEQsWUFBSVMsT0FBTyxHQUFHVCxLQUFLLENBQUNDLE1BQXBCO0FBQ0EsWUFBSVMsSUFBSSxHQUNKLDRDQUE0Q2hCLEdBQTVDLEdBQWtELElBQWxELEdBQ0ksMEJBREosR0FFUSxtQkFGUixHQUU4QkEsR0FGOUIsR0FFb0MsU0FGcEMsR0FFZ0RlLE9BQU8sQ0FBQ0UsTUFGeEQsR0FFaUUsSUFGakUsR0FHSSxRQUhKLEdBSUEsUUFMSjtBQU9BVCxjQUFNLENBQUNVLE1BQVAsQ0FBY0YsSUFBZDtBQUNBaEIsV0FBRyxHQUFHQSxHQUFHLEdBQUcsQ0FBWjtBQUNILE9BWEQ7QUFhQWEsZUFBUyxDQUFDTSxhQUFWLENBQXdCVCxJQUF4QjtBQUNIOztBQUNERixVQUFNLENBQUNZLElBQVA7QUFDQXBDLEtBQUMsQ0FBQyxpQkFBRCxDQUFELENBQXFCb0MsSUFBckI7QUFDSCxHQTNCRCxNQTJCTztBQUNIQyxXQUFPLENBQUNDLEdBQVIsQ0FBWSwyQkFBWjtBQUNIO0FBQ0osQyIsImZpbGUiOiIvanMvYmFja2VuZC9wcm9qZWN0cy9wcm9qZWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGc7XG5cbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXG5nID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcztcbn0pKCk7XG5cbnRyeSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuXHRnID0gZyB8fCBuZXcgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xufSBjYXRjaCAoZSkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcbn1cblxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3Ncbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cblxubW9kdWxlLmV4cG9ydHMgPSBnO1xuIiwiaW1wb3J0IFwiYm9vdHN0cmFwXCI7XG5pbXBvcnQgXCJzdW1tZXJub3RlXCI7XG5cbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuICAgIHZhciAkZmlsZUlucHV0ID0gJCgnI2ltYWdlcycpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbigpe1xuICAgICAgICByZWFkSW1hZ2UoKTtcbiAgICB9KTtcblxuICAgIGlmKCQoJyNwcmV2aWV3LWltYWdlcy16b25lLWV4aXN0aW5nJykuY2hpbGRyZW4oKS5sZW5ndGggPT0gMCl7XG4gICAgICAgICQoJyNwcmV2aWV3LWltYWdlcy16b25lLWV4aXN0aW5nJykuaGlkZSgpO1xuICAgIH1cblxuICAgICQoIFwiI3ByZXZpZXctaW1hZ2VzLXpvbmUtZXhpc3RpbmdcIiApLnNvcnRhYmxlKCk7XG5cbiAgICAkKCcuaW1hZ2UtY2FuY2VsJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIGxldCBubyA9ICQodGhpcykuZGF0YSgnbm8nKTtcbiAgICAgICAgJChcIi5wcmV2aWV3LWltYWdlLnByZXZpZXctc2hvdy1cIitubykucmVtb3ZlKCk7XG5cbiAgICAgICAgLy8gaWYoJCgnI3ByZXZpZXctaW1hZ2VzLXpvbmUtZXhpc3RpbmcnKS5jaGlsZHJlbigpLmxlbmd0aCA9PSAwKXtcbiAgICAgICAgLy8gICAgICQoJyNwcmV2aWV3LWltYWdlcy16b25lLWV4aXN0aW5nJykuaGlkZSgpO1xuICAgICAgICAvLyB9XG4gICAgfSk7XG5cbiAgICAkKCcjY2xlYXJJbWFnZXMnKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgICAgICAkZmlsZUlucHV0LnZhbCgnJyk7XG4gICAgICAgICQoXCIjcHJldmlldy1pbWFnZXMtem9uZVwiKS5jaGlsZHJlbignLnByZXZpZXctaW1hZ2UnKS5yZW1vdmUoKTtcbiAgICAgICAgJChcIiNwcmV2aWV3LWltYWdlcy16b25lXCIpLmhpZGUoKTtcbiAgICAgICAgJCgnI25ld0ltYWdlc0xhYmVsJykuaGlkZSgpO1xuICAgIH0pO1xuXG4gICAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG4gICAgICAgICQoJyNzdW1tZXJub3RlJykuc3VtbWVybm90ZSh7XG4gICAgICAgICAgICBoZWlnaHQ6IDMwMCxcbiAgICAgICAgfSk7XG4gICAgfSk7XG59KTtcblxuXG5cbnZhciBudW0gPSA0O1xuZnVuY3Rpb24gcmVhZEltYWdlKCkge1xuICAgIGlmICh3aW5kb3cuRmlsZSAmJiB3aW5kb3cuRmlsZUxpc3QgJiYgd2luZG93LkZpbGVSZWFkZXIpIHtcbiAgICAgICAgdmFyIGZpbGVzID0gZXZlbnQudGFyZ2V0LmZpbGVzOyAvL0ZpbGVMaXN0IG9iamVjdFxuICAgICAgICB2YXIgb3V0cHV0ID0gJChcIiNwcmV2aWV3LWltYWdlcy16b25lXCIpO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBmaWxlID0gZmlsZXNbaV07XG4gICAgICAgICAgICBpZiAoIWZpbGUudHlwZS5tYXRjaCgnaW1hZ2UnKSkgY29udGludWU7XG5cbiAgICAgICAgICAgIHZhciBwaWNSZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuXG4gICAgICAgICAgICBwaWNSZWFkZXIuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICAgIHZhciBwaWNGaWxlID0gZXZlbnQudGFyZ2V0O1xuICAgICAgICAgICAgICAgIHZhciBodG1sID1cbiAgICAgICAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJwcmV2aWV3LWltYWdlIHByZXZpZXctc2hvdy0nICsgbnVtICsgJ1wiPicgK1xuICAgICAgICAgICAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJpbWFnZS16b25lXCI+JyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJzxpbWcgaWQ9XCJwcm8taW1nLScgKyBudW0gKyAnXCIgc3JjPVwiJyArIHBpY0ZpbGUucmVzdWx0ICsgJ1wiPicgK1xuICAgICAgICAgICAgICAgICAgICAgICAgJzwvZGl2PicgK1xuICAgICAgICAgICAgICAgICAgICAnPC9kaXY+JztcblxuICAgICAgICAgICAgICAgIG91dHB1dC5hcHBlbmQoaHRtbCk7XG4gICAgICAgICAgICAgICAgbnVtID0gbnVtICsgMTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBwaWNSZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlKTtcbiAgICAgICAgfVxuICAgICAgICBvdXRwdXQuc2hvdygpO1xuICAgICAgICAkKCcjbmV3SW1hZ2VzTGFiZWwnKS5zaG93KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coJ0ZpbGUgZm9ybWF0IG5vdCBzdXBwb3J0ZWQnKTtcbiAgICB9XG59XG5cbiJdLCJzb3VyY2VSb290IjoiIn0=