'use strict';

/**
 * Function adds an item to the shoping list. 
 * @param {string} item - passes through an item to add.
 */
function addItem(item) {
  console.log('got to item add');
  $('.shopping-list').append(`<li>
  <span class="shopping-item">${item}</span>
  <div class="shopping-item-controls">
    <button class="shopping-item-toggle">
      <span class="button-label">check</span>
    </button>
    <button class="shopping-item-delete">
      <span class="button-label">delete</span>
    </button>
  </div>
  </li>`);
}

/**
 * Function checks if any buttons are clicked and deals with them.
 */
function listenEvents() {
  $('#js-shopping-list-form').submit(e => { //use submit on forms
    e.preventDefault();
    addItem($('#shopping-list-entry').val());
  });
  $('ul').on('click', 'button', function(e) {
    if ($(this).attr('type') !== 'submit') {
      //check if it's a toggle class
      let closestSpan = $(this).closest('li').find('.shopping-item');
      if (closestSpan.hasClass('shopping-item__checked') && !$(this).hasClass('shopping-item-delete')) {
        closestSpan.removeClass('shopping-item__checked');
      }
      else if (!closestSpan.hasClass('shopping-item-delete') && !$(this).hasClass('shopping-item-delete')) {
        closestSpan.addClass('shopping-item__checked');
      }
      else {
        closestSpan.closest('li').remove();
      }
    }
  });
}

$(listenEvents);