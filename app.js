$(function () {
  $('#creator').on('click',function(){
    var rand=Math.random();
    var css='';
    if(rand<0.2){
      css='#0F0'
    }else if(rand<0.4){
      css='#00F'
    }else if(rand<0.6){
      css='#F00'
    }else if(rand<0.8){
      css='#FF0'
    }else {
      css='#0FF'
    }

    $('body').append('<section class="block" style="background-color:'+css+';"><span class="delete">X</span></section>');
    console.log('click');
  });
  $('.block').on('click',function(){
    $(this).css('background-color','black');
    console.log('click');
  });


});
$(document).on('click','.block',function(){
  $(this).css('background-color','black');
  console.log('click');
});
$(document).on('click','.delete',function(){
  $(this).parent().remove();
  console.log('click');
});
