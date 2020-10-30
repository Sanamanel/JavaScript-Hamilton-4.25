/* becode/javascript
 *
 * /07-misc/06-guess-number/script.js - 7.6: jeu : trouver un nombre
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
  // your code here

  const number = Math.round(Math.random() * 100) + 1;
  console.log(number);

  let guess = false;
  let givNum;
  let count = 0;

  while (guess != true) {
    givNum = prompt("Guess a number between 1 and 100");
    count++;
  }
  if (givNum == number) {
    guess = true;
  }
  if (givNum < number) {
    alert("Higher !");
  }
  if (givNum > number) {
    alert("Lower !");
  }

  alert("That's it ! you needed " + count + " guesses");
})();
