(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["/js/backend/projects/project"],{

/***/ "./resources/js/backend/projects/project.js":
/*!**************************************************!*\
  !*** ./resources/js/backend/projects/project.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

$(document).ready(function () {
  $fileInput = $('#images').on('change', function () {
    readImage();
  }); // $( "#preview-images-zone" ).sortable();

  $("#preview-images-zone-existing").sortable();
  $('.image-cancel').on('click', function () {
    var no = $(this).data('no');
    $(".preview-image.preview-show-" + no).remove();

    if ($('#preview-images-zone-existing').children().length == 0) {
      $('#preview-images-zone-existing').hide();
    }
  });
  $('#clearImages').on('click', function () {
    $fileInput.val('');
    $("#preview-images-zone").html('');
    $("#preview-images-zone").hide();
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
  } else {
    console.log('File format not supported');
  }
}

/***/ }),

/***/ 3:
/*!********************************************************!*\
  !*** multi ./resources/js/backend/projects/project.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/gregorysteenhagen/Desktop/Projects/steamengine/resources/js/backend/projects/project.js */"./resources/js/backend/projects/project.js");


/***/ })

},[[3,"/js/manifest"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYmFja2VuZC9wcm9qZWN0cy9wcm9qZWN0LmpzIl0sIm5hbWVzIjpbIiQiLCJkb2N1bWVudCIsInJlYWR5IiwiJGZpbGVJbnB1dCIsIm9uIiwicmVhZEltYWdlIiwic29ydGFibGUiLCJubyIsImRhdGEiLCJyZW1vdmUiLCJjaGlsZHJlbiIsImxlbmd0aCIsImhpZGUiLCJ2YWwiLCJodG1sIiwibnVtIiwid2luZG93IiwiRmlsZSIsIkZpbGVMaXN0IiwiRmlsZVJlYWRlciIsImZpbGVzIiwiZXZlbnQiLCJ0YXJnZXQiLCJvdXRwdXQiLCJpIiwiZmlsZSIsInR5cGUiLCJtYXRjaCIsInBpY1JlYWRlciIsImFkZEV2ZW50TGlzdGVuZXIiLCJwaWNGaWxlIiwicmVzdWx0IiwiYXBwZW5kIiwicmVhZEFzRGF0YVVSTCIsInNob3ciLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQUEsQ0FBQyxDQUFDQyxRQUFELENBQUQsQ0FBWUMsS0FBWixDQUFrQixZQUFXO0FBQ3pCQyxZQUFVLEdBQUdILENBQUMsQ0FBQyxTQUFELENBQUQsQ0FBYUksRUFBYixDQUFnQixRQUFoQixFQUEwQixZQUFVO0FBQzdDQyxhQUFTO0FBQ1osR0FGWSxDQUFiLENBRHlCLENBS3pCOztBQUNBTCxHQUFDLENBQUUsK0JBQUYsQ0FBRCxDQUFxQ00sUUFBckM7QUFFQU4sR0FBQyxDQUFDLGVBQUQsQ0FBRCxDQUFtQkksRUFBbkIsQ0FBc0IsT0FBdEIsRUFBK0IsWUFBVztBQUN0QyxRQUFJRyxFQUFFLEdBQUdQLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUVEsSUFBUixDQUFhLElBQWIsQ0FBVDtBQUNBUixLQUFDLENBQUMsaUNBQStCTyxFQUFoQyxDQUFELENBQXFDRSxNQUFyQzs7QUFFQSxRQUFHVCxDQUFDLENBQUMsK0JBQUQsQ0FBRCxDQUFtQ1UsUUFBbkMsR0FBOENDLE1BQTlDLElBQXdELENBQTNELEVBQTZEO0FBQ3pEWCxPQUFDLENBQUMsK0JBQUQsQ0FBRCxDQUFtQ1ksSUFBbkM7QUFDSDtBQUNKLEdBUEQ7QUFTQVosR0FBQyxDQUFDLGNBQUQsQ0FBRCxDQUFrQkksRUFBbEIsQ0FBcUIsT0FBckIsRUFBOEIsWUFBVTtBQUNwQ0QsY0FBVSxDQUFDVSxHQUFYLENBQWUsRUFBZjtBQUNBYixLQUFDLENBQUMsc0JBQUQsQ0FBRCxDQUEwQmMsSUFBMUIsQ0FBK0IsRUFBL0I7QUFDQWQsS0FBQyxDQUFDLHNCQUFELENBQUQsQ0FBMEJZLElBQTFCO0FBQ0gsR0FKRDtBQUtILENBdEJEO0FBMEJBLElBQUlHLEdBQUcsR0FBRyxDQUFWOztBQUNBLFNBQVNWLFNBQVQsR0FBcUI7QUFDakIsTUFBSVcsTUFBTSxDQUFDQyxJQUFQLElBQWVELE1BQU0sQ0FBQ0UsUUFBdEIsSUFBa0NGLE1BQU0sQ0FBQ0csVUFBN0MsRUFBeUQ7QUFDckQsUUFBSUMsS0FBSyxHQUFHQyxLQUFLLENBQUNDLE1BQU4sQ0FBYUYsS0FBekIsQ0FEcUQsQ0FDckI7O0FBQ2hDLFFBQUlHLE1BQU0sR0FBR3ZCLENBQUMsQ0FBQyxzQkFBRCxDQUFkOztBQUVBLFNBQUssSUFBSXdCLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdKLEtBQUssQ0FBQ1QsTUFBMUIsRUFBa0NhLENBQUMsRUFBbkMsRUFBdUM7QUFDbkMsVUFBSUMsSUFBSSxHQUFHTCxLQUFLLENBQUNJLENBQUQsQ0FBaEI7QUFDQSxVQUFJLENBQUNDLElBQUksQ0FBQ0MsSUFBTCxDQUFVQyxLQUFWLENBQWdCLE9BQWhCLENBQUwsRUFBK0I7QUFFL0IsVUFBSUMsU0FBUyxHQUFHLElBQUlULFVBQUosRUFBaEI7QUFFQVMsZUFBUyxDQUFDQyxnQkFBVixDQUEyQixNQUEzQixFQUFtQyxVQUFVUixLQUFWLEVBQWlCO0FBQ2hELFlBQUlTLE9BQU8sR0FBR1QsS0FBSyxDQUFDQyxNQUFwQjtBQUNBLFlBQUlSLElBQUksR0FDSiw0Q0FBNENDLEdBQTVDLEdBQWtELElBQWxELEdBQ0ksMEJBREosR0FFUSxtQkFGUixHQUU4QkEsR0FGOUIsR0FFb0MsU0FGcEMsR0FFZ0RlLE9BQU8sQ0FBQ0MsTUFGeEQsR0FFaUUsSUFGakUsR0FHSSxRQUhKLEdBSUEsUUFMSjtBQU9BUixjQUFNLENBQUNTLE1BQVAsQ0FBY2xCLElBQWQ7QUFDQUMsV0FBRyxHQUFHQSxHQUFHLEdBQUcsQ0FBWjtBQUNILE9BWEQ7QUFhQWEsZUFBUyxDQUFDSyxhQUFWLENBQXdCUixJQUF4QjtBQUNIOztBQUNERixVQUFNLENBQUNXLElBQVA7QUFDSCxHQTFCRCxNQTBCTztBQUNIQyxXQUFPLENBQUNDLEdBQVIsQ0FBWSwyQkFBWjtBQUNIO0FBQ0osQyIsImZpbGUiOiIvanMvYmFja2VuZC9wcm9qZWN0cy9wcm9qZWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG4gICAgJGZpbGVJbnB1dCA9ICQoJyNpbWFnZXMnKS5vbignY2hhbmdlJywgZnVuY3Rpb24oKXtcbiAgICAgICAgcmVhZEltYWdlKCk7XG4gICAgfSk7XG5cbiAgICAvLyAkKCBcIiNwcmV2aWV3LWltYWdlcy16b25lXCIgKS5zb3J0YWJsZSgpO1xuICAgICQoIFwiI3ByZXZpZXctaW1hZ2VzLXpvbmUtZXhpc3RpbmdcIiApLnNvcnRhYmxlKCk7XG5cbiAgICAkKCcuaW1hZ2UtY2FuY2VsJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIGxldCBubyA9ICQodGhpcykuZGF0YSgnbm8nKTtcbiAgICAgICAgJChcIi5wcmV2aWV3LWltYWdlLnByZXZpZXctc2hvdy1cIitubykucmVtb3ZlKCk7XG5cbiAgICAgICAgaWYoJCgnI3ByZXZpZXctaW1hZ2VzLXpvbmUtZXhpc3RpbmcnKS5jaGlsZHJlbigpLmxlbmd0aCA9PSAwKXtcbiAgICAgICAgICAgICQoJyNwcmV2aWV3LWltYWdlcy16b25lLWV4aXN0aW5nJykuaGlkZSgpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAkKCcjY2xlYXJJbWFnZXMnKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgICAgICAkZmlsZUlucHV0LnZhbCgnJyk7XG4gICAgICAgICQoXCIjcHJldmlldy1pbWFnZXMtem9uZVwiKS5odG1sKCcnKTtcbiAgICAgICAgJChcIiNwcmV2aWV3LWltYWdlcy16b25lXCIpLmhpZGUoKTtcbiAgICB9KTtcbn0pO1xuXG5cblxudmFyIG51bSA9IDQ7XG5mdW5jdGlvbiByZWFkSW1hZ2UoKSB7XG4gICAgaWYgKHdpbmRvdy5GaWxlICYmIHdpbmRvdy5GaWxlTGlzdCAmJiB3aW5kb3cuRmlsZVJlYWRlcikge1xuICAgICAgICB2YXIgZmlsZXMgPSBldmVudC50YXJnZXQuZmlsZXM7IC8vRmlsZUxpc3Qgb2JqZWN0XG4gICAgICAgIHZhciBvdXRwdXQgPSAkKFwiI3ByZXZpZXctaW1hZ2VzLXpvbmVcIik7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmaWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGZpbGUgPSBmaWxlc1tpXTtcbiAgICAgICAgICAgIGlmICghZmlsZS50eXBlLm1hdGNoKCdpbWFnZScpKSBjb250aW51ZTtcblxuICAgICAgICAgICAgdmFyIHBpY1JlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG5cbiAgICAgICAgICAgIHBpY1JlYWRlci5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgdmFyIHBpY0ZpbGUgPSBldmVudC50YXJnZXQ7XG4gICAgICAgICAgICAgICAgdmFyIGh0bWwgPVxuICAgICAgICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cInByZXZpZXctaW1hZ2UgcHJldmlldy1zaG93LScgKyBudW0gKyAnXCI+JyArXG4gICAgICAgICAgICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cImltYWdlLXpvbmVcIj4nICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnPGltZyBpZD1cInByby1pbWctJyArIG51bSArICdcIiBzcmM9XCInICsgcGljRmlsZS5yZXN1bHQgKyAnXCI+JyArXG4gICAgICAgICAgICAgICAgICAgICAgICAnPC9kaXY+JyArXG4gICAgICAgICAgICAgICAgICAgICc8L2Rpdj4nO1xuXG4gICAgICAgICAgICAgICAgb3V0cHV0LmFwcGVuZChodG1sKTtcbiAgICAgICAgICAgICAgICBudW0gPSBudW0gKyAxO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHBpY1JlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUpO1xuICAgICAgICB9XG4gICAgICAgIG91dHB1dC5zaG93KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coJ0ZpbGUgZm9ybWF0IG5vdCBzdXBwb3J0ZWQnKTtcbiAgICB9XG59XG5cbiJdLCJzb3VyY2VSb290IjoiIn0=