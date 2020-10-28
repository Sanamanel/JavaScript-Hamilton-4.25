/* becode/javascript
 *
 * /04-dates/02-title-by-hour-two/script.js - 4.2: texte en fonction de l'heure (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

/*(function() {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    // your code here
    let today = new Date();
    let curHr = today.getHours();
    let curMin = d.getMinutes();
    if (curHr> 17 && curMin > 30){
        document.getElementById("target").innerHTML = "Hello";
  }
  else {
    document.getElementById("target").innerHTML = "Good evening";
})();*/
(function () {
  // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"
  let today = new Date();
  let curHr = today.getHours();
  let curMin = today.getMinutes();
  document.getElementById("target").innerHTML = curHr + curMin;
  if (curHr < 17 && curMin < 30) {
    document.getElementById("target").innerHTML = "Hello";
  } else {
    document.getElementById("target").innerHTML = "Good Evening";
  }
})();
