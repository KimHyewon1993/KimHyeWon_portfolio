/* Trigger */
$('.trigger').click(function(){
  $(this).toggleClass('active');
  $('.gnb').toggleClass('active');
});
$('section').click(function(){
  $('.gnb').removeClass('active');
  $('.trigger').removeClass('active');
});