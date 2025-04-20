function logout() {
  localStorage.removeItem('email');
  window.location.href = 'index.html';
}
