const headerNav = document.getElementById('header-nav');
const scrollHeaderNav = document.getElementById('scroll-header-nav');

$(window).bind('mousewheel', function(event) {
if (event.originalEvent.wheelDelta >= 0) {
    scrollHeaderNav.classList.add('hide');
 }
else {
    scrollHeaderNav.classList.remove('hide');
}
});

