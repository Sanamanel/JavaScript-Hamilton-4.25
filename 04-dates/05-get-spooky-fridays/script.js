/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
  // your code here
  let year;
  let date = new Date();
  let month;
  let monthString = "";
  let listMonth = "";

  document.getElementById("run").addEventListener("click", function () {
    year = document.getElementById("year").value;

    for (month = 0; month < 12; month++) {
      date.setFullYear(year, month, 13); // search 13

      if (date.getDay() == 5) {
        // only friday
        monthString = date.toLocaleString("default", { month: "long" });
        listMonth = listMonth + " " + monthString;
      }
    }
    alert(listMonth);
    listMonth = "";
  });
})();

/*(function() {
   let mois = new Array(
    "Janvier",
    "Fevrier",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juillet",
    "Aout",
    "Septembre",
    "Octobre",
    "Novembre",
    "Décembre"
  );
  annee = new Date(+document.getElementById("year").value, 0); //récupère l'année en la mettant dans une variable date, le mois est mit à 0 car on est obligé d'indiquer au mois une année et un mois
  auj = new Date(); //OPTIONEL date du jour pour le temps du verbe
  cetteannee = document.getElementById("year").value; //OPTIONEL récupère l'année pour l'afficher dans rep
  response = ""; //contient la chaine de caractères qui sera affiché
  for (i = 0; i < 12; i++) {
    //boucle qui fait 12 tours de boucle, une par mois

    annee.setMonth(i, 13); //défni le mois sur la valeur de i et le jour sur le 13ème du mois

    if (annee.getDay() == 5) {
      //si le jour est le 5ème de la semaine (ne pas confondre DATE et DAY!!!) alors c'est un vendredi
      response = response + "," + mois[i]; //écrit dans rep le nom du mois grace à l'array contenant tout les mois
    }
  }
  response = " vendredi" + " 13 au" + " mois suivant : " + response; //création de la chaine de caractères qui sera la réponse

  document.getElementById("run").addEventListener("click", function () {
    alert(response);
       

    });
})();
*/
