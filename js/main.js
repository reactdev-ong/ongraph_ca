$(document).ready(function() {
    $(".featproj-carousel").owlCarousel({

        // Most important owl features
        items: 1,
        itemsTablet: [768, 1],
        itemsDesktopSmall: [992, 1],
        itemsDesktop: [1199, 1],


        //Basic Speeds
        slideSpeed: 200,
        paginationSpeed: 800,
        rewindSpeed: 1000,


        //Autoplay
        autoPlay: true,
        stopOnHover: true,

        //Pagination
        pagination: true,
        paginationNumbers: false,

        // Responsive 
        responsive: true,
        responsiveRefreshRate: 200,
        responsiveBaseWidth: window
    });
});

$(document).ready(function() {
    $(".testi-carousel").owlCarousel({

        // Most important owl features
        items: 2,
        itemsTablet: [768, 2],
        itemsDesktopSmall: [992, 2],
        itemsDesktop: [1199, 2],

        //Basic Speeds
        slideSpeed: 800,
        paginationSpeed: 800,
        rewindSpeed: 1000,

        //Autoplay
        autoPlay: true,
        stopOnHover: true,

        //Pagination
        pagination: true,
        paginationNumbers: false,
        navigation: true,
        navigationText: ["<", ">"],

        // Responsive 
        responsive: true,
        responsiveRefreshRate: 200,
        responsiveBaseWidth: window
    });
});

// Counter UP

$(document).ready(function($) {
    $.fn.countTo = function(options) {
        // merge the default plugin settings with the custom options
        options = $.extend({}, $.fn.countTo.defaults, options || {});

        // how many times to update the value, and how much to increment the value on each update
        var loops = Math.ceil(options.speed / options.refreshInterval),
            increment = (options.to - options.from) / loops;

        return $(this).each(function() {
            var _this = this,
                loopCount = 0,
                value = options.from,
                interval = setInterval(updateTimer, options.refreshInterval);

            function updateTimer() {
                value += increment;
                loopCount++;
                $(_this).html(value.toFixed(options.decimals));

                if (typeof(options.onUpdate) == 'function') {
                    options.onUpdate.call(_this, value);
                }

                if (loopCount >= loops) {
                    clearInterval(interval);
                    value = options.to;

                    if (typeof(options.onComplete) == 'function') {
                        options.onComplete.call(_this, value);
                    }
                }
            }
        });
    };

    $.fn.countTo.defaults = {
        from: 0, // the number the element should start at
        to: 100, // the number the element should end at
        speed: 1000, // how long it should take to count between the target numbers
        refreshInterval: 100, // how often the element should be updated
        decimals: 0, // the number of decimal places to show
        onUpdate: null, // callback method for every time the element is updated,
        onComplete: null, // callback method for when the element finishes updating
    };

});

$(window).scroll(function() {
    if ($(this).scrollTop() > 1) {
        $('.navbar-fixed-top').addClass("darkHeader");

    } else {
        $('.navbar-fixed-top').removeClass("darkHeader");
    }
});

// Facts Counter

jQuery(document).ready(function($) {

    $triggered_times = 0;

    if ($(window).width() > 767) {

        $(window).on('load scroll', function() {

            var y_scroll_pos1 = $(window).scrollTop();
            if (y_scroll_pos1 > 150 && $triggered_times == 0) {

                //do your stuff over here
                $('.facts-list').addClass("animated bounceInLeft").css("opacity", "1");
                $triggered_times = 1; // to make sure the above action triggers only once
            }
        });
    } else {
        $('.facts-list').css("opacity", "1");
    }

});

jQuery(document).ready(function($) {

    $triggered_times2 = 0;

    $(window).on('load scroll', function() {

        var y_scroll_pos = $(window).scrollTop();
        if (y_scroll_pos > 550 && $triggered_times2 == 0) {

            //do your stuff over here
            $('.wrkus-icon-1, .wrkus-icon-2, .wrkus-icon-3, .wrkus-icon-4, .wrkus-icon-5, .wrkus-icon-6').addClass('animated fadeIn');

            $triggered_times2 = 1; // to make sure the above action triggers only once

        }
    });
});

jQuery(document).ready(function($) {

    $triggered_times3 = 0;

    $(window).on('load scroll', function() {

        var y_scroll_pos = $(window).scrollTop();
        if (y_scroll_pos > 1200 && $triggered_times3 == 0) {

            //do your stuff over here
            $('ul.techwrk_list-2 li').addClass('animated fadeIn');
            $triggered_times3 = 1;
        }
    });
});

jQuery(document).ready(function($) {

    $triggered_times4 = 0;

    $(window).on('load scroll', function() {

        var y_scroll_pos = $(window).scrollTop();
        if (y_scroll_pos >= 0 && $triggered_times4 == 0) {

            //do your stuff over here
            $('.home-bnr-1, .home-bnr-2, .home-bnr-3').addClass('animated fadeIn');
            $triggered_times4 = 1;
        }
    });
});

$('#myNavmenu').bind('show.bs.offcanvas hide.bs.offcanvas', function() {
    $('button[data-toggle="offcanvas"]').toggleClass('oc-open');
});

$('li.has-dropdwn > a').click(function() {
    $(this).next().slideToggle();
    $('i.fa', this).toggleClass("fa-caret-down fa-caret-up");
});

jQuery(document).ready(function($) {

    $triggered_times5 = 0;
    $(window).on('load scroll', function() {

        var y_scroll_pos = $(window).scrollTop();
        if (y_scroll_pos >= 1700 && $triggered_times5 == 0) {

            //do your stuff over here
            $('.process-container div[class^="col-"]').addClass('animated flipInY');
            $triggered_times5 = 1;
        }
        $('.process-container div[class^="col-"]').css("opacity", "1");
    });
});

jQuery(document).ready(function($) {

    $triggered_times6 = 0;
    $(window).on('load scroll', function() {
        var y_scroll_pos = $(window).scrollTop();
        if (y_scroll_pos >= 300 && $triggered_times6 == 0) {
            $('.dev-container div[class*="service-container-"]').addClass('animated fadeInLeft');
            $triggered_times6 = 1;
        }
        $('.process-container div[class^="col-"]').css("opacity", "1");
    });
});

jQuery(document).ready(function($) {

    $triggered_times7 = 0;
    $(window).on('load scroll', function() {
        var y_scroll_pos = $(window).scrollTop();
        if (y_scroll_pos >= 1200 && $triggered_times7 == 0) {
            $('.dev-expertise-container div[class*="service-container-"]').addClass('animated flipInX');
            $triggered_times7 = 1;
        }
        $('.dev-expertise-container div[class^="col-"]').css("opacity", "1");
    });
});

// FAQ Accordions 

$('.ac-container div label').click(function() {
    $(this).parent('.ac-container div').find('article').slideToggle();
});

$('.nav-tabs > li > a').hover(function() {
    $(this).tab('show');
});


$(".scrol_bottm").click(function() {
    $('html,body').animate({
        scrollTop: $(".bottom_form ").offset().top},
        2500);
});

$(document).on('keyup','input[type="text"],input[type="email"],textarea',function() {
    if(($(this).val()).replace(/\s+/g,"") == ''){
        $(this).val('');
    } 
});

$('.cntct-submit-btn').click(function() {

    //alert($(this).val());
    if($('#email').val()!='') {
        if(!isValidEmailAddress($('#email').val())) {
            //alert('wrong');
            $('#user-email-err').text('Please enter correct email.');
            setTimeout(function(){
                $('#user-email-err').text('');
            }, 5000);
            return false;
        }else {
            $('#user-email-err').text('');
            return true;
        }
    }else {
        $('#user-email-err').text('Please fill email.');
        setTimeout(function(){
            $('#user-email-err').text('');
        }, 5000);
        return false;
    }
});
function isValidEmailAddress(emailAddress) {
  var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
  return pattern.test(emailAddress);
};

$('.cntct-submit-btn').click(function() {
    //alert($('#req').val());
    var temp= true;
    //console.log($('#name').length);

    if($('#name').val()=='' || $('#name').val()==' ') {
        $('#user-name-err1').text('Please fill name.');
        setTimeout(function(){
            $('#user-name-err1').text('');
        }, 5000);
        temp = false;
    }

    if($('textarea#req').val()=='') {
        $('#user-msg-err').text('Please fill message.');
        setTimeout(function(){
            $('#user-msg-err').text('');
        }, 5000);
        temp = false;
    }

    if(temp==true) {
        return true;
    }else {
        return false;
    }
});