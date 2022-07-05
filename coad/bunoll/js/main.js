$('.busan_img').slick({
  'arrows': false,
  autoplay: true,
  autoplaySpeed: 3000,
});
// ----------------------------------메인배너
$(".slide_banner").slick({
  'dots': true,
  'nextArrow': '#ctrl .next',
  'prevArrow': '#ctrl .prev',
  autoplay: true,
  autoplaySpeed: 2000,
});
// ----------------------------------이벤트배너

$(".r2").find('.number').slick({
  'nextArrow': '.r2 .right',
  'prevArrow': '.r2 .left',
  'asNavFor': '.r2 .img, .r2 .txt',
  'fade': true
});
$(".r2").find('.img').slick({
  'arrows': false,
  'asNavFor': '.r2 .number, .r2 .txt'
});
$(".r2").find('.txt').slick({
  'arrows': false,
  'asNavFor': '.r2 .number, .r2 .img'
});

$('.r2 .arrow a').click(function (e) {
  e.preventDefault();
});
// ------------------------------인기 관광지

$(window).on('scroll', function () {
  let scr = $(window).scrollTop();

  if (scr === 0) {
    $('header').removeClass('on');
  } else {
    $('header').addClass('on');
  }
})

// ---------------------------header
$("section").on("mousewheel", function (e, d) {

  if (d < 0) {
    let nxt = $(this).next().offset().top;
    $("html, body").stop().animate({
      scrollTop: nxt
    });
  } else if (d > 0) {
    let prv = $(this).prev().offset().top;
    $("html, body").stop().animate({
      scrollTop: prv
    });
  }
});

// -------------------------------------------------화면 휙휙------------
$(".r1 .icon").children().on("click", function () {
  let i = $(this).index();

  $(".map ul").eq(i).children().show();
  $(".map ul").eq(i).siblings().children().hide()
});
// --------------------------------------------------지도