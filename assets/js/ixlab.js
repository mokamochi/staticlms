// JS

// Clone
$('.ix-navbar-dropdown a span').clone().prependTo('.ix-navbar-dropdown ul li:nth-child(1)');
$('.ix-grid-3 .ix-grid-item:nth-child(3n+3)').after('<div class="clear"></div>');

$('.section-isi-materi ul.section li.activity:has(.contentwithoutlink) .actions').remove();
$('.my-course-grid-profile-listing .ix-grid-item:nth-child(n+5)').hide();
$('.ix-profile-c-more').on('click', function () {
  $('.my-course-grid-profile-listing .ix-grid-item:nth-child(n+5)').toggle();
});

$('.mk-history li:nth-child(1) i').clone().prependTo('.mk-history li');
$('.kb-list li:nth-child(1) i').clone().prependTo('.kb-list li');
$('.task-list li:nth-child(1) i').clone().prependTo('.task-list li');

$('.ix-navbar-dropdown a').on('click', function () {
  $('.ix-navbar-dropdown ul').toggleClass('show');
  $('.bg-overlay1').fadeToggle(100).toggleClass('show');
});

$(document).mouseup(function (e) {
  var container = $(".ix-navbar-dropdown");
  if (!container.is(e.target) && container.has(e.target).length === 0) {
    $('.ix-navbar-dropdown ul').removeClass('show');
    $('.bg-overlay1').fadeOut(100).removeClass('show');
  }
});

$(function() {
  $('.ix-navbar-menu ul.satu li a').each(function() {
    if ($(this).prop('href') == window.location.href) {
      $(this).addClass('active');
      $(this).parents('li').addClass('active');
    }
  });
});

$(document).ready(function() {
  $('.colsx')
    .theiaStickySidebar({
      additionalMarginTop: 88,
      additionalMarginBottom: 0
    });
});

$('.ix-course-week ul li a').on('click', function () {
  $('body,html').animate({
    scrollTop: 0
  }, 0);
});

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})