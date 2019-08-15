'use strict';

function thumbnailClicks() {
  $('.thumbnail').on('click', e => {
    const imgSrc = $(event.currentTarget).attr('src');
    console.log(imgSrc);
});
}




