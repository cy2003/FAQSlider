// Accordian
var action="click"
var speed="500"

$(document).ready(function(){
  $('li.q').on(action, function(){
    //Gets the next element. Opens the answer
    $(this).next()
      .slideToggle(speed)
      //Select all other answers and closes them
        .siblings('li.a')
          .slideUp()
    //Get image for active question
    var img = $(this).children('img')
    //Remove the 'rotate' class for all images except the active
    $('img').not(img).removeClass('rotate')
    //Toggle rotate class
    img.toggleClass('rotate')
  })
})
