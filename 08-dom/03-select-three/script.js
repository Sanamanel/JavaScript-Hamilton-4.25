/* becode/javascript
 *
 * /06-dom/03-select-three/script.js - 6.3: sélection multiple par sélecteur css
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
  // your code here

  let elements, i;
  elements = document.querySelectorAll(".target");
  for (i = 0; i < elements.length; i++) {
    elements[i].innerHTML = "owned";
  }
})();

/*Other way

let targets = document.querySelectorAll('.target'), i;

    for (i = 0; i < targets.length; ++i) {
      targets[i].innerHTML = "owned";
    } 
*/
