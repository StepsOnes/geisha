const headerNav = document.getElementById('header-nav');
const headerTopArticleScroll = document.getElementById('header-top__article-scroll');

$(window).bind('mousewheel', function(event) {
if (event.originalEvent.wheelDelta >= 0) {
    headerTopArticleScroll.classList.add('hide');
 }
else {
    headerTopArticleScroll.classList.remove('hide');
}
});

var header = $('#article-mob__scroll'),
    scrollPrev = 0;

$(window).scroll(function() {
    var scrolled = $(window).scrollTop();

    if ( scrolled > 100 && scrolled > scrollPrev ) {
        header.addClass('visible');
    } else {
        header.removeClass('visible');
    }
    scrollPrev = scrolled;
});

