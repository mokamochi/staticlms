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


$('.ix-forum-reply--reply-type').on('keyup input', function () {
  $(this).css('height', 'auto').css('height', this.scrollHeight + (this.offsetHeight - this.clientHeight));
});
$('.reply-134').on('click', function () {
  $('.ix-forum-reply--reply').toggle();
  $('.ix-forum-reply--reply textarea').focus();
});
$('.reply-135').on('click', function () {
  $('.ix-forum-reply--reply2').toggle();
  $('.ix-forum-reply--reply2 textarea').focus();
});
$('.reply-136').on('click', function () {
  $('.ix-forum-reply--reply3').toggle();
  $('.ix-forum-reply--reply3 textarea').focus();
});
$('.reply-137').on('click', function () {
  $('.ix-forum-reply--reply4').toggle();
  $('.ix-forum-reply--reply4 textarea').focus();
});
$('.reply-138').on('click', function () {
  $('.ix-forum-reply--reply5').toggle();
  $('.ix-forum-reply--reply5 textarea').focus();
});
$('.reply-139').on('click', function () {
  $('.ix-forum-reply--reply6').toggle();
  $('.ix-forum-reply--reply6 textarea').focus();
});
$('.btn-cancelzxx').on('click', function () {
  $('.ix-forum-reply--reply').hide();
});
$('.btn-cancelzxx2').on('click', function () {
  $('.ix-forum-reply--reply2').hide();
});
$('.btn-cancelzxx3').on('click', function () {
  $('.ix-forum-reply--reply3').hide();
});
$('.btn-cancelzxx4').on('click', function () {
  $('.ix-forum-reply--reply4').hide();
});
$('.btn-cancelzxx5').on('click', function () {
  $('.ix-forum-reply--reply5').hide();
});
$('.btn-cancelzxx6').on('click', function () {
  $('.ix-forum-reply--reply6').hide();
});
function success() {
  if (document.getElementById("textvalid").value === "") {
    document.getElementById('kirimtest').disabled = true;
  } else {
    document.getElementById('kirimtest').disabled = false;
  }
};
function success2() {
  if (document.getElementById("textvalid2").value === "") {
    document.getElementById('kirimtest2').disabled = true;
  } else {
    document.getElementById('kirimtest2').disabled = false;
  }
};
function success3() {
  if (document.getElementById("textvalid3").value === "") {
    document.getElementById('kirimtest3').disabled = true;
  } else {
    document.getElementById('kirimtest3').disabled = false;
  }
};
function success4() {
  if (document.getElementById("textvalid4").value === "") {
    document.getElementById('kirimtest4').disabled = true;
  } else {
    document.getElementById('kirimtest4').disabled = false;
  }
};
function success5() {
  if (document.getElementById("textvalid5").value === "") {
    document.getElementById('kirimtest5').disabled = true;
  } else {
    document.getElementById('kirimtest5').disabled = false;
  }
};
function success6() {
  if (document.getElementById("textvalid6").value === "") {
    document.getElementById('kirimtest6').disabled = true;
  } else {
    document.getElementById('kirimtest6').disabled = false;
  }
};


$(document).mouseup(function (e) {
  var container = $(".ix-navbar-dropdown");
  if (!container.is(e.target) && container.has(e.target).length === 0) {
    $('.ix-navbar-dropdown ul').removeClass('show');
    $('.bg-overlay1').fadeOut(100).removeClass('show');
  }
});

$(function () {
  $('.ix-navbar-menu ul.satu li a').each(function () {
    if ($(this).prop('href') == window.location.href) {
      $(this).addClass('active');
      $(this).parents('li').addClass('active');
    }
  });
});

$(document).ready(function () {
  $('.colsx')
    .theiaStickySidebar({
      additionalMarginTop: 88,
      additionalMarginBottom: 0
    });
  $('.colsx2')
    .theiaStickySidebar({
      additionalMarginTop: 88,
      additionalMarginBottom: 36
    });
});

$('.ix-course-week ul li a').on('click', function () {
  $('body,html').animate({
    scrollTop: 0
  }, 0);
});

$(function () {
  $('[data-toggle="tooltip"]').tooltip();
  $('.dropdown-toggle').dropdown()
});

$(document).ready(function () {
  $("#bykeyword").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    $("#participants tr").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });
  });
});
$(document).ready(function () {
  $("#bykeyword2").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    $("#course-grids .ix-grid-item").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });
  });
});