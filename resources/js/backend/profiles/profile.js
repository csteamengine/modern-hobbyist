import "summernote";
import "bootstrap";
import "jquery";
import "jquery-ui";
import "jquery-ui/ui/widgets/sortable";

$(document).ready(function() {
    var $fileInput = $('#images').on('change', function(){
        readImage();
    });

    if($('#preview-images-zone-existing').children().length == 0){
        $('#preview-images-zone-existing').hide();
    }

    $( "#preview-images-zone-existing" ).sortable();

    $('.image-cancel').on('click', function() {
        let no = $(this).data('no');
        $(".preview-image.preview-show-"+no).remove();

        // if($('#preview-images-zone-existing').children().length == 0){
        //     $('#preview-images-zone-existing').hide();
        // }
    });

    $('.image-url').on('click', function(){
        /* Get the text field */
        var imageURL = $(this).data('url');

        var $temp = $("<input>");
        $("body").append($temp);
        $temp.val(imageURL).select();
        console.log($temp.val());

        /* Copy the text inside the text field */
        document.execCommand("copy");
    });

    $('#clearImages').on('click', function(){
        $fileInput.val('');
        $("#preview-images-zone").children('.preview-image').remove();
        $("#preview-images-zone").hide();
        $('#newImagesLabel').hide();
    });

    $(document).ready(function() {
        $('#summernote').summernote({
            height: 300,
            toolbar: [
                ['style', ['style']],
                ['font', ['bold', 'underline', 'clear']],
                ['fontname', ['fontname']],
                ['color', ['color']],
                ['para', ['ul', 'ol', 'paragraph']],
                ['table', ['table']],
                ['insert', ['link', 'picture', 'video']],
                ['view', ['fullscreen', 'codeview', 'help']],
            ]
        });
    });
});



var num = 4;
function readImage() {
    if (window.File && window.FileList && window.FileReader) {
        var files = event.target.files; //FileList object
        var output = $("#preview-images-zone");

        for (let i = 0; i < files.length; i++) {
            var file = files[i];
            if (!file.type.match('image')) continue;

            var picReader = new FileReader();

            picReader.addEventListener('load', function (event) {
                var picFile = event.target;
                var html =
                    '<div class="preview-image preview-show-' + num + '">' +
                        '<div class="image-zone">' +
                            '<img id="pro-img-' + num + '" src="' + picFile.result + '">' +
                        '</div>' +
                    '</div>';

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

// Add the following code if you want the name of the file appear on select
$(".custom-file-input").on("change", function() {
    var fileName = $(this).val().split("\\").pop();
    $(this).siblings(".custom-file-label").addClass("selected").html(fileName);
});

$('#about_image_file').on('change', function(){
    if ($(this)[0].files && $(this)[0].files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#about-image-preview').attr('src', e.target.result);
        };
        reader.readAsDataURL($(this)[0].files[0]);
    }

});
