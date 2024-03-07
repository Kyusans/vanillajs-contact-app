document.getElementById("register").addEventListener("click", async () => {
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
    formData.append("operation", "signup");

    const res = await axios.post(url, formData);
    if(res.data === 1){
      alert("Registered successfully");
      window.location.href = "./index.html";
    }else{
      alert("Failed to register");
      console.log(res.data);
    }
  } catch (error) {
    alert("Network error");
    console.log(error);
  }

})