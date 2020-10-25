(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["/js/backend/profiles/profile"],{

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

/***/ "./resources/js/backend/profiles/profile.js":
/*!**************************************************!*\
  !*** ./resources/js/backend/profiles/profile.js ***!
  \**************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var summernote__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! summernote */ "./node_modules/summernote/dist/summernote.js");
/* harmony import */ var summernote__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(summernote__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.js");
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var jquery_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery-ui */ "./node_modules/jquery-ui/ui/widget.js");
/* harmony import */ var jquery_ui__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery_ui__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var jquery_ui_ui_widgets_sortable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery-ui/ui/widgets/sortable */ "./node_modules/jquery-ui/ui/widgets/sortable.js");
/* harmony import */ var jquery_ui_ui_widgets_sortable__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery_ui_ui_widgets_sortable__WEBPACK_IMPORTED_MODULE_4__);





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
    console.log($temp.val());
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
      height: 300,
      toolbar: [['style', ['style']], ['font', ['bold', 'underline', 'clear']], ['fontname', ['fontname']], ['color', ['color']], ['para', ['ul', 'ol', 'paragraph']], ['table', ['table']], ['insert', ['link', 'picture', 'video']], ['view', ['fullscreen', 'codeview', 'help']]]
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
} // Add the following code if you want the name of the file appear on select


$(".custom-file-input").on("change", function () {
  var fileName = $(this).val().split("\\").pop();
  $(this).siblings(".custom-file-label").addClass("selected").html(fileName);
});
$('#about_image_file').on('change', function () {
  if ($(this)[0].files && $(this)[0].files[0]) {
    var reader = new FileReader();

    reader.onload = function (e) {
      $('#about-image-preview').attr('src', e.target.result);
    };

    reader.readAsDataURL($(this)[0].files[0]);
  }
});

/***/ }),

/***/ 11:
/*!********************************************************!*\
  !*** multi ./resources/js/backend/profiles/profile.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/gregorysteenhagen/Desktop/ModernHobbyist/modern-hobbyist/resources/js/backend/profiles/profile.js */"./resources/js/backend/profiles/profile.js");


/***/ })

},[[11,"/js/manifest","/js/vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9iYWNrZW5kL3Byb2ZpbGVzL3Byb2ZpbGUuanMiXSwibmFtZXMiOlsiJCIsImRvY3VtZW50IiwicmVhZHkiLCIkZmlsZUlucHV0Iiwib24iLCJyZWFkSW1hZ2UiLCJjaGlsZHJlbiIsImxlbmd0aCIsImhpZGUiLCJzb3J0YWJsZSIsIm5vIiwiZGF0YSIsInJlbW92ZSIsImltYWdlVVJMIiwiJHRlbXAiLCJhcHBlbmQiLCJ2YWwiLCJzZWxlY3QiLCJjb25zb2xlIiwibG9nIiwiZXhlY0NvbW1hbmQiLCJzdW1tZXJub3RlIiwiaGVpZ2h0IiwidG9vbGJhciIsIm51bSIsIndpbmRvdyIsIkZpbGUiLCJGaWxlTGlzdCIsIkZpbGVSZWFkZXIiLCJmaWxlcyIsImV2ZW50IiwidGFyZ2V0Iiwib3V0cHV0IiwiaSIsImZpbGUiLCJ0eXBlIiwibWF0Y2giLCJwaWNSZWFkZXIiLCJhZGRFdmVudExpc3RlbmVyIiwicGljRmlsZSIsImh0bWwiLCJyZXN1bHQiLCJyZWFkQXNEYXRhVVJMIiwic2hvdyIsImZpbGVOYW1lIiwic3BsaXQiLCJwb3AiLCJzaWJsaW5ncyIsImFkZENsYXNzIiwicmVhZGVyIiwib25sb2FkIiwiZSIsImF0dHIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNENBQTRDOztBQUU1Qzs7Ozs7Ozs7Ozs7OztBQ25CQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQSxDQUFDLENBQUNDLFFBQUQsQ0FBRCxDQUFZQyxLQUFaLENBQWtCLFlBQVc7QUFDekIsTUFBSUMsVUFBVSxHQUFHSCxD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QUFxQyxZQUFXO0FBQzVDLE1BQUl3QyxRQUFRLEdBQUc1QyxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFnQixHQUFSLEdBQWM2QixLQUFkLENBQW9CLElBQXBCLEVBQTBCQyxHQUExQixFQUFmO0FBQ0E5QyxHQUFDLENBQUMsSUFBRCxDQUFELENBQVErQyxRQUFSLENBQWlCLG9CQUFqQixFQUF1Q0MsUUFBdkMsQ0FBZ0QsVUFBaEQsRUFBNERSLElBQTVELENBQWlFSSxRQUFqRTtBQUNILENBSEQ7QUFLQTVDLENBQUMsQ0FBQyxtQkFBRCxDQUFELENBQXVCSSxFQUF2QixDQUEwQixRQUExQixFQUFvQyxZQUFVO0FBQzFDLE1BQUlKLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUSxDQUFSLEVBQVc2QixLQUFYLElBQW9CN0IsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRLENBQVIsRUFBVzZCLEtBQVgsQ0FBaUIsQ0FBakIsQ0FBeEIsRUFBNkM7QUFDekMsUUFBSW9CLE1BQU0sR0FBRyxJQUFJckIsVUFBSixFQUFiOztBQUNBcUIsVUFBTSxDQUFDQyxNQUFQLEdBQWdCLFVBQVVDLENBQVYsRUFBYTtBQUN6Qm5ELE9BQUMsQ0FBQyxzQkFBRCxDQUFELENBQTBCb0QsSUFBMUIsQ0FBK0IsS0FBL0IsRUFBc0NELENBQUMsQ0FBQ3BCLE1BQUYsQ0FBU1UsTUFBL0M7QUFDSCxLQUZEOztBQUdBUSxVQUFNLENBQUNQLGFBQVAsQ0FBcUIxQyxDQUFDLENBQUMsSUFBRCxDQUFELENBQVEsQ0FBUixFQUFXNkIsS0FBWCxDQUFpQixDQUFqQixDQUFyQjtBQUNIO0FBRUosQ0FURCxFIiwiZmlsZSI6Ii9qcy9iYWNrZW5kL3Byb2ZpbGVzL3Byb2ZpbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZztcblxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcbmcgPSAoZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzO1xufSkoKTtcblxudHJ5IHtcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXG5cdGcgPSBnIHx8IG5ldyBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG59IGNhdGNoIChlKSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKSBnID0gd2luZG93O1xufVxuXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGc7XG4iLCJpbXBvcnQgXCJzdW1tZXJub3RlXCI7XG5pbXBvcnQgXCJib290c3RyYXBcIjtcbmltcG9ydCBcImpxdWVyeVwiO1xuaW1wb3J0IFwianF1ZXJ5LXVpXCI7XG5pbXBvcnQgXCJqcXVlcnktdWkvdWkvd2lkZ2V0cy9zb3J0YWJsZVwiO1xuXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcbiAgICB2YXIgJGZpbGVJbnB1dCA9ICQoJyNpbWFnZXMnKS5vbignY2hhbmdlJywgZnVuY3Rpb24oKXtcbiAgICAgICAgcmVhZEltYWdlKCk7XG4gICAgfSk7XG5cbiAgICBpZigkKCcjcHJldmlldy1pbWFnZXMtem9uZS1leGlzdGluZycpLmNoaWxkcmVuKCkubGVuZ3RoID09IDApe1xuICAgICAgICAkKCcjcHJldmlldy1pbWFnZXMtem9uZS1leGlzdGluZycpLmhpZGUoKTtcbiAgICB9XG5cbiAgICAkKCBcIiNwcmV2aWV3LWltYWdlcy16b25lLWV4aXN0aW5nXCIgKS5zb3J0YWJsZSgpO1xuXG4gICAgJCgnLmltYWdlLWNhbmNlbCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICBsZXQgbm8gPSAkKHRoaXMpLmRhdGEoJ25vJyk7XG4gICAgICAgICQoXCIucHJldmlldy1pbWFnZS5wcmV2aWV3LXNob3ctXCIrbm8pLnJlbW92ZSgpO1xuXG4gICAgICAgIC8vIGlmKCQoJyNwcmV2aWV3LWltYWdlcy16b25lLWV4aXN0aW5nJykuY2hpbGRyZW4oKS5sZW5ndGggPT0gMCl7XG4gICAgICAgIC8vICAgICAkKCcjcHJldmlldy1pbWFnZXMtem9uZS1leGlzdGluZycpLmhpZGUoKTtcbiAgICAgICAgLy8gfVxuICAgIH0pO1xuXG4gICAgJCgnLmltYWdlLXVybCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgICAgIC8qIEdldCB0aGUgdGV4dCBmaWVsZCAqL1xuICAgICAgICB2YXIgaW1hZ2VVUkwgPSAkKHRoaXMpLmRhdGEoJ3VybCcpO1xuXG4gICAgICAgIHZhciAkdGVtcCA9ICQoXCI8aW5wdXQ+XCIpO1xuICAgICAgICAkKFwiYm9keVwiKS5hcHBlbmQoJHRlbXApO1xuICAgICAgICAkdGVtcC52YWwoaW1hZ2VVUkwpLnNlbGVjdCgpO1xuICAgICAgICBjb25zb2xlLmxvZygkdGVtcC52YWwoKSk7XG5cbiAgICAgICAgLyogQ29weSB0aGUgdGV4dCBpbnNpZGUgdGhlIHRleHQgZmllbGQgKi9cbiAgICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoXCJjb3B5XCIpO1xuICAgIH0pO1xuXG4gICAgJCgnI2NsZWFySW1hZ2VzJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICAgICAgJGZpbGVJbnB1dC52YWwoJycpO1xuICAgICAgICAkKFwiI3ByZXZpZXctaW1hZ2VzLXpvbmVcIikuY2hpbGRyZW4oJy5wcmV2aWV3LWltYWdlJykucmVtb3ZlKCk7XG4gICAgICAgICQoXCIjcHJldmlldy1pbWFnZXMtem9uZVwiKS5oaWRlKCk7XG4gICAgICAgICQoJyNuZXdJbWFnZXNMYWJlbCcpLmhpZGUoKTtcbiAgICB9KTtcblxuICAgICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuICAgICAgICAkKCcjc3VtbWVybm90ZScpLnN1bW1lcm5vdGUoe1xuICAgICAgICAgICAgaGVpZ2h0OiAzMDAsXG4gICAgICAgICAgICB0b29sYmFyOiBbXG4gICAgICAgICAgICAgICAgWydzdHlsZScsIFsnc3R5bGUnXV0sXG4gICAgICAgICAgICAgICAgWydmb250JywgWydib2xkJywgJ3VuZGVybGluZScsICdjbGVhciddXSxcbiAgICAgICAgICAgICAgICBbJ2ZvbnRuYW1lJywgWydmb250bmFtZSddXSxcbiAgICAgICAgICAgICAgICBbJ2NvbG9yJywgWydjb2xvciddXSxcbiAgICAgICAgICAgICAgICBbJ3BhcmEnLCBbJ3VsJywgJ29sJywgJ3BhcmFncmFwaCddXSxcbiAgICAgICAgICAgICAgICBbJ3RhYmxlJywgWyd0YWJsZSddXSxcbiAgICAgICAgICAgICAgICBbJ2luc2VydCcsIFsnbGluaycsICdwaWN0dXJlJywgJ3ZpZGVvJ11dLFxuICAgICAgICAgICAgICAgIFsndmlldycsIFsnZnVsbHNjcmVlbicsICdjb2RldmlldycsICdoZWxwJ11dLFxuICAgICAgICAgICAgXVxuICAgICAgICB9KTtcbiAgICB9KTtcbn0pO1xuXG5cblxudmFyIG51bSA9IDQ7XG5mdW5jdGlvbiByZWFkSW1hZ2UoKSB7XG4gICAgaWYgKHdpbmRvdy5GaWxlICYmIHdpbmRvdy5GaWxlTGlzdCAmJiB3aW5kb3cuRmlsZVJlYWRlcikge1xuICAgICAgICB2YXIgZmlsZXMgPSBldmVudC50YXJnZXQuZmlsZXM7IC8vRmlsZUxpc3Qgb2JqZWN0XG4gICAgICAgIHZhciBvdXRwdXQgPSAkKFwiI3ByZXZpZXctaW1hZ2VzLXpvbmVcIik7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmaWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGZpbGUgPSBmaWxlc1tpXTtcbiAgICAgICAgICAgIGlmICghZmlsZS50eXBlLm1hdGNoKCdpbWFnZScpKSBjb250aW51ZTtcblxuICAgICAgICAgICAgdmFyIHBpY1JlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG5cbiAgICAgICAgICAgIHBpY1JlYWRlci5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgdmFyIHBpY0ZpbGUgPSBldmVudC50YXJnZXQ7XG4gICAgICAgICAgICAgICAgdmFyIGh0bWwgPVxuICAgICAgICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cInByZXZpZXctaW1hZ2UgcHJldmlldy1zaG93LScgKyBudW0gKyAnXCI+JyArXG4gICAgICAgICAgICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cImltYWdlLXpvbmVcIj4nICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnPGltZyBpZD1cInByby1pbWctJyArIG51bSArICdcIiBzcmM9XCInICsgcGljRmlsZS5yZXN1bHQgKyAnXCI+JyArXG4gICAgICAgICAgICAgICAgICAgICAgICAnPC9kaXY+JyArXG4gICAgICAgICAgICAgICAgICAgICc8L2Rpdj4nO1xuXG4gICAgICAgICAgICAgICAgb3V0cHV0LmFwcGVuZChodG1sKTtcbiAgICAgICAgICAgICAgICBudW0gPSBudW0gKyAxO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHBpY1JlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUpO1xuICAgICAgICB9XG4gICAgICAgIG91dHB1dC5zaG93KCk7XG4gICAgICAgICQoJyNuZXdJbWFnZXNMYWJlbCcpLnNob3coKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZygnRmlsZSBmb3JtYXQgbm90IHN1cHBvcnRlZCcpO1xuICAgIH1cbn1cblxuLy8gQWRkIHRoZSBmb2xsb3dpbmcgY29kZSBpZiB5b3Ugd2FudCB0aGUgbmFtZSBvZiB0aGUgZmlsZSBhcHBlYXIgb24gc2VsZWN0XG4kKFwiLmN1c3RvbS1maWxlLWlucHV0XCIpLm9uKFwiY2hhbmdlXCIsIGZ1bmN0aW9uKCkge1xuICAgIHZhciBmaWxlTmFtZSA9ICQodGhpcykudmFsKCkuc3BsaXQoXCJcXFxcXCIpLnBvcCgpO1xuICAgICQodGhpcykuc2libGluZ3MoXCIuY3VzdG9tLWZpbGUtbGFiZWxcIikuYWRkQ2xhc3MoXCJzZWxlY3RlZFwiKS5odG1sKGZpbGVOYW1lKTtcbn0pO1xuXG4kKCcjYWJvdXRfaW1hZ2VfZmlsZScpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbigpe1xuICAgIGlmICgkKHRoaXMpWzBdLmZpbGVzICYmICQodGhpcylbMF0uZmlsZXNbMF0pIHtcbiAgICAgICAgdmFyIHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgICAgIHJlYWRlci5vbmxvYWQgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgJCgnI2Fib3V0LWltYWdlLXByZXZpZXcnKS5hdHRyKCdzcmMnLCBlLnRhcmdldC5yZXN1bHQpO1xuICAgICAgICB9O1xuICAgICAgICByZWFkZXIucmVhZEFzRGF0YVVSTCgkKHRoaXMpWzBdLmZpbGVzWzBdKTtcbiAgICB9XG5cbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==