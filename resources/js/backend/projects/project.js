$(document).ready(function() {
    $fileInput = $('#images').on('change', function(){
        readImage();
    });

    if($('#preview-images-zone-existing').children().length == 0){
        $('#preview-images-zone-existing').hide();
    }

    // $( "#preview-images-zone" ).sortable();
    $( "#preview-images-zone-existing" ).sortable();

    $('.image-cancel').on('click', function() {
        let no = $(this).data('no');
        $(".preview-image.preview-show-"+no).remove();

        if($('#preview-images-zone-existing').children().length == 0){
            $('#preview-images-zone-existing').hide();
        }
    });

    $('#clearImages').on('click', function(){
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
    } else {
        console.log('File format not supported');
    }
}

