function loginSignup() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  if (email && password) {
    localStorage.setItem('email', email);
    window.location.href = 'welcome.html';
  } else {
    alert('Please enter email and password');
  }
}
