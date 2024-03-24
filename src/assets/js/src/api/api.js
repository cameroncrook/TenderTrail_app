// import axios, { AxiosResponse } from 'axios';
export const apiUrl = 'http://localhost:3000/';
export async function testFetch() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.text();
        console.log(data);
    }
    catch (err) {
        console.log(`Error while fetching: ${err}`);
    }
}
