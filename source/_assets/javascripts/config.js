function typeWriter(){
  var $typeWriter = $('.work-typer'),
      works = ['Webdesigner', 'Freelancer', 'Developer'];

  $typeWriter.typed({
    strings: works,
    typeSpeed: 80,
    backDelay: 2e3,
    loop: !0,
    startDelay: 1e3
  })
}

function navButtonClick() {
  $('.menu-button').on('click', function(){
    var status = $(this).hasClass('visible');
    if(status){ $('.menu-overlay, .main-container, .menu-button').removeClass('visible'); }
    else { $('.menu-overlay, .main-container, .menu-button').addClass('visible'); }
  });
}

$(function(){
  var $menuButton = $('.menu-button');

  navButtonClick();
  typeWriter();
})