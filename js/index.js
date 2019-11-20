// ------------ Event ------------
// initiate the cancel and the reset button
const init = () => {
  document.getElementById('submit').addEventListener('click', send);
  document.getElementById('reset').addEventListener('click', reset);
}

// when a user hits reset button 
const reset = function (Event) {
  e.preventDefault();
  document.getElementById('application-form').reset();
}

// when a user hits submit button 
const send = function (event) {
  event.preventDefault()
  validation();

  // add a funtion to send the validated data to the local storage
}

// validate the form
const validation = (event) => {

  let name = document.getElementById('name');
  let gender = document.getElementById('gender');
  let birthday = document.getElementById('birthday');
  let email = document.getElementById('email');
  let address = document.getElementById('address');

  // validate name
  if (name.value === "") {
    console.log("Please type your name")
  }
  //validate gender 
  if (gender.options[gender.selectedIndex].text === "--select--") {
    console.log("Please choose gender")
  }

  //validate birthday
  if (birthday.value === "") {
    console.log("Please enter the date of birth.")
  }

  // validate email
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
    return true;
  } else {
    console.log("You have entered an invalid email address!")
  }

  // validate address
  if (address.value === "") {
    console.log("Please add your email address.")
  }
}

// -------------- UI --------------
// show an error msg
// show a success msg

// -------------- DATA STORAGE --------------
// add applicant's info
// update applicant's info





document.addEventListener('DOMContentLoaded', init);