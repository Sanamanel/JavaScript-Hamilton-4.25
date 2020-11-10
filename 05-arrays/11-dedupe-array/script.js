/* becode/javascript
 *
 * /05-arrays/11-dedupe-array/script.js - 5.11: dédoublonnement d'un tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
  const fruits = [
    "cerise",
    "durian",
    "pomme",
    "poire",
    "fraise",
    "tomate",
    "orange",
    "mandarine",
    "fraise",
    "durian",
    "pêche",
    "cerise",
    "raisin",
    "cerise",
  ];

  // ES6 has a native object Set to store unique values. To get an array with unique values you could The constructor of Set takes an iterable object, like Array, and the spread operator ... transform the set back into an Array.
  document.getElementById("run").addEventListener("click", function () {
    let dedupe = [...new Set(fruits)];
    console.log(dedupe);
  });
})();

/*  other way you can use the native filter method of an Array in the following way
 to get an array with unique values:The native method filter
  will loop through the array and leave only those entries that pass the given callback function dedupe
  dedupe checks, if the given value is the first occurring.
   If not, it must be a duplicate and will not be copied.
document.getElementById("run").addEventListener("click", function () {
    let dedupe = fruits.filter((item, index) => fruits.indexOf(item) === index);
    console.log(dedupe);
  });

 */
