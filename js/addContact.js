document.getElementById("submit").addEventListener("click", async () => {
  try {
    let url = localStorage.getItem("url") + "user.php";
    let userId = localStorage.getItem("userId");
    let fullName = document.getElementById("fullName").value;
    let email = document.getElementById("email").value;
    let contactNumber = document.getElementById("contactNumber").value;

    const jsonData = {
      userId: userId,
      fullName: fullName,
      email: email,
      contactNumber: contactNumber
    }
    let formData = new FormData();
    formData.append("json", JSON.stringify(jsonData));
    formData.append("operation", "addContact");
    let res = await axios.post(url, formData);
    if (res.data === 1) {
      alert("Contact added successfully");
      window.location.href = "./../dashboard.html";
    } else {
      alert("Failed to add contact");
      console.log("res.data sa addContact" + res.data);
    }
  } catch (error) {
    alert("Network error");
    console.log(error);
  }
});