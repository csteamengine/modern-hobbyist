$(window).scroll(function() {
    if ($(this).scrollTop() < 500) { //use `this`, not `document`
        $('footer').hide();
    }else{
        $('footer').show();
    }
});

//made by vipul mirajkar thevipulm.appspot.com
var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 1000;
    }

    setTimeout(function() {
        that.tick();
    }, delta);
};

$(document).ready(function() {
    var pattern = Trianglify({
        width: $('.page-content').width(),
        height: $('.page-content').height(),
        cell_size: 300,
        x_colors: ['#2B2B2B','#303335', '#3B3F41','#303335','#3B3F41','#303335','#2B2B2B'],
        y_colors: ['#2B2B2B','#303335', '#3B3F41','#303335','#3B3F41','#303335','#2B2B2B']
    });
    $('.page-content').append(pattern.canvas());
    $('.page-content').css('background-color', 'transparent');
    $('body').scrollspy();

    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);

    $("#nav ul li a[href^='#']").on('click', function(e) {
        // prevent default anchor click behavior
        e.preventDefault();

        // store hash
        var hash = this.hash;

        // animate
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 1000, function(){

            // when done, add hash to url
            // (default click behaviour)
            window.location.hash = hash;
        });

    });

});

$(window).ready(function(){
    if ($(this).scrollTop() < 500) { //use `this`, not `document`
        $('footer').hide();
    }else{
        $('footer').show();
    }

    $('.project-bg').each(function(){
        var imageElement = $(this);
        var image = $(this).data('image');

        if(image.length != 0){
            var img = $('<img />').attr({
                'src': image,
            }).on('load', function() {
                // imageElement.attr('src', image);
                imageElement.css('background', 'url("'+image+'") center center');
                imageElement.css('background-size', 'cover');
            });
        }
    });
});
