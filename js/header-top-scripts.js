const scrollHeaderNav = document.getElementById('scroll-header-nav');


$(window).bind('mousewheel', function(event) {
    if (event.originalEvent.wheelDelta >= 0) {
        scrollHeaderNav.classList.add('hide');
    }
    else {
        scrollHeaderNav.classList.remove('hide');
    }
});

var header = $('#header-mobile__course__scroll'),
    scrollPrev = 0;

$(window).scroll(function() {
    var scrolled = $(window).scrollTop();

    if ( scrolled > 100 && scrolled > scrollPrev ) {
        header.addClass('not-visible');
    } else {
        header.removeClass('not-visible');
    }
    scrollPrev = scrolled;
});



