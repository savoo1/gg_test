// alert("2");

  $( ".customnavbar .hambmenu" ).click(function() {
    if($(this).parent().parent().hasClass("menu_activated")){
    	$(this).parent().parent().removeClass("menu_activated");
    }
    else{
    	$(this).parent().parent().addClass("menu_activated");
    }
  });

$('a[href*="#"]').on('click', function (e) {
  if($(this).hasClass("scrolldown")){
    e.preventDefault()

    $('html, body').animate(
      {
        scrollTop: $($(this).attr('href')).offset().top,
      },
      1500,
      'linear'
    )
  }
})