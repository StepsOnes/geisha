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

