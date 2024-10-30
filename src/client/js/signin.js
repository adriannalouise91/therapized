const loginButton = document.querySelector(".login");

if (loginButton) {
  loginButton.addEventListener("click", function () {
    window.location.href = "login.html";
  });
}

const signUpButton = document.querySelector(".signup");

if (signUpButton) {
    signUpButton.addEventListener("click", function (){
    window.location.href = "register.html";
    });
}

const startBtn = document.querySelector(".start-btn");

if (startBtn) {
  startBtn.addEventListener("click", function (){
    window.location.href = "login.html"
  })
}