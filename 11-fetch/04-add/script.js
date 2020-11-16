/* becode/javascript
 *
 * /09-fetch/04-add/script.js - 11.4: ajouter un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  // your code here

  document.querySelector("#run").addEventListener("click", () => {
    let heroName = document.getElementById("hero-name").value;
    let alterEgo = document.getElementById("hero-alter-ego").value;
    let powers = document.getElementById("hero-powers").value;
    const URL = "http://localhost:3000/heroes";

    fetch(URL)
      .then(function (dataHeroes) {
        return dataHeroes.json();
      })

      .then(function (dataHeroes) {
        newHero = {
          id: dataHeroes.length + 1,
          name: heroName,
          alterEgo: alterEgo,
          abilities: powers.split(","),
        };
        /*  fetch(URL, {
          method: "POST",
        }); */
        dataHeroes.push(newHero);
        console.log(dataHeroes);
      });
  });
})();
