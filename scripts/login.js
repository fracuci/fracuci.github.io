const telegramWebApp = window.Telegram.WebApp;

let loginUser = document.querySelector("form input[name='username']");
let loginPassword = document.querySelector("form input[name='password']");


const loginButton = document.querySelector("button");

function sendLoginData() {
    const credentialsLogin = {
        action: "login",
        username: loginUser.value,
        password: loginPassword.value
    }
    
    telegramWebApp.sendData(JSON.stringify(credentialsLogin))
};

loginButton.addEventListener("click", sendLoginData);

if ("virtualKeyboard" in navigator) {
    navigator.virtualKeyboard.overlaysContent = true;
  
    navigator.virtualKeyboard.addEventListener("geometrychange", (event) => {
      const { x, y, width, height } = event.target.boundingRect;
    });
  }