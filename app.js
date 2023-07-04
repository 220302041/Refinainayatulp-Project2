function Login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (email == "refina@gmail.com" && password == "1234") {
    document.getElementById("dialog-berhasil").style.display = "";
    document.getElementById("dialog-gagal").style.display = "none";
  } else {
    document.getElementById("dialog-gagal").style.display = "";
    document.getElementById("dialog-berhasil").style.display = "none";
  }
}
