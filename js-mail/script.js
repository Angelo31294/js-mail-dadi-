// 1. Chiedere all'utente la sua e-mail
const mail = prompt("inserisci la tua email")
// 2. Controllo che sia in lista delle mail accettate
const emailAcept = ["angelo@gmail.com", "luca@gmail.com", "marco@gmail.com"]

let element = false;

for (let i = 0; i < emailAcept.length; i++) {
    
    if( mail === emailAcept[i]) {
        element = true;
        break;
    }
}
// 3. Stampo un messaggio con esito positivo SE l'email è nella lista, ALTRIMENTI stampo un messaggio con esito negativo
if ( element ) {
    alert("Accesso consentito.");
} else {
    alert("Accesso negato!");
}