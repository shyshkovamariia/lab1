// гарантуємо, що header заповнює висоту вікна
$(document).ready(function () {
  function setHeaderHeight() {
    $('.header').css('min-height', $(window).height() * 0.8 + 'px');
  }
  setHeaderHeight();
  $(window).on('resize', setHeaderHeight);
});
