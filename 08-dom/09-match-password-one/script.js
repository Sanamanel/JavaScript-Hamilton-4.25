/* becode/javascript
 *
 * /06-dom/09-match-password-one/script.js - 6.9: vérification de mots de passe (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
  // your code here
  document.getElementById("run").addEventListener("click", function () {
    // Function to check Whether both passwords
    // is same or not.

    password1 = document.getElementById("pass-one").value;
    password2 = document.getElementById("pass-two").value;

    if (password1 !== password2) {
      document.getElementById("pass-two").classList.add("error");
    }

    // If same return True.
    else {
      alert("Password Match: Welcome to Becode Javascript!");
      document.getElementById("pass-two").classList.remove("error");
    }
  });
})();
