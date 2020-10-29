/* becode/javascript
 *
 * /06-dom/08-generate-table-two/script.js - 6.8: génération d'un tableau (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
  // your code here
  let body = document.getElementById("target");
  let tbl = document.createElement("table");
  let tblBody = document.createElement("tbody");
  for (let j = 0; j < 10; j++) {
    let row = document.createElement("tr");
    for (let i = 0; i < 10; i++) {
      let cell = document.createElement("td");
      cell.innerText = (i + 1) * (j + 1);
      row.appendChild(cell);
    }
    tblBody.appendChild(row);
  }
  tbl.appendChild(tblBody);
  body.appendChild(tbl);
  document.getElementsByTagName("table");
  document.write("table");
  for (var a = 1; a < 11; a++) {
    document.write("tr");
    for (var b = 1; b < 11; b++) {
      document.write("td" + a * b + "");
    }
  }
})();
