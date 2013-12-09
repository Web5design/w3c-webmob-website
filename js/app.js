$(function(){
  
  $('#taskforces').on('click', function(e){ 
    $('#taskforcelist').slideToggle(1000);
  });

  //er, we need to do this for touch slide in
  $('#menu').on('click', function(e){ 
    $('#menulist').animate({
      marginRight: '0px' 
    }, 500);
  });
})