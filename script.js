document.getElementById("login-form").addEventListener("submit", function(event) {
  event.preventDefault();
  const emailUsername = document.getElementById("emailUsername").value;
  const password = document.getElementById("password").value;
  const rememberMe = document.getElementById("rememberMe").checked;

  
  alert("Login successful! Email/Username: " + emailUsername + ", Remember Me: " + rememberMe);
});
