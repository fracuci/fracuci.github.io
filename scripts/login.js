const telegramWebApp = window.Telegram.WebApp;

let loginUser = document.querySelector("form input[name='username']");
let loginPassword = document.querySelector("form input[name='password']");


const loginButton = document.querySelector("button");

function sendLoginData() {
    const credentials = {
        username: loginUser.value,
        password: loginPassword.value
    }
    
    telegramWebApp.sendData(JSON.stringify(credentials))
};

loginButton.addEventListener("click", sendLoginData);