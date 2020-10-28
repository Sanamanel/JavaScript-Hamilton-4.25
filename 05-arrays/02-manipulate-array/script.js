/* becode/javascript
 *
 * /05-arrays/02-manipulate-array/script.js - 5.2: manipulation de tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
  var fruits = [
    "pomme",
    "poire",
    "fraise",
    "tomate",
    "orange",
    "mandarine",
    "durian",
    "pêche",
    "raisin",
    "cerise",
  ];

  // your code here
  fruits.shift(); //remove first item of the array
  fruits.pop(); // remove last
  fruits.unshift("Banana"); // add an element to the beginning of an array
  fruits.push("Kiwi"); // add an element to the end
  document.getElementById("run").addEventListener("click", function () {
    console.log(fruits);
    alert(fruits);
  });
})();
