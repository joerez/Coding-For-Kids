$( document ).ready(function() {



  $('#triggerbtn').click(function(){
    $('.contactarea').css("display", "block");
    $('.arrow').css("display", "block");
  })

  $('.logo').draggable({revert: true, scroll: false});

  $('#triggerbtn2').click(function(){
    $('.contactarea').css("display", "block");
    $('.textVersion').css("display", "block");
  })

/*  $('.har').hover(
    function(){ $(this).addClass('animated flash') },
       function(){ $(this).removeClass('animated flash') }
  )*/

});
