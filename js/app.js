var typed = new Typed('.type', {
    // Waits 1000ms after typing "First"
    strings: ['Web Designer',
            'Web Developer',
            'Youtuber'
        ],
        typeSpeed: 120,
        loop: true
  });

  $(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items: 3,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
    });
  });