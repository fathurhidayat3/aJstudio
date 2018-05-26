$(function () {
  $(document).scroll(function () {
    var $nav = $(".ajs__navbar");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});