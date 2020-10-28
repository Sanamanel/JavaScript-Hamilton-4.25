/* becode/javascript
 *
 * /03-colors/03-change-bcg-three/script.js - 3.3: couleur de fond (3)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
  // your code here

  let letters = "0123456789ABCDEF";
  let bgcolor = "#";
  for (let i = 0; i < 6; i++) {
    bgcolor += letters[Math.floor(Math.random() * 16)];
  }
  /* alert(bgcolor);  only for check*/

  document.getElementById("run").addEventListener("click", function () {
    document.body.style.background = bgcolor;
  });
})();

/* autre 

(function() {

    let letters = '0123456789ABCDEF';
    let color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    
    document.getElementById("run").addEventListener ("click", function () {
        document.body.style.background = color;
    })

})();
 */
