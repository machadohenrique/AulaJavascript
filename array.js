//arrays são estruturas indexadas, tem um indice associado
const valores = [7.7, 8.9, 6.5, 9.4]

console.log(valores[0], valores[1])
console.log(valores.length) // tamanho do array



//Adicionar novos elementos no array
valores.push({id:2}, false, null, 'ola')
console.log(valores)

//removendo o ultimo elemento do array
console.log(valores.pop())
console.log(valores)


// removendo o primeiro iten do array
delete valores[0]
console.log(valores)

