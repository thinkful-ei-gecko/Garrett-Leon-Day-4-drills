'use strict';

function thumbnailClicks() {
  $('.thumbnail').on('click', e => {
    //find the attributes of the clicked image
    const imgSelection = $(event.currentTarget).find('input');
    const imgSrc = imgSelection.attr('src');
    const imgAlt = imgSelection.attr('alt');
    
    //turn off all aria-pressed=true previously and set the selection to 'aria-pressed=true' on current -> for accessibility?
    let otherSelections = $(event.currentTarget).not(imgSelection);
    otherSelections.attr('aria-pressed',false);
    imgSelection.attr('aria-pressed','true');


    //set the attributes of the clicked image to the top image
    $('.hero').find('img').attr('src',imgSrc).attr('alt',imgAlt);
  });
}

$(thumbnailClicks);








