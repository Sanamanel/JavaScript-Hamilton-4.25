/* becode/javascript
 *
 * /07-classes/04-getter-setter/script.js - 7.4: getter & setter
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  // your code here

  const required = /\d.*\d/;
  const field = document.getElementById("pass-one");

  field.addEventListener("keyup", () => {
    if (field.value.length >= 8 && required.test(field.value)) {
      document.getElementById("validity").innerText = "ok";
    } else {
      document.getElementById("validity").innerText = "Not ok";
    }
  });
  // your code here
})();
