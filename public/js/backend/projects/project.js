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
  } // $( "#preview-images-zone" ).sortable();


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYmFja2VuZC9wcm9qZWN0cy9wcm9qZWN0LmpzIl0sIm5hbWVzIjpbIiQiLCJkb2N1bWVudCIsInJlYWR5IiwiJGZpbGVJbnB1dCIsIm9uIiwicmVhZEltYWdlIiwiY2hpbGRyZW4iLCJsZW5ndGgiLCJoaWRlIiwic29ydGFibGUiLCJubyIsImRhdGEiLCJyZW1vdmUiLCJ2YWwiLCJodG1sIiwibnVtIiwid2luZG93IiwiRmlsZSIsIkZpbGVMaXN0IiwiRmlsZVJlYWRlciIsImZpbGVzIiwiZXZlbnQiLCJ0YXJnZXQiLCJvdXRwdXQiLCJpIiwiZmlsZSIsInR5cGUiLCJtYXRjaCIsInBpY1JlYWRlciIsImFkZEV2ZW50TGlzdGVuZXIiLCJwaWNGaWxlIiwicmVzdWx0IiwiYXBwZW5kIiwicmVhZEFzRGF0YVVSTCIsInNob3ciLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQUEsQ0FBQyxDQUFDQyxRQUFELENBQUQsQ0FBWUMsS0FBWixDQUFrQixZQUFXO0FBQ3pCQyxZQUFVLEdBQUdILENBQUMsQ0FBQyxTQUFELENBQUQsQ0FBYUksRUFBYixDQUFnQixRQUFoQixFQUEwQixZQUFVO0FBQzdDQyxhQUFTO0FBQ1osR0FGWSxDQUFiOztBQUlBLE1BQUdMLENBQUMsQ0FBQywrQkFBRCxDQUFELENBQW1DTSxRQUFuQyxHQUE4Q0MsTUFBOUMsSUFBd0QsQ0FBM0QsRUFBNkQ7QUFDekRQLEtBQUMsQ0FBQywrQkFBRCxDQUFELENBQW1DUSxJQUFuQztBQUNILEdBUHdCLENBU3pCOzs7QUFDQVIsR0FBQyxDQUFFLCtCQUFGLENBQUQsQ0FBcUNTLFFBQXJDO0FBRUFULEdBQUMsQ0FBQyxlQUFELENBQUQsQ0FBbUJJLEVBQW5CLENBQXNCLE9BQXRCLEVBQStCLFlBQVc7QUFDdEMsUUFBSU0sRUFBRSxHQUFHVixDQUFDLENBQUMsSUFBRCxDQUFELENBQVFXLElBQVIsQ0FBYSxJQUFiLENBQVQ7QUFDQVgsS0FBQyxDQUFDLGlDQUErQlUsRUFBaEMsQ0FBRCxDQUFxQ0UsTUFBckM7O0FBRUEsUUFBR1osQ0FBQyxDQUFDLCtCQUFELENBQUQsQ0FBbUNNLFFBQW5DLEdBQThDQyxNQUE5QyxJQUF3RCxDQUEzRCxFQUE2RDtBQUN6RFAsT0FBQyxDQUFDLCtCQUFELENBQUQsQ0FBbUNRLElBQW5DO0FBQ0g7QUFDSixHQVBEO0FBU0FSLEdBQUMsQ0FBQyxjQUFELENBQUQsQ0FBa0JJLEVBQWxCLENBQXFCLE9BQXJCLEVBQThCLFlBQVU7QUFDcENELGNBQVUsQ0FBQ1UsR0FBWCxDQUFlLEVBQWY7QUFDQWIsS0FBQyxDQUFDLHNCQUFELENBQUQsQ0FBMEJjLElBQTFCLENBQStCLEVBQS9CO0FBQ0FkLEtBQUMsQ0FBQyxzQkFBRCxDQUFELENBQTBCUSxJQUExQjtBQUNILEdBSkQ7QUFLSCxDQTFCRDtBQThCQSxJQUFJTyxHQUFHLEdBQUcsQ0FBVjs7QUFDQSxTQUFTVixTQUFULEdBQXFCO0FBQ2pCLE1BQUlXLE1BQU0sQ0FBQ0MsSUFBUCxJQUFlRCxNQUFNLENBQUNFLFFBQXRCLElBQWtDRixNQUFNLENBQUNHLFVBQTdDLEVBQXlEO0FBQ3JELFFBQUlDLEtBQUssR0FBR0MsS0FBSyxDQUFDQyxNQUFOLENBQWFGLEtBQXpCLENBRHFELENBQ3JCOztBQUNoQyxRQUFJRyxNQUFNLEdBQUd2QixDQUFDLENBQUMsc0JBQUQsQ0FBZDs7QUFFQSxTQUFLLElBQUl3QixDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHSixLQUFLLENBQUNiLE1BQTFCLEVBQWtDaUIsQ0FBQyxFQUFuQyxFQUF1QztBQUNuQyxVQUFJQyxJQUFJLEdBQUdMLEtBQUssQ0FBQ0ksQ0FBRCxDQUFoQjtBQUNBLFVBQUksQ0FBQ0MsSUFBSSxDQUFDQyxJQUFMLENBQVVDLEtBQVYsQ0FBZ0IsT0FBaEIsQ0FBTCxFQUErQjtBQUUvQixVQUFJQyxTQUFTLEdBQUcsSUFBSVQsVUFBSixFQUFoQjtBQUVBUyxlQUFTLENBQUNDLGdCQUFWLENBQTJCLE1BQTNCLEVBQW1DLFVBQVVSLEtBQVYsRUFBaUI7QUFDaEQsWUFBSVMsT0FBTyxHQUFHVCxLQUFLLENBQUNDLE1BQXBCO0FBQ0EsWUFBSVIsSUFBSSxHQUNKLDRDQUE0Q0MsR0FBNUMsR0FBa0QsSUFBbEQsR0FDSSwwQkFESixHQUVRLG1CQUZSLEdBRThCQSxHQUY5QixHQUVvQyxTQUZwQyxHQUVnRGUsT0FBTyxDQUFDQyxNQUZ4RCxHQUVpRSxJQUZqRSxHQUdJLFFBSEosR0FJQSxRQUxKO0FBT0FSLGNBQU0sQ0FBQ1MsTUFBUCxDQUFjbEIsSUFBZDtBQUNBQyxXQUFHLEdBQUdBLEdBQUcsR0FBRyxDQUFaO0FBQ0gsT0FYRDtBQWFBYSxlQUFTLENBQUNLLGFBQVYsQ0FBd0JSLElBQXhCO0FBQ0g7O0FBQ0RGLFVBQU0sQ0FBQ1csSUFBUDtBQUNILEdBMUJELE1BMEJPO0FBQ0hDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLDJCQUFaO0FBQ0g7QUFDSixDIiwiZmlsZSI6Ii9qcy9iYWNrZW5kL3Byb2plY3RzL3Byb2plY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyIkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcbiAgICAkZmlsZUlucHV0ID0gJCgnI2ltYWdlcycpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbigpe1xuICAgICAgICByZWFkSW1hZ2UoKTtcbiAgICB9KTtcblxuICAgIGlmKCQoJyNwcmV2aWV3LWltYWdlcy16b25lLWV4aXN0aW5nJykuY2hpbGRyZW4oKS5sZW5ndGggPT0gMCl7XG4gICAgICAgICQoJyNwcmV2aWV3LWltYWdlcy16b25lLWV4aXN0aW5nJykuaGlkZSgpO1xuICAgIH1cblxuICAgIC8vICQoIFwiI3ByZXZpZXctaW1hZ2VzLXpvbmVcIiApLnNvcnRhYmxlKCk7XG4gICAgJCggXCIjcHJldmlldy1pbWFnZXMtem9uZS1leGlzdGluZ1wiICkuc29ydGFibGUoKTtcblxuICAgICQoJy5pbWFnZS1jYW5jZWwnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgbGV0IG5vID0gJCh0aGlzKS5kYXRhKCdubycpO1xuICAgICAgICAkKFwiLnByZXZpZXctaW1hZ2UucHJldmlldy1zaG93LVwiK25vKS5yZW1vdmUoKTtcblxuICAgICAgICBpZigkKCcjcHJldmlldy1pbWFnZXMtem9uZS1leGlzdGluZycpLmNoaWxkcmVuKCkubGVuZ3RoID09IDApe1xuICAgICAgICAgICAgJCgnI3ByZXZpZXctaW1hZ2VzLXpvbmUtZXhpc3RpbmcnKS5oaWRlKCk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgICQoJyNjbGVhckltYWdlcycpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgICAgICRmaWxlSW5wdXQudmFsKCcnKTtcbiAgICAgICAgJChcIiNwcmV2aWV3LWltYWdlcy16b25lXCIpLmh0bWwoJycpO1xuICAgICAgICAkKFwiI3ByZXZpZXctaW1hZ2VzLXpvbmVcIikuaGlkZSgpO1xuICAgIH0pO1xufSk7XG5cblxuXG52YXIgbnVtID0gNDtcbmZ1bmN0aW9uIHJlYWRJbWFnZSgpIHtcbiAgICBpZiAod2luZG93LkZpbGUgJiYgd2luZG93LkZpbGVMaXN0ICYmIHdpbmRvdy5GaWxlUmVhZGVyKSB7XG4gICAgICAgIHZhciBmaWxlcyA9IGV2ZW50LnRhcmdldC5maWxlczsgLy9GaWxlTGlzdCBvYmplY3RcbiAgICAgICAgdmFyIG91dHB1dCA9ICQoXCIjcHJldmlldy1pbWFnZXMtem9uZVwiKTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZpbGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgZmlsZSA9IGZpbGVzW2ldO1xuICAgICAgICAgICAgaWYgKCFmaWxlLnR5cGUubWF0Y2goJ2ltYWdlJykpIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICB2YXIgcGljUmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcblxuICAgICAgICAgICAgcGljUmVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICB2YXIgcGljRmlsZSA9IGV2ZW50LnRhcmdldDtcbiAgICAgICAgICAgICAgICB2YXIgaHRtbCA9XG4gICAgICAgICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwicHJldmlldy1pbWFnZSBwcmV2aWV3LXNob3ctJyArIG51bSArICdcIj4nICtcbiAgICAgICAgICAgICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwiaW1hZ2Utem9uZVwiPicgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICc8aW1nIGlkPVwicHJvLWltZy0nICsgbnVtICsgJ1wiIHNyYz1cIicgKyBwaWNGaWxlLnJlc3VsdCArICdcIj4nICtcbiAgICAgICAgICAgICAgICAgICAgICAgICc8L2Rpdj4nICtcbiAgICAgICAgICAgICAgICAgICAgJzwvZGl2Pic7XG5cbiAgICAgICAgICAgICAgICBvdXRwdXQuYXBwZW5kKGh0bWwpO1xuICAgICAgICAgICAgICAgIG51bSA9IG51bSArIDE7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcGljUmVhZGVyLnJlYWRBc0RhdGFVUkwoZmlsZSk7XG4gICAgICAgIH1cbiAgICAgICAgb3V0cHV0LnNob3coKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZygnRmlsZSBmb3JtYXQgbm90IHN1cHBvcnRlZCcpO1xuICAgIH1cbn1cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==