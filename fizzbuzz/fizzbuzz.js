'use strict';

/**
* @param {number} num
* @return {*} - will return `fizzbuzz`/`fizz`/`buzz`/ or the number itself
*/
function fizzBuzz(num) {
  if (num % 15 === 0) return 'fizzbuzz';
  if (num % 5 === 0) return 'buzz';
  if (num % 3 === 0) return 'fizz';
}

console.log(fizzBuzz(5));

/**
* @param {*} fizzResult 
* @return {string} - generate ONE fizzbuzz item
*/
function generateFizzHtml(fizzResult) {
  let fizzClass ='';
  if (typeof fizzResult === 'string') {
    fizzClass = fizzResult;
  }
  return `
  <div class="fizz-buzz-item ${fizzClass}">
  <span>${fizzResult}</span>
  </div>
  `;
}

console.log(generateFizzHtml('fizzbuzz'));
/** 
* Handles form submission
*/
function handleSubmit() {
  console.log('test');
  $('#number-chooser').on('submit',event => {
    event.preventDefault();
    const countTo = $('#number-choice').val();
    const fizzBuzzResults = [];
    for (let i=0; i<=countTo; i++) {
      fizzBuzzResults.push(fizzBuzz(i));
    }
    const html = fizzBuzzResults.map(result => generateFizzHtml(result));
    console.log(html);
  });
}

$(handleSubmit);