// Simulazione del gioco dei dadi tra utente e computer
const lancioPc = 0
const lancioUtente = 0

function lancio() {
    // 1. Genero un numero random per il computer
    let lancioPc = Math.floor(Math.random()*6 + 1)
    console.log(lancioPc);
    document.getElementById("lancioPc").innerHTML =( 
        `
        Lancio del computer ${lancioPc}
        `
        );

    // 2. Genero un numero random per il giocatore
    let lancioUtente = Math.floor(Math.random()*6 + 1)
    console.log(lancioUtente);
    document.getElementById("lancioUtente").innerHTML = (
         `
         Lancio dell'utente ${lancioUtente}
         `
         );

    // 3. Stabilisco il vincitore tra i due e lo comunico
    if( lancioPc < lancioUtente){
        alert("Hai vinto")
    } else if( lancioPc > lancioUtente){
        alert("Hai perso")
    } else if( lancioPc === lancioUtente ){
        alert("Pareggio")
    }
}