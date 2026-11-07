//----- Arrays -----

// let idades = [15, 23, 21, 28, 17]
// console.table(idades)
// console.log(idades[0])
// console.log(idades[1])
// console.log(idades[2])
// console.log(idades[3])
// console.log(idades[4])

// let frutas = ["Maçã","Pera","Morango","Manga","Limão","Abacaxi"]
// frutas.unshift("Manga")      // UNSHIFT serve para incluir um item no inicio da lista.
// frutas.push("Mamão")         // PUSH serve para incluir um item no fim da lista.
// frutas.splice(2, 0, "Limão") // SPLICE (numero do indice que vc quer acrescentar, 
// console.log(frutas)          // quantos vc quer excluir APÓS o indice indicado,
//                              // valor que quer incluir na lista.)

// frutas.pop() // POP para excluir o ultimo item da lista 
// console.log(frutas)

// frutas.shift() // SHIFT serve para remover o primeiro item da lista 
// console.log(frutas)

// frutas.splice(1, 3) // SPLICE serve para remover de uma posição expecifica
//                     // (indica a posição que quer remover, quantidade partir do indice indicado vai remover)
 
// console.log(frutas.length) // LENGTH serve para ver o tamanho da lista 

let nomes = ["Carlos","Alexia","Julia", "Francisca", "Yara", "Monica", "Ozier"]

nomes.forEach((elemento) => {         // foreach usa o for para passar em cada item da lista 
    console.log(`Bom dia ${elemento}`)
})