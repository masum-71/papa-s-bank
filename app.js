document.getElementById("btn").addEventListener("click", () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (email === "masum@bank.com" && password === "12345") {
    location.href = "bank.html";
  } else {
    console.log("invalid input");
  }
});
