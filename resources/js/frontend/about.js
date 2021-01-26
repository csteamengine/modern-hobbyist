import "jquery-lazy";
import "jquery-lazy/jquery.lazy.plugins";

$(window).ready(function(){
    $('.about-image').each(function(){
        var imageElement = $(this);
        var image = $(this).data('image');

        if(image.length != 0){
            var img = $('<img />').attr({
                'src': image,
            }).on('load', function() {
                imageElement.css('background', 'url("'+image+'") center center');
                imageElement.css('background-size', 'cover');
            });
        }
    });
    $('.about-image-small').each(function(){
        var imageElement = $(this);
        var image = $(this).data('image');

        if(image.length != 0){
            var img = $('<img />').attr({
                'src': image,
            }).on('load', function() {
                imageElement.attr("src",image)
            });
        }
    });
});
