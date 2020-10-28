/* becode/javascript
 *
 * /06-objects/04-from-entries/script.js - 6.4: fromEntries
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  const keys = ["name", "species", "age", "gender", "color"];
  const values = ["Skitty", "cat", 9, "female", "tabby"];
  // your code here
  document.getElementById("run").addEventListener("click", function () {
    for (i = 0; i < keys.length; i++) {
      // pour reprendre toutes les données dans la  boucle
      const entries = new Map([[keys[i], values[i]]]); // creer tableau en deux dim qui reprend les 2 keys et values
      const obj = Object.fromEntries(entries); // faire un objet considère le premier  key avec value
      console.log(obj);
    }
  });
})();
