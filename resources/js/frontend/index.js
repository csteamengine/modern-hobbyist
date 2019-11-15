$(window).scroll(function() {
    // console.log($(this).scrollTop());
    updateBackground();
    updateHeader();
});

function updateBackground(){
    if($(this).scrollTop() >= ($('#about').offset().top - $('#nav').outerHeight()) && $(this).scrollTop() < ($('#career').offset().top - $('#nav').outerHeight())){
        $('.fullscreen-bg').hide();
        $('.homeText').hide();
        $('.poly-background canvas').show();
        $('footer').hide();
    }else if($(this).scrollTop() >= ($('#career').offset().top - $('#nav').outerHeight())){
        $('.fullscreen-bg').hide();
        $('.homeText').hide();
        $('.poly-background canvas').hide();
        $('footer').show();
    }else{
        $('.fullscreen-bg').show();
        $('.homeText').show();
        $('.poly-background canvas').hide();
        $('footer').hide();
    }
}

function updateHeader(){
    if($(this).scrollTop() >= ($('#about').offset().top - $('#nav').outerHeight()) && $(this).scrollTop() < ($('#about').offset().top + $('#about').outerHeight() + $('.row-overlap').outerHeight()/2)){
        $('#nav').addClass('navbar-white');
    }else if($(this).scrollTop() >= ($('#career').offset().top - $('#nav').outerHeight()) && $(this).scrollTop() < ($('#career').offset().top + $('#career').outerHeight())){
        $('#nav').addClass('navbar-white');
    }else{
        $('#nav').removeClass('navbar-white');
    }
}

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
        width: $(window).width(),
        height: $(window).height(),
        cell_size: 300,
        x_colors: ['#2B2B2B','#303335', '#3B3F41','#303335','#3B3F41','#303335','#2B2B2B'],
        y_colors: ['#2B2B2B','#303335', '#3B3F41','#303335','#3B3F41','#303335','#2B2B2B']
    });

    $('.poly-background').append(pattern.canvas());
    $('.page-content').css('background-color', 'transparent');

    updateBackground();
    updateHeader();

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
