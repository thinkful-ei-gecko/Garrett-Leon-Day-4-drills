'use strict';

/**
 * Function takes in the fizzBuzz result and adds the HTML to our code
 * @param {*} - takes in a number or a string
 */
function outputDiv(num) {
  //check if it's a string or number so we can add the class
  let appendData = '';
  if (typeof(num)=== 'string') {
    appendData = `<div class="fizz-buzz-item ${num}">
    <span>${num}</span>
    </div>`;
  }
  else {
    appendData = `<div class="fizz-buzz-item">
    <span>${num}</span>
    </div>`;
  }
  $('.js-results').append(appendData);
}

/**
 * Function takes in the number and checks if it's fizz, buzz, fizzbuzz, or not
 * @param {number} num - passed number from input form 
 * @returns {*} - returns a string or a number based on the calculations
 */
function checkFizzBuzz(num) {
  if (num === 0) { return num; }
  if (num % 15 === 0) { return 'fizzbuzz'; }
  if (num % 5 === 0) { return 'buzz'; }
  if (num % 3 === 0) { return 'fizz'; }
  return num;
}

/**
 * Takes the data in the input #number-choice
 * @returns {*} - returns HTML code containing 'fizz'/'buzz'/'fizzbuzz'/ or the number itself
 */
function handleSubmit() {
  $('#number-chooser').submit(e => {
    $('.js-results').text('');
    e.preventDefault();
    const inputNumber = $(e.currentTarget).find('input').val();

    //need to take the info and output it to our data
    //count up from 0 to the number
    for (let i=1;i<=inputNumber;i++) {
      
      //check every number against checkFizzBuzz()
      //then, output the data using our outputDiv()
      let check = checkFizzBuzz(i);
      outputDiv(check);

    }
  });
}


$(handleSubmit);