/* becode/javascript
 *
 * /09-fetch/03-details/script.js - 11.3: details
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  // your code here

  document.querySelector("#run").addEventListener("click", () => {
    let input = Number(document.getElementById("hero-id").value);

    fetch("http://localhost:3000/heroes")
      .then(function (dataHeroes) {
        return dataHeroes.json();
      })

      .then(function (dataHeroes) {
        dataHeroes.forEach(function (hero) {
          let template = document.getElementById("tpl-hero").content;
          let location = document.getElementById("target");
          let templateClone = template.cloneNode(true);

          if (input === hero.id) {
            templateClone.querySelector(".name").innerHTML = hero.name;
            templateClone.querySelector(".alter-ego").innerHTML = hero.alterEgo;
            templateClone.querySelector(
              ".powers"
            ).innerHTML = hero.abilities.join(", ");

            location.appendChild(templateClone);
          }
        });
      });
  });
})();
