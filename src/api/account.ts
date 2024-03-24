export async function db_login(username: string, password: string) {
    try {
        const apiUrl: string = `http://localhost:3000/account/login?username=${username}&password=${password}`;
        const response = await fetch(apiUrl);
        console.log(response.status);
        const data = await response.text();

        return data;
    } catch (err) {
        console.log(err)

        return false;
    }
}

export async function db_create_user(username: string, password: string) {
    try {
        const apiUrl: string = `http://localhost:3000/account/create-user?username=${username}&password=${password}`;
        const response = await fetch(apiUrl);
        const data = await response.text();

        return data;
    } catch (err) {
        console.log(err)

        return false;
    }
}
