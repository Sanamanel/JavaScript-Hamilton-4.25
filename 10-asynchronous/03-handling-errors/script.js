/* becode/javascript
 *
 * /10-asynchronous/03-handling-errors/script.js - 10.3: gestion d'erreur
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  function callback(error, persons) {
    error === null ? console.log(persons) : console.error(error);
  }
  document.querySelector("#run").addEventListener("click", function () {
    window.lib.getPersons(callback);
  });
})();

/*
document.getElementById("run").addEventListener("click", () => {
    window.lib.getPersons(
        (error, persons) => {
            if(error) {
                console.error(error);
            } else {
                console.log(persons);
            }
        }
  
    );
  
  }); */
