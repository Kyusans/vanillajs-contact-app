localStorage.setItem("url", "http://localhost/contact/api/");

document.getElementById("login").addEventListener("click", async () => {
  try {
    const url = localStorage.getItem("url") + "user.php";
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const jsonData = {
      username: username,
      password: password
    }

    const formData = new FormData();
    formData.append("json", JSON.stringify(jsonData));
    formData.append("operation", "login");

    var res = await axios.post(url, formData);
    console.log(res.data);
    if (res.data !== 0) {
      alert("Logged in successfully");
      window.location.href = "./../dashboard.html";
    } else {
      alert("Invalid credentials");
    }

  } catch (error) {
    alert("Network error");
    console.log(error);
  }
});