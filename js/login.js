localStorage.setItem("url", "http://localhost/contact/api/");

document.getElementById("login").addEventListener("click", () =>{
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  
  const jsonData = {
    username: username,
    password: password
  }
});