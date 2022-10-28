
$(document).ready(function(){
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
    items: 3,
    nav: true,
    navText: [
      '<button id="master-classes__btn-pred" class="master-classes__btn master-classes__btn--blue"></button>',
      '<button id="master-classes__btn-next" class="master-classes__btn master-classes__btn--blue"></button>'
    ]
});
  
}); 