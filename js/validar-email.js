import { validateEmail as isValidEmail } from './modules/validate-email.js';

import tresMeses from './modules/meses.js';

console.log(tresMeses);

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("email").addEventListener('input', function() {
        let msg = isValidEmail(this.value)
        ? "El email es válido"
        : "El email no es valido";
        document.getElementById('msg').innerText = msg;
    });
});