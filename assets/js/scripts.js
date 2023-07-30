function displayLoginModal() {
  document.getElementById('loginModal').style.display = 'block';
}

function closeLoginModal() {
  document.getElementById('loginModal').style.display = 'none';
}

function displaySignUpModal() {
  document.getElementById('signUpModal').style.display = 'block';
}

function closeSignUpModal() {
  document.getElementById('signUpModal').style.display = 'none';
  clearFormFields(document.querySelector('#signUpModal .sign-up-form'));
}

function displayThankYouMessage() {
  alert("Thank you for submitting. We will respond to you soon.");
  closeSignUpModal();
}

function clearFormFields(form) {
  var inputs = form.getElementsByTagName('input');
  for (var i = 0; i < inputs.length; i++) {
    inputs[i].value = '';
  }
}

window.addEventListener('click', function(event) {
  if (event.target == document.getElementById('loginModal')) {
    closeLoginModal();
  } else if (event.target == document.getElementById('signUpModal')) {
    closeSignUpModal();
  } else if (event.target == document.getElementById('contactModal')) {
    document.getElementById('contactModal').style.display = 'none';
  }
});

function displayContactModal() {
  document.getElementById('contactModal').style.display = 'block';
}

function closeContactModal() {
  document.getElementById('contactModal').style.display = 'none';
}
