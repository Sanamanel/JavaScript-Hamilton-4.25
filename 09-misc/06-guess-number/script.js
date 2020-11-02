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
  // Initial setup of variables.
 var lowerLimit = 1;
 var upperLimit = 100;
 var tries = 15;
 let counter = 0;
 var answer = Math.floor(Math.random() * (upperLimit - lowerLimit + 1)) + lowerLimit;
 var guess = '';
 var message = 'Guess a number between ' + lowerLimit + ' and ' + upperLimit + ':'+ ' ';
 
 // Keep prompting the user for a guess until the game ends.
 while (tries > 0) {
     // Prompt the user for a guess.
     guess = prompt(message, guess);
     console.log(guess);
  
     counter += 1;
     // If the cancel button was pushed, let the user know the game is ending and
     // break out of the loop.
     if (guess == null) {
         alert('Quitting game now.');
         break;
     }
     // If the guess is a number...
     else if (isFinite(guess) && guess != '') {
         // Make sure the guess is converted into a number.
         guess = +guess;
         
         // If the guess is less than the range let the user know.
         if (guess < lowerLimit) {
             alert('Your guess should be no less than ' + lowerLimit + '.');
         }
         // If the guess is greater than the range let the user know.
         else if (guess > upperLimit) {
             alert('Your guess should be no greater than ' + upperLimit + '.');
         }
         // If the guess is too high let the user know.
         else if (guess > answer) {
             alert('Your guess is too high.');
         }
         // If the guess is too low let the user know.
         else if (guess < answer) {
             alert('Your guess is too low');
         }
         // If none of the other cases were true that means the answer must have
         // been guessed so let the user know and break out of the loop.
         else {
           alert("That's it!" + " It took you " + counter+ " attempts to guess the correct number");
             break;
         }
         tries = tries - 1;
     }
    
     if (tries == 0) {
       alert('You ran out of tries.  The number was ' + answer + '.');
 }
 
 }
 
 }());