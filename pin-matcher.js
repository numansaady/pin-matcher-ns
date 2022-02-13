// Declared for 4 digit Pin
function getPin() {
  const pin = Math.round(Math.random() * 10000);
  // Converted to string by adding number with string for checking length
  const pinString = pin + "";
  if (pinString.length == 4) {
    return pinString;
  } else {
    return getPin();
  }
}

// Connceted with onclick in HTML button
function generatePin() {
  const pin = getPin();
  // Set pin in HTML input field
  document.getElementById("display-pin").value = pin;
}

document.getElementById("key-pad").addEventListener("click", function (event) {
  const numbers = event.target.innerText;
  const typedInput = document.getElementById("display-typed");
  if (isNaN(numbers)) {
    if (numbers == "C") {
      typedInput.value = "";
    }
  } else {
    const previusTypedInput = typedInput.value;
    const newTypedInput = previusTypedInput + numbers;
    typedInput.value = newTypedInput;
  }
});

function verifyPin() {
  const generatedPin = document.getElementById("display-pin").value;
  const typedPin = document.getElementById("display-typed").value;
  const errorMsg = document.getElementById("error-msg");
  const successMsg = document.getElementById("success-msg");
  if (generatedPin == typedPin) {
    successMsg.style.display = "block";
    errorMsg.style.display = "none";
  } else {
    errorMsg.style.display = "block";
    successMsg.style.display = "none";
  }
}
