/* Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
- L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
*/

//Fase prep
const prezzoBigliettoKm = 0.21
let km = parseInt(prompt(Quanti km devi percorrere?))
let eta = parseInt(prompt(Quanti anni hai?))
let scontoMin = 0.20 // 20%
let scontoMag = 0.40 // 40% 

//Fase elab

if(eta<18) {
    prezzoBiglietto = (prezzoBigliettoKm * km) *scontoMin
    console.log (`Il prezzo del tuo biglietto è: ${prezzoBiglietto}`)
} 
else if(eta>65) {
    prezzoBiglietto = (prezzoBiglioettoKm * km) ✶ scontoMag
    console.log (`Il prezzo del tuo biglietto è: ${prezzoBiglietto}`)
}
else {
    prezzoBiglietto = prezzoBigliettoKm * km
    console.log (`Il prezzo del tuo biglietto è: ${prezzoBiglietto}`)
}

//Fase output