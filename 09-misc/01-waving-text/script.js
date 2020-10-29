/* becode/javascript
 *
 * /07-misc/01-waving-text/script.js - 7.1: effet vague
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
  // your code here
  var letterContainer = document.querySelector("#target");

  var letters = letterContainer.innerText;

  letters = letters.split("");

  letterContainer.innerText = "";

  letters.forEach(function (letter, i) {
    var wrap = document.createElement("span");
    wrap.innerText = letter;

    wrap.style.fontSize = i + "px";

    letterContainer.appendChild(wrap);
  });
})();
