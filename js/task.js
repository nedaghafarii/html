
$('li').on('mouseenter', function () {
  $(this).prevAll().removeClass('selected');
  $(this).addClass('hover');
  $(this).nextAll().addClass('hover');
});
$('li').on('mouseleave', function () {
  $(this).removeClass('hover');
  $(this).nextAll().removeClass('hover');
  $('.active').addClass('selected');
});
$('li').on('click', function () {
  $(this).prevAll().removeClass('active selected');
  $(this).addClass('selected active');
  $(this).nextAll().addClass('selected active');
});
