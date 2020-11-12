/* becode/javascript
 *
 * /10-asynchronous/07-async-get-posts/script.js - 10.7: chargement d'articles (async/await)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

//await permet de mettre en pause l’exécution du code
// tant qu’une promesse n’est pas consommée, puis retourne ensuite le résultat de la promesse.

(() => {
  document.querySelector("#run").addEventListener("click", async () => {
    try {
      const articles = await window.lib.getPosts(); //Au final, await est une syntaxe alternative à then(), plus facile à lire, à comprendre et à écrire.
      console.log(articles);
    } catch (error) {
      console.log(error);
    }
  });
})();
//Async is for declaring that a function will handle asynchronous operations
//and await is used to declare that we want to “await” the result of an asynchronous operation inside a function that has the async keyword.
