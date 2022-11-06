
$(document).ready(function() {
    $(".company-teachers__slaider").owlCarousel({
        dots: false,
        margin: 30,
        autoWidth: true,
        items: 3,

    });

    $(".master-classes__course-slaider").owlCarousel({
        items: 3,
        margin: 60,
        dots: false,
        nav: true,
        mouseDrag: false,

        navText: [
            '<button id="master-classes__btn-pred" class="master-classes__btn"></button>',
            '<button id="master-classes__btn-next" class="master-classes__btn"></button>'
        ]
    });

    $(".master-classes__blocks__slaider").owlCarousel({
        dots: false,
        margin: 30,
        autoWidth: true,
        items: 3,

    });

    $(".article_blocks__slaider").owlCarousel({
        dots: false,
        margin: 30,
        autoWidth: true,
        items: 4,
        nav: true,
        navText: [
            '<button id="master-classes__btn-pred" class="master-classes__btn master-classes__btn--blue"></button>',
            '<button id="master-classes__btn-next" class="master-classes__btn master-classes__btn--blue"></button>'
        ],

        responsive: {
            500: {
                items: 1,
                nav: false,
            }
        }

    });


    $(".search-slider ").owlCarousel({
        dots: false,
        margin: 30,
        autoWidth: true,
        items: 3,
        nav: true,
        navText: [
            '<button id="master-classes__btn-pred" class="master-classes__btn master-classes__btn--blue"></button>',
            '<button id="master-classes__btn-next" class="master-classes__btn master-classes__btn--blue"></button>'
        ]
    });

    $(".course-lessons__cards").owlCarousel({
        dots: false,
        margin: 15,
        autoWidth: true,
        items: 3,


        responsive: {
            1250: {
                items: 1,
                margin: 30,
                touchDrag: true,
                mouseDrag: true,
            }
        }
    });

    $("#select-buttons-carousel-1").owlCarousel({
        dots: false,
        autoWidth: true,
        items: 4,
        margin: 12,

        responsive: {
            1250: {
                margin: 30,
            }
        }

    });


    $(function () {
        $(window).on('resize', function () {
            var owlCarousel = $('.reviews-slaider-mobile').data('owlCarousel');
            if ($(window).width() <= 767) {
                !owlCarousel && $('.reviews-slaider-mobile').owlCarousel({
                    dots: false,
                    margin: 16,
                    autoWidth: true,
                    items: 0,
                });
            } else {
                owlCarousel && owlCarousel.destroy();
            }
        }).trigger('resize');
    })
});


  