// Controllo
console.log('JS OK')

// Chiedere km da percorrere
// Chiedere età utente
// Calcolare il prezzo a km per i km da percorrere
// Applicare sconto del 20% ai minori di 18
// Applicare scontro del 40% agli over 65
// Output prezzo finale con massimo due decimali

const numberKm = parseInt(prompt('Quanti km devi percorrere?', 20))
const userAge = parseInt(prompt('Qual è la tua età?', 39))

console.log(numberKm, userAge)

const ticketPrice = numberKm*0.21
console.log(ticketPrice)