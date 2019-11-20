// ------------ Event ------------
// initiate the cancel and the reset button
const init = () => {
  document.getElementById('submit').addEventListener('click', send);
}

// when a user hits reset button 


// when a user hits submit button 
const send = function (event) {
  event.preventDefault()
  validation();
}

// validate the form
const validation = (event) => {

  let name = document.getElementById('name');
  let gender = document.getElementById('gender');
  let birthday = document.getElementById('birthday');
  let email = document.getElementById('email');
  let address = document.getElementById('address');

  // validate the name field

  // validate name
  if (name.value === "") {
    console.log("Please type your name")
  }
  //validate gender 
  if (gender.options[gender.selectedIndex].text === "--select--") {
    console.log("Please choose gender")
  }

}

// -------------- UI --------------
// show an error msg
// show a success msg

// -------------- DATA STORAGE --------------
// add applicant's info
// update applicant's info





document.addEventListener('DOMContentLoaded', init);