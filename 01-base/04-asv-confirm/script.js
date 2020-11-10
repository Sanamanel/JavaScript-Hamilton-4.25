/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
  // your code here
  let age, gender, city, question;
  age = prompt("Quel ages avez vous?");
  gender = prompt("Quel est votre genre?");
  city = prompt("Dans quel ville vivez-vous?");
  question = confirm(
    " Vous êtes bien une personne de sexe " +
      gender +
      " de " +
      age +
      " ans " +
      " et vivant à " +
      city
  );
  if (question == false) {
    age = prompt("Quel ages avez vous?");
    gender = prompt("Quel est votre genre?");
    city = prompt("Dans quel ville vivez-vous?");
    question = confirm(
      " Vous êtes bien une personne de sexe " +
        gender +
        " de " +
        age +
        " ans " +
        " et vivant à " +
        city
    );
  }
})();
