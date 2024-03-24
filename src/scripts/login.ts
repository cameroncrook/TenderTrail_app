import { db_login } from "../api/account.js";

async function login(event: Event): Promise<void> {
    event.preventDefault();

    const usernameInput: HTMLInputElement | null = document.getElementById("username") as HTMLInputElement;
    const passwordInput: HTMLInputElement | null = document.getElementById("password") as HTMLInputElement;

    console.log(usernameInput.value, passwordInput.value);

    const user_data = await db_login(usernameInput.value, passwordInput.value);
    console.log(user_data);

    window.location.href = "/game";

    return;
}

document.querySelector('form')?.addEventListener('submit', login);