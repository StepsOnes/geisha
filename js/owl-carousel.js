
$(document).ready(function() {
    $(".company-teachers__slaider").owlCarousel({
        dots: false,
        margin: 30,
        autoWidth: true,
        items: 3,

    });

    $(".master-classes__course-slaider").owlCarousel({
        items: 3,
        autoWidth: true,
        dots: false,
        nav: false,
        mouseDrag: false,
        margin: 16,

        navText: [
            '<button id="master-classes__btn-pred" class="master-classes__btn"></button>',
            '<button id="master-classes__btn-next" class="master-classes__btn"></button>'
        ],

        responsive: {
            1250: {
                nav: true,
                margin: 30,
            }
        }
    });

    $(".master-classes__blocks__slaider").owlCarousel({
        dots: false,
        margin: 30,
        autoWidth: true,
        items: 3,

    });

    $(".article_blocks__slaider").owlCarousel({
        dots: false,
        margin: 16,
        autoWidth: true,
        items: 4,
        nav: false,
        navText: [
            '<button id="master-classes__btn-pred" class="master-classes__btn master-classes__btn--blue"></button>',
            '<button id="master-classes__btn-next" class="master-classes__btn master-classes__btn--blue"></button>'
        ],

        responsive: {
            500: {
                items: 1,
                nav: true,
                margin: 30,
            }
        }

    });


    $(".search-slider").owlCarousel({
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
        margin: 12,

        responsive: {
            1250: {
                margin: 30,
            }
        }

    });

    $("#course-date__block__slaider").owlCarousel({
        dots: false,
        autoWidth: true,
        margin: 12,

        responsive: {
            1250: {
                margin: 30,
            }
        }
    });

    $("#course-date__block__slaider-2").owlCarousel({
        dots: false,
        autoWidth: true,
        margin: 12,

        responsive: {
            1250: {
                margin: 30,
            }
        }
    });

    $("#course-date__block__slaider-3").owlCarousel({
        dots: false,
        autoWidth: true,
        margin: 12,

        responsive: {
            1250: {
                margin: 30,
            }
        }
    });



    // $(".timetable__date-box--slaider").owlCarousel({
    //     dots: false,
    //     margin: 15,
    //     autoWidth: true,
    //
    //     responsive: {
    //         1250: {
    //             items: 1,
    //             margin: 30,
    //         }
    //     }
    // });

    $(window).on('resize', function(){
        if($(window).width() <= 767) {
            $('.timetable__date-box--slaider').addClass('owl-carousel');
            $(".timetable__date-box--slaider").owlCarousel({
                dots: false,
                margin: 15,
                autoWidth: true,
                // responsive: {
                //     1250: {
                //         margin: 30,
                //     }
                // }
            });
        }
        else {
            $('.timetable__date-box--slaider').removeClass('owl-carousel');
            $(".timetable__date-box--slaider").trigger('destroy.owl.carousel');
        }
    }).trigger('resize');


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

// $(document).ready(function(){
//     $(window).on('resize', function(){
//         if($(window).width() <= 767) {
//             $('.timetable__date-box--slaider').addClass('owl-carousel');
//         }
//         else {
//             $('.timetable__date-box--slaider').removeClass('owl-carousel');
//         }
//     }).trigger('resize');
// });

  