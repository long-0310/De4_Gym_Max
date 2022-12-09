$(document).ready(function () {
  $(".customer-inner").slick({
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
  });
  // change tab
  $(".tab-bar-list p").click(function (e) {
    e.preventDefault();
    $(".active").removeClass("active");
    $(this).addClass("active");
    var id = this.id;
    console.log(id);
    $("." + id).addClass("active");
  });

  //scroll tab
  $(window).scroll(function () {
    if ($(window).scrollTop() > 200) {
      $(".header").addClass("header-scroll");
    } else {
      $(".header").removeClass("header-scroll");
    }
  });
  // open nav-mobile
  $(".nav-icon").click(function (e) {
    e.preventDefault();
    $(".nav-bar").addClass("active");
    $(".cover").addClass("active");
  });
  $(".cover").click(function (e) {
    e.preventDefault();
    $(".nav-bar").removeClass("active");
    $(".cover").removeClass("active");
  });
});
