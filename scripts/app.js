import { getName } from './modules/getName.js';

const loginBtn = document.getElementById('loginBtn');

if(loginBtn){
    loginBtn.addEventListener('click', getName);
}

export function app() {
    console.log('connected to app');
}

app();