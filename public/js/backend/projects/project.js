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

},[[4,"/js/manifest"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYmFja2VuZC9wcm9qZWN0cy9wcm9qZWN0LmpzIl0sIm5hbWVzIjpbIiQiLCJkb2N1bWVudCIsInJlYWR5IiwiJGZpbGVJbnB1dCIsIm9uIiwicmVhZEltYWdlIiwiY2hpbGRyZW4iLCJsZW5ndGgiLCJoaWRlIiwic29ydGFibGUiLCJubyIsImRhdGEiLCJyZW1vdmUiLCJ2YWwiLCJudW0iLCJ3aW5kb3ciLCJGaWxlIiwiRmlsZUxpc3QiLCJGaWxlUmVhZGVyIiwiZmlsZXMiLCJldmVudCIsInRhcmdldCIsIm91dHB1dCIsImkiLCJmaWxlIiwidHlwZSIsIm1hdGNoIiwicGljUmVhZGVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsInBpY0ZpbGUiLCJodG1sIiwicmVzdWx0IiwiYXBwZW5kIiwicmVhZEFzRGF0YVVSTCIsInNob3ciLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQUEsQ0FBQyxDQUFDQyxRQUFELENBQUQsQ0FBWUMsS0FBWixDQUFrQixZQUFXO0FBQ3pCQyxZQUFVLEdBQUdILENBQUMsQ0FBQyxTQUFELENBQUQsQ0FBYUksRUFBYixDQUFnQixRQUFoQixFQUEwQixZQUFVO0FBQzdDQyxhQUFTO0FBQ1osR0FGWSxDQUFiOztBQUlBLE1BQUdMLENBQUMsQ0FBQywrQkFBRCxDQUFELENBQW1DTSxRQUFuQyxHQUE4Q0MsTUFBOUMsSUFBd0QsQ0FBM0QsRUFBNkQ7QUFDekRQLEtBQUMsQ0FBQywrQkFBRCxDQUFELENBQW1DUSxJQUFuQztBQUNIOztBQUVEUixHQUFDLENBQUUsK0JBQUYsQ0FBRCxDQUFxQ1MsUUFBckM7QUFFQVQsR0FBQyxDQUFDLGVBQUQsQ0FBRCxDQUFtQkksRUFBbkIsQ0FBc0IsT0FBdEIsRUFBK0IsWUFBVztBQUN0QyxRQUFJTSxFQUFFLEdBQUdWLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUVcsSUFBUixDQUFhLElBQWIsQ0FBVDtBQUNBWCxLQUFDLENBQUMsaUNBQStCVSxFQUFoQyxDQUFELENBQXFDRSxNQUFyQyxHQUZzQyxDQUl0QztBQUNBO0FBQ0E7QUFDSCxHQVBEO0FBU0FaLEdBQUMsQ0FBQyxjQUFELENBQUQsQ0FBa0JJLEVBQWxCLENBQXFCLE9BQXJCLEVBQThCLFlBQVU7QUFDcENELGNBQVUsQ0FBQ1UsR0FBWCxDQUFlLEVBQWY7QUFDQWIsS0FBQyxDQUFDLHNCQUFELENBQUQsQ0FBMEJNLFFBQTFCLENBQW1DLGdCQUFuQyxFQUFxRE0sTUFBckQ7QUFDQVosS0FBQyxDQUFDLHNCQUFELENBQUQsQ0FBMEJRLElBQTFCO0FBQ0FSLEtBQUMsQ0FBQyxpQkFBRCxDQUFELENBQXFCUSxJQUFyQjtBQUNILEdBTEQ7QUFNSCxDQTFCRDtBQThCQSxJQUFJTSxHQUFHLEdBQUcsQ0FBVjs7QUFDQSxTQUFTVCxTQUFULEdBQXFCO0FBQ2pCLE1BQUlVLE1BQU0sQ0FBQ0MsSUFBUCxJQUFlRCxNQUFNLENBQUNFLFFBQXRCLElBQWtDRixNQUFNLENBQUNHLFVBQTdDLEVBQXlEO0FBQ3JELFFBQUlDLEtBQUssR0FBR0MsS0FBSyxDQUFDQyxNQUFOLENBQWFGLEtBQXpCLENBRHFELENBQ3JCOztBQUNoQyxRQUFJRyxNQUFNLEdBQUd0QixDQUFDLENBQUMsc0JBQUQsQ0FBZDs7QUFFQSxTQUFLLElBQUl1QixDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHSixLQUFLLENBQUNaLE1BQTFCLEVBQWtDZ0IsQ0FBQyxFQUFuQyxFQUF1QztBQUNuQyxVQUFJQyxJQUFJLEdBQUdMLEtBQUssQ0FBQ0ksQ0FBRCxDQUFoQjtBQUNBLFVBQUksQ0FBQ0MsSUFBSSxDQUFDQyxJQUFMLENBQVVDLEtBQVYsQ0FBZ0IsT0FBaEIsQ0FBTCxFQUErQjtBQUUvQixVQUFJQyxTQUFTLEdBQUcsSUFBSVQsVUFBSixFQUFoQjtBQUVBUyxlQUFTLENBQUNDLGdCQUFWLENBQTJCLE1BQTNCLEVBQW1DLFVBQVVSLEtBQVYsRUFBaUI7QUFDaEQsWUFBSVMsT0FBTyxHQUFHVCxLQUFLLENBQUNDLE1BQXBCO0FBQ0EsWUFBSVMsSUFBSSxHQUNKLDRDQUE0Q2hCLEdBQTVDLEdBQWtELElBQWxELEdBQ0ksMEJBREosR0FFUSxtQkFGUixHQUU4QkEsR0FGOUIsR0FFb0MsU0FGcEMsR0FFZ0RlLE9BQU8sQ0FBQ0UsTUFGeEQsR0FFaUUsSUFGakUsR0FHSSxRQUhKLEdBSUEsUUFMSjtBQU9BVCxjQUFNLENBQUNVLE1BQVAsQ0FBY0YsSUFBZDtBQUNBaEIsV0FBRyxHQUFHQSxHQUFHLEdBQUcsQ0FBWjtBQUNILE9BWEQ7QUFhQWEsZUFBUyxDQUFDTSxhQUFWLENBQXdCVCxJQUF4QjtBQUNIOztBQUNERixVQUFNLENBQUNZLElBQVA7QUFDQWxDLEtBQUMsQ0FBQyxpQkFBRCxDQUFELENBQXFCa0MsSUFBckI7QUFDSCxHQTNCRCxNQTJCTztBQUNIQyxXQUFPLENBQUNDLEdBQVIsQ0FBWSwyQkFBWjtBQUNIO0FBQ0osQyIsImZpbGUiOiIvanMvYmFja2VuZC9wcm9qZWN0cy9wcm9qZWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG4gICAgJGZpbGVJbnB1dCA9ICQoJyNpbWFnZXMnKS5vbignY2hhbmdlJywgZnVuY3Rpb24oKXtcbiAgICAgICAgcmVhZEltYWdlKCk7XG4gICAgfSk7XG5cbiAgICBpZigkKCcjcHJldmlldy1pbWFnZXMtem9uZS1leGlzdGluZycpLmNoaWxkcmVuKCkubGVuZ3RoID09IDApe1xuICAgICAgICAkKCcjcHJldmlldy1pbWFnZXMtem9uZS1leGlzdGluZycpLmhpZGUoKTtcbiAgICB9XG5cbiAgICAkKCBcIiNwcmV2aWV3LWltYWdlcy16b25lLWV4aXN0aW5nXCIgKS5zb3J0YWJsZSgpO1xuXG4gICAgJCgnLmltYWdlLWNhbmNlbCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICBsZXQgbm8gPSAkKHRoaXMpLmRhdGEoJ25vJyk7XG4gICAgICAgICQoXCIucHJldmlldy1pbWFnZS5wcmV2aWV3LXNob3ctXCIrbm8pLnJlbW92ZSgpO1xuXG4gICAgICAgIC8vIGlmKCQoJyNwcmV2aWV3LWltYWdlcy16b25lLWV4aXN0aW5nJykuY2hpbGRyZW4oKS5sZW5ndGggPT0gMCl7XG4gICAgICAgIC8vICAgICAkKCcjcHJldmlldy1pbWFnZXMtem9uZS1leGlzdGluZycpLmhpZGUoKTtcbiAgICAgICAgLy8gfVxuICAgIH0pO1xuXG4gICAgJCgnI2NsZWFySW1hZ2VzJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICAgICAgJGZpbGVJbnB1dC52YWwoJycpO1xuICAgICAgICAkKFwiI3ByZXZpZXctaW1hZ2VzLXpvbmVcIikuY2hpbGRyZW4oJy5wcmV2aWV3LWltYWdlJykucmVtb3ZlKCk7XG4gICAgICAgICQoXCIjcHJldmlldy1pbWFnZXMtem9uZVwiKS5oaWRlKCk7XG4gICAgICAgICQoJyNuZXdJbWFnZXNMYWJlbCcpLmhpZGUoKTtcbiAgICB9KTtcbn0pO1xuXG5cblxudmFyIG51bSA9IDQ7XG5mdW5jdGlvbiByZWFkSW1hZ2UoKSB7XG4gICAgaWYgKHdpbmRvdy5GaWxlICYmIHdpbmRvdy5GaWxlTGlzdCAmJiB3aW5kb3cuRmlsZVJlYWRlcikge1xuICAgICAgICB2YXIgZmlsZXMgPSBldmVudC50YXJnZXQuZmlsZXM7IC8vRmlsZUxpc3Qgb2JqZWN0XG4gICAgICAgIHZhciBvdXRwdXQgPSAkKFwiI3ByZXZpZXctaW1hZ2VzLXpvbmVcIik7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmaWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGZpbGUgPSBmaWxlc1tpXTtcbiAgICAgICAgICAgIGlmICghZmlsZS50eXBlLm1hdGNoKCdpbWFnZScpKSBjb250aW51ZTtcblxuICAgICAgICAgICAgdmFyIHBpY1JlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG5cbiAgICAgICAgICAgIHBpY1JlYWRlci5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgdmFyIHBpY0ZpbGUgPSBldmVudC50YXJnZXQ7XG4gICAgICAgICAgICAgICAgdmFyIGh0bWwgPVxuICAgICAgICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cInByZXZpZXctaW1hZ2UgcHJldmlldy1zaG93LScgKyBudW0gKyAnXCI+JyArXG4gICAgICAgICAgICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cImltYWdlLXpvbmVcIj4nICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnPGltZyBpZD1cInByby1pbWctJyArIG51bSArICdcIiBzcmM9XCInICsgcGljRmlsZS5yZXN1bHQgKyAnXCI+JyArXG4gICAgICAgICAgICAgICAgICAgICAgICAnPC9kaXY+JyArXG4gICAgICAgICAgICAgICAgICAgICc8L2Rpdj4nO1xuXG4gICAgICAgICAgICAgICAgb3V0cHV0LmFwcGVuZChodG1sKTtcbiAgICAgICAgICAgICAgICBudW0gPSBudW0gKyAxO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHBpY1JlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUpO1xuICAgICAgICB9XG4gICAgICAgIG91dHB1dC5zaG93KCk7XG4gICAgICAgICQoJyNuZXdJbWFnZXNMYWJlbCcpLnNob3coKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZygnRmlsZSBmb3JtYXQgbm90IHN1cHBvcnRlZCcpO1xuICAgIH1cbn1cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==