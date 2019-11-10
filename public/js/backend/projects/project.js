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


  $("#preview-images-zone-existing").sortable({
    items: 'div[id!=newImageDiv]'
  });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYmFja2VuZC9wcm9qZWN0cy9wcm9qZWN0LmpzIl0sIm5hbWVzIjpbIiQiLCJkb2N1bWVudCIsInJlYWR5IiwiJGZpbGVJbnB1dCIsIm9uIiwicmVhZEltYWdlIiwiY2hpbGRyZW4iLCJsZW5ndGgiLCJoaWRlIiwic29ydGFibGUiLCJpdGVtcyIsIm5vIiwiZGF0YSIsInJlbW92ZSIsInZhbCIsIm51bSIsIndpbmRvdyIsIkZpbGUiLCJGaWxlTGlzdCIsIkZpbGVSZWFkZXIiLCJmaWxlcyIsImV2ZW50IiwidGFyZ2V0Iiwib3V0cHV0IiwiaSIsImZpbGUiLCJ0eXBlIiwibWF0Y2giLCJwaWNSZWFkZXIiLCJhZGRFdmVudExpc3RlbmVyIiwicGljRmlsZSIsImh0bWwiLCJyZXN1bHQiLCJhcHBlbmQiLCJyZWFkQXNEYXRhVVJMIiwic2hvdyIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBQSxDQUFDLENBQUNDLFFBQUQsQ0FBRCxDQUFZQyxLQUFaLENBQWtCLFlBQVc7QUFDekJDLFlBQVUsR0FBR0gsQ0FBQyxDQUFDLFNBQUQsQ0FBRCxDQUFhSSxFQUFiLENBQWdCLFFBQWhCLEVBQTBCLFlBQVU7QUFDN0NDLGFBQVM7QUFDWixHQUZZLENBQWI7O0FBSUEsTUFBR0wsQ0FBQyxDQUFDLCtCQUFELENBQUQsQ0FBbUNNLFFBQW5DLEdBQThDQyxNQUE5QyxJQUF3RCxDQUEzRCxFQUE2RDtBQUN6RFAsS0FBQyxDQUFDLCtCQUFELENBQUQsQ0FBbUNRLElBQW5DO0FBQ0gsR0FQd0IsQ0FTekI7OztBQUNBUixHQUFDLENBQUUsK0JBQUYsQ0FBRCxDQUFxQ1MsUUFBckMsQ0FBOEM7QUFDMUNDLFNBQUssRUFBRTtBQURtQyxHQUE5QztBQUlBVixHQUFDLENBQUMsZUFBRCxDQUFELENBQW1CSSxFQUFuQixDQUFzQixPQUF0QixFQUErQixZQUFXO0FBQ3RDLFFBQUlPLEVBQUUsR0FBR1gsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRWSxJQUFSLENBQWEsSUFBYixDQUFUO0FBQ0FaLEtBQUMsQ0FBQyxpQ0FBK0JXLEVBQWhDLENBQUQsQ0FBcUNFLE1BQXJDLEdBRnNDLENBSXRDO0FBQ0E7QUFDQTtBQUNILEdBUEQ7QUFTQWIsR0FBQyxDQUFDLGNBQUQsQ0FBRCxDQUFrQkksRUFBbEIsQ0FBcUIsT0FBckIsRUFBOEIsWUFBVTtBQUNwQ0QsY0FBVSxDQUFDVyxHQUFYLENBQWUsRUFBZjtBQUNBZCxLQUFDLENBQUMsc0JBQUQsQ0FBRCxDQUEwQk0sUUFBMUIsQ0FBbUMsZ0JBQW5DLEVBQXFETyxNQUFyRDtBQUNBYixLQUFDLENBQUMsc0JBQUQsQ0FBRCxDQUEwQlEsSUFBMUI7QUFDQVIsS0FBQyxDQUFDLGlCQUFELENBQUQsQ0FBcUJRLElBQXJCO0FBQ0gsR0FMRDtBQU1ILENBN0JEO0FBaUNBLElBQUlPLEdBQUcsR0FBRyxDQUFWOztBQUNBLFNBQVNWLFNBQVQsR0FBcUI7QUFDakIsTUFBSVcsTUFBTSxDQUFDQyxJQUFQLElBQWVELE1BQU0sQ0FBQ0UsUUFBdEIsSUFBa0NGLE1BQU0sQ0FBQ0csVUFBN0MsRUFBeUQ7QUFDckQsUUFBSUMsS0FBSyxHQUFHQyxLQUFLLENBQUNDLE1BQU4sQ0FBYUYsS0FBekIsQ0FEcUQsQ0FDckI7O0FBQ2hDLFFBQUlHLE1BQU0sR0FBR3ZCLENBQUMsQ0FBQyxzQkFBRCxDQUFkOztBQUVBLFNBQUssSUFBSXdCLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdKLEtBQUssQ0FBQ2IsTUFBMUIsRUFBa0NpQixDQUFDLEVBQW5DLEVBQXVDO0FBQ25DLFVBQUlDLElBQUksR0FBR0wsS0FBSyxDQUFDSSxDQUFELENBQWhCO0FBQ0EsVUFBSSxDQUFDQyxJQUFJLENBQUNDLElBQUwsQ0FBVUMsS0FBVixDQUFnQixPQUFoQixDQUFMLEVBQStCO0FBRS9CLFVBQUlDLFNBQVMsR0FBRyxJQUFJVCxVQUFKLEVBQWhCO0FBRUFTLGVBQVMsQ0FBQ0MsZ0JBQVYsQ0FBMkIsTUFBM0IsRUFBbUMsVUFBVVIsS0FBVixFQUFpQjtBQUNoRCxZQUFJUyxPQUFPLEdBQUdULEtBQUssQ0FBQ0MsTUFBcEI7QUFDQSxZQUFJUyxJQUFJLEdBQ0osNENBQTRDaEIsR0FBNUMsR0FBa0QsSUFBbEQsR0FDSSwwQkFESixHQUVRLG1CQUZSLEdBRThCQSxHQUY5QixHQUVvQyxTQUZwQyxHQUVnRGUsT0FBTyxDQUFDRSxNQUZ4RCxHQUVpRSxJQUZqRSxHQUdJLFFBSEosR0FJQSxRQUxKO0FBT0FULGNBQU0sQ0FBQ1UsTUFBUCxDQUFjRixJQUFkO0FBQ0FoQixXQUFHLEdBQUdBLEdBQUcsR0FBRyxDQUFaO0FBQ0gsT0FYRDtBQWFBYSxlQUFTLENBQUNNLGFBQVYsQ0FBd0JULElBQXhCO0FBQ0g7O0FBQ0RGLFVBQU0sQ0FBQ1ksSUFBUDtBQUNBbkMsS0FBQyxDQUFDLGlCQUFELENBQUQsQ0FBcUJtQyxJQUFyQjtBQUNILEdBM0JELE1BMkJPO0FBQ0hDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLDJCQUFaO0FBQ0g7QUFDSixDIiwiZmlsZSI6Ii9qcy9iYWNrZW5kL3Byb2plY3RzL3Byb2plY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyIkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcbiAgICAkZmlsZUlucHV0ID0gJCgnI2ltYWdlcycpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbigpe1xuICAgICAgICByZWFkSW1hZ2UoKTtcbiAgICB9KTtcblxuICAgIGlmKCQoJyNwcmV2aWV3LWltYWdlcy16b25lLWV4aXN0aW5nJykuY2hpbGRyZW4oKS5sZW5ndGggPT0gMCl7XG4gICAgICAgICQoJyNwcmV2aWV3LWltYWdlcy16b25lLWV4aXN0aW5nJykuaGlkZSgpO1xuICAgIH1cblxuICAgIC8vICQoIFwiI3ByZXZpZXctaW1hZ2VzLXpvbmVcIiApLnNvcnRhYmxlKCk7XG4gICAgJCggXCIjcHJldmlldy1pbWFnZXMtem9uZS1leGlzdGluZ1wiICkuc29ydGFibGUoe1xuICAgICAgICBpdGVtczogJ2RpdltpZCE9bmV3SW1hZ2VEaXZdJ1xuICAgIH0pO1xuXG4gICAgJCgnLmltYWdlLWNhbmNlbCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICBsZXQgbm8gPSAkKHRoaXMpLmRhdGEoJ25vJyk7XG4gICAgICAgICQoXCIucHJldmlldy1pbWFnZS5wcmV2aWV3LXNob3ctXCIrbm8pLnJlbW92ZSgpO1xuXG4gICAgICAgIC8vIGlmKCQoJyNwcmV2aWV3LWltYWdlcy16b25lLWV4aXN0aW5nJykuY2hpbGRyZW4oKS5sZW5ndGggPT0gMCl7XG4gICAgICAgIC8vICAgICAkKCcjcHJldmlldy1pbWFnZXMtem9uZS1leGlzdGluZycpLmhpZGUoKTtcbiAgICAgICAgLy8gfVxuICAgIH0pO1xuXG4gICAgJCgnI2NsZWFySW1hZ2VzJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICAgICAgJGZpbGVJbnB1dC52YWwoJycpO1xuICAgICAgICAkKFwiI3ByZXZpZXctaW1hZ2VzLXpvbmVcIikuY2hpbGRyZW4oJy5wcmV2aWV3LWltYWdlJykucmVtb3ZlKCk7XG4gICAgICAgICQoXCIjcHJldmlldy1pbWFnZXMtem9uZVwiKS5oaWRlKCk7XG4gICAgICAgICQoJyNuZXdJbWFnZXNMYWJlbCcpLmhpZGUoKTtcbiAgICB9KTtcbn0pO1xuXG5cblxudmFyIG51bSA9IDQ7XG5mdW5jdGlvbiByZWFkSW1hZ2UoKSB7XG4gICAgaWYgKHdpbmRvdy5GaWxlICYmIHdpbmRvdy5GaWxlTGlzdCAmJiB3aW5kb3cuRmlsZVJlYWRlcikge1xuICAgICAgICB2YXIgZmlsZXMgPSBldmVudC50YXJnZXQuZmlsZXM7IC8vRmlsZUxpc3Qgb2JqZWN0XG4gICAgICAgIHZhciBvdXRwdXQgPSAkKFwiI3ByZXZpZXctaW1hZ2VzLXpvbmVcIik7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmaWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGZpbGUgPSBmaWxlc1tpXTtcbiAgICAgICAgICAgIGlmICghZmlsZS50eXBlLm1hdGNoKCdpbWFnZScpKSBjb250aW51ZTtcblxuICAgICAgICAgICAgdmFyIHBpY1JlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG5cbiAgICAgICAgICAgIHBpY1JlYWRlci5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgdmFyIHBpY0ZpbGUgPSBldmVudC50YXJnZXQ7XG4gICAgICAgICAgICAgICAgdmFyIGh0bWwgPVxuICAgICAgICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cInByZXZpZXctaW1hZ2UgcHJldmlldy1zaG93LScgKyBudW0gKyAnXCI+JyArXG4gICAgICAgICAgICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cImltYWdlLXpvbmVcIj4nICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnPGltZyBpZD1cInByby1pbWctJyArIG51bSArICdcIiBzcmM9XCInICsgcGljRmlsZS5yZXN1bHQgKyAnXCI+JyArXG4gICAgICAgICAgICAgICAgICAgICAgICAnPC9kaXY+JyArXG4gICAgICAgICAgICAgICAgICAgICc8L2Rpdj4nO1xuXG4gICAgICAgICAgICAgICAgb3V0cHV0LmFwcGVuZChodG1sKTtcbiAgICAgICAgICAgICAgICBudW0gPSBudW0gKyAxO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHBpY1JlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUpO1xuICAgICAgICB9XG4gICAgICAgIG91dHB1dC5zaG93KCk7XG4gICAgICAgICQoJyNuZXdJbWFnZXNMYWJlbCcpLnNob3coKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZygnRmlsZSBmb3JtYXQgbm90IHN1cHBvcnRlZCcpO1xuICAgIH1cbn1cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==