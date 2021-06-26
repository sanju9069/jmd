$(document).ready(function () {
  $("#homeBanner").slick({
    fade: true,
    cssEase: "linear",
  });

  $("#gallery_content_div").slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: "unslick"
        // settings: {
        //   slidesToShow: 2,
        //   slidesToScroll: 1,
        //   arrows: false,
        //   centerMode: false,
        //   centerPadding: "80px"
        // },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });
});
