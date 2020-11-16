/* becode/javascript
 *
 * /09-fetch/05-delete/script.js - 11.5: supprimer un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
(() => {
  // your code here

  document.querySelector("#run").addEventListener("click", () => {
    let id = document.getElementById("hero-id").value;

    fetch("http://localhost:3000/heroes")
      .then(function (dataHeroes) {
        return dataHeroes.json();
      })
      .then(function (dataHeroes) {
        for (i = 0; i < dataHeroes.length; i++) {
          if (id == i + 1) {
            delete dataHeroes[i];
          }
        }

        console.table(dataHeroes);
      })
      .catch(function (error) {
        console.error(error);
      });
  });
})();
