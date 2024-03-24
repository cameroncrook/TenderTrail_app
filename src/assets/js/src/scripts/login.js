import { db_login } from "../api/account.js";
async function login(event) {
    event.preventDefault();
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    console.log(usernameInput.value, passwordInput.value);
    const user_data = await db_login(usernameInput.value, passwordInput.value);
    console.log(user_data);
    window.location.href = "/game";
    return;
}
document.querySelector('form')?.addEventListener('submit', login);
