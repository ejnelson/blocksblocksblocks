$(function () {
  $('#creator').on('click',function(){

    var one=randomNumber(0,256);
    var two=randomNumber(0,256);
    var three=randomNumber(0,256);


    $('body').append('<section class="block" style="background-color:rgb('+one+','+two+','+three+');border:10px solid rgb('+three+','+one+','+two+');"><span class="delete">X</span></section>');
    $('body').css('background-color','rgb('+two+','+three+','+one+')');
    $('#creator').css('background-color','rgb('+one+','+three+','+two+')');
    $('.delete').css('color','rgb('+three+','+two+','+one+')');
    console.log('click');
  });
  $('.block').on('click',function(){
    $(this).css('background-color','black');
    console.log('click');
  });


});
$(document).on('click','.block',function(){
  $(this).css('background-color','black');
  $(this).css('border','10px solid white');
  console.log('click');
});
$(document).on('click','.delete',function(){
  $(this).parent().remove();
  console.log('click');
});

function randomNumber(min, max){
return Math.floor(Math.random() * (1 + max - min) + min);
}
