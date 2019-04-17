$('dt').on('mouseenter', function () {
  $(this).siblings('dd').css('display', 'none');
  $(this).next().css('display', 'inline-block');
});
