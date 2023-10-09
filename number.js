const pesoUm = 1.0
const pesoDois = Number('2.0')

console.log(pesoUm, pesoDois)
console.log(Number.isInteger(pesoUm))
console.log(Number.isInteger(pesoDois))

const avaliacaoUm = 9.782
const avaliacaoDois = 6.783

const total = avaliacaoUm * pesoUm + avaliacaoDois * pesoDois
const media = total / (pesoUm + pesoDois)

console.log(media.toFixed(2)) // Casa decimais, nesse caso duas casas após a virgula
console.log(media.toString(2)) // Convertendo para o numero binario
console.log(typeof media)
console.log(typeof Number) // Number - Funcão, number - tipo do dado.


