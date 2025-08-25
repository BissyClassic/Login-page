
let correctUsername = "Rachael";
let correctPassword = "1234";

function checkValid() {
  // get values from input fields
  let username = document.getElementById("username").value;
  let password = document.getElementById("passcode").value;

  // reference to result element
  let resultElement = document.getElementById("loginResult");

  // check credentials
  if (username === correctUsername && password === correctPassword) {
    resultElement.innerText = "✅ Welcome, " + username + "! Login successful.";
    resultElement.style.color = "green"; // success
  } else {
    resultElement.innerText = "❌ Invalid username or password.";
    resultElement.style.color = "red"; // failure
  }

  // clear inputs after check
  document.getElementById("username").value = "";
  document.getElementById("passcode").value = "";
}
function togglePass() {
  let passField = document.getElementById("passcode");
  if (passField.type === "password") {
    passField.type = "text";   // show password
  } else {
    passField.type = "password"; // hide password
  }
}



