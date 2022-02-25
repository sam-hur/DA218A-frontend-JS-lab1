/*jshint esversion: 6 */
const index = "./SamHurenkamp.html";
const CHARLIMIT = 200;

/** validates input from home.html */
function validate() {
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const email = document.getElementById("email").value;
  const subject = document.getElementById("subject").value;
  const msg = document.getElementById("msg").value;

  let err = [];
  let conditions = { // regex tested on https://regex101.com/
    "name": name.match(/^[a-zA-Z]+?(\s[a-zA-Z]+)+$/) != null,
    "phone": phone.match(/[^\+\d]/) == null && phone != "" && [10, 12, 13, 14].includes(phone.length),
    "email": email.match(/^\w+([\._-]{0,1}?\w+)+@\w+?\.[a-zA-Z]{2,3}\.{0,1}?[a-zA-Z]{1,2}$/) != null,
    "subject": subject.match(/^\w+?/),
    "message": msg != "" && msg.length <= CHARLIMIT
  };

  for (const [key, value] of Object.entries(conditions)) {
    if (!value) { err.push(" " + key); } // If field returned false on check, push key to err.
  }

  if (err.length == 0) {
    window.location = `${index}`; // switch page if no err occured
    return;
  }
  alert(`invalid field input(s): ${err}`); // print err to screen using alert
}
