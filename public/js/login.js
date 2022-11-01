const sign_in = document.querySelector("#sign_in")
const sign_up = document.querySelector("#sign_up")

const sign_upbtn = document.querySelector("#signupbtn")

const loginFormHandler = async (event) => {
  // Stop the browser from submitting the form so we can do so with JavaScript
  event.preventDefault();

  // Gather the data from the form elements on the page
  const email = document.querySelector('#email').value.trim();
  const password = document.querySelector('#password').value.trim();

  if (email && password) {
    // Send the e-mail and password to the server
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/login');
    } else {
      alert('Failed to log in');
    }
  }
};

document.querySelector('.login-form')
  .addEventListener("submit", loginFormHandler);

  sign_upbtn.addEventListener("click", function () {window.location.replace("/signup")});