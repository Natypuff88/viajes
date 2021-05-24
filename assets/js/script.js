
$(function () {
    //tooltip rrss
    $('[data-toggle="tooltip"]').tooltip();
    //hover  focus in titulo texto azul
    $(".overazul").mouseover(function() { 
        $("#"+$(this).data().id).css('color', '#18a2c5')
    });
    //hover  focus out titulo texto blanco
    $('.overazul').mouseout(function(){
        $("#"+$(this).data().id).css('color', '#fafafa')
    })
  })