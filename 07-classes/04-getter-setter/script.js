/* becode/javascript
 *
 * /07-classes/04-getter-setter/script.js - 7.4: getter & setter
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  // your code here

  class person {
    constructor(firstname, lastname) {
      this.firstname = firstname;
      this.lastname = lastname;
    }
    get fullName() {
      return `${this.firstname} ${this.lastname}`;
    }

    set fullName(value) {
      [this.firstname, this.lastname] = value.split(" ");
    }
  }
  const me = new person("Rachida", "Haddouch");
  document.getElementById("run").addEventListener("click", function () {
    console.log(me.fullName);
    me.fullName = "Manel Saidi";
    console.log(me.fullName);
  });
  // your code here
})();
