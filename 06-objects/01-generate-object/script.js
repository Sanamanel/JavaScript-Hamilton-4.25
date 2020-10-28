/* becode/javascript
 *
 * /06-objects/01-generate-object/script.js - 6.1: générer un object
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  document.getElementById("run").addEventListener("click", function () {
    let maFiche = new Object();
    maFiche.name = "Rachida";
    maFiche.lastname = "Haddouch";
    maFiche.age = 38;
    maFiche.city = "Jupille";
    maFiche.country = "Belgium";

    console.table(maFiche);
  });
})();

// your code here
/*const me = {
    firstname: "Rachida",
    lastname: "Haddouch",
    age: 38,
    city: "Liege",
    counrty: "Belgium",
  };
  document.getElementById("run").addEventListener("click", function () {
    console.log(me);
  });
})();/* */
