 $(function() {
    
    var $filter = $('.filter');
    var $tab = $('.filter button');
    var $offers = $('.populargroup .box');
    
    
    
    $filter.on('click touch', '.all',  function(e) {
      e.preventDefault();
      $tab.removeClass('current');
      $(this).addClass('current');
      
      $offers.hide();
      $offers.fadeIn( 700 );
      
    });
    
    
    $filter.on('click touch', '.bestseller',  function(e) {
      e.preventDefault();
      $tab.removeClass('current');
      $(this).addClass('current');
      
      $offers.show();
      $offers.fadeOut( 400 );
      $offers.filter('.bestseller').fadeIn( 400 );
    
    });
    
    
    
    $filter.on('click touch', '.mostpopular',  function(e) {
      e.preventDefault();
      $tab.removeClass('current');
      $(this).addClass('current');
      
      $offers.show();
      $offers.fadeOut( 400 );
      $offers.filter('.mostpopular').fadeIn( 400 );
     
    });
    
    
    
    $filter.on('click touch', '.featured',  function(e) {
      e.preventDefault();
      $tab.removeClass('current');
      $(this).addClass('current');
      
      $offers.show();
      $offers.fadeOut( 400 );
      $offers.filter('.featured').fadeIn( 400 );
     
    });
    
    
  });

// Increase/Decrease


 function increaseValue() {
  var value = parseInt(document.getElementById('number').value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  document.getElementById('number').value = value;
}

function decreaseValue() {
  var value = parseInt(document.getElementById('number').value, 10);
  value = isNaN(value) ? 0 : value;
  value < 1 ? value = 1 : '';
  value--;
  document.getElementById('number').value = value;
}

// Star Rating

$(document).ready(function(){
  
  /* 1. Visualizing things on Hover - See next part for action on click */
  $('#stars li').on('mouseover', function(){
    var onStar = parseInt($(this).data('value'), 10); // The star currently mouse on
   
    // Now highlight all the stars that's not after the current hovered star
    $(this).parent().children('li.star').each(function(e){
      if (e < onStar) {
        $(this).addClass('hover');
      }
      else {
        $(this).removeClass('hover');
      }
    });
    
  }).on('mouseout', function(){
    $(this).parent().children('li.star').each(function(e){
      $(this).removeClass('hover');
    });
  });
  
  
  /* 2. Action to perform on click */
  $('#stars li').on('click', function(){
    var onStar = parseInt($(this).data('value'), 10); // The star currently selected
    var stars = $(this).parent().children('li.star');
    
    for (i = 0; i < stars.length; i++) {
      $(stars[i]).removeClass('selected');
    }
    
    for (i = 0; i < onStar; i++) {
      $(stars[i]).addClass('selected');
    }
  });
});