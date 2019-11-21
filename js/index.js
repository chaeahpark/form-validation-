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

  if (name.value === "" ||
    gender.options[gender.selectedIndex].text === "--select--" || birthday.value === "" ||
    email.value === "" ||
    address.value === "") {
    console.log("Please complete all fields with correct information.")
  } else {
    let applicant = new Applicant(name.value, gender.value, birthday.value, email.value, address.value);

    Store.addToStore(applicant);
  }
  // how to verify email address with regular expression?
  // (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value))  

}

// -------------- UI --------------
// show an error msg
// show a success msg
// -------------- APPLICANT --------------
class Applicant {
  // create an object based on the applicant form information
  constructor(name, gender, birthday, email, address) {
    this.name = name;
    this.gender = gender;
    this.birthday = birthday;
    this.email = email;
    this.address = address;
  }
}

// -------------- DATA STORAGE --------------
class Store {
  // add applicant's info
  static addToStore(formData) {
    let applicant = JSON.stringify(formData);
    localStorage.setItem('applicant1', applicant);

    console.log(localStorage);
  }
}

// update applicant's info





document.addEventListener('DOMContentLoaded', init);