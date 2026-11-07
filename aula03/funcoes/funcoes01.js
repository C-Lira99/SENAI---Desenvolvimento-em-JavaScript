
// // ----- Funções Simples ----- 

// function nomeDaFuncao(){
//     console.log("Bom dia!")
//     console.log("Boa tarde!")
//     console.log("Boa noite!")
//     console.log("__________\n")
// }

// nomeDaFuncao()

// function boasVindas(){
//     console.log("Seja bem-vindo ao JavaScript\n")
// }

// boasVindas()

// function dizerOla(){
//     console.log("Olá!!\n")
// }

// dizerOla()

// // Crie uma função chamada mostrarCurso()
// // que exibe no console:
// // Curso: Desenvolvimento em JavaScript

// function mostrarCurso(){
//     console.log("Curso: Desenvolvimento web com JavaScript\n")
// }

// mostrarCurso()

// function fazerSuco(){
//     console.log("Suco de laranja\n")
// }

// fazerSuco()



// // ----- Função com Parametro -----

// function fazerSuco(sabor){
//     console.log(`Fazendo Suco de ${sabor}`)
// }

// fazerSuco("Limão")
// fazerSuco("Laranja")
// fazerSuco("Abacaxi\n")

// function somar(n1,n2){
//     let result = n1 + n2
//     console.log(`${n1} + ${n2} = ${result}\n`)
// }

// somar(5,3)

// // Crie uma função chamada saudarPessoa(nome)
// // que receba o nome de uma pessoa como 
// // parâmetro e exiba a mensagem:
// // "Olá, [nome]! Seja bem-Vindo(a)!"

// function saudarPessoa(nome){
//     console.log(`Olá, ${nome}! Seja bem-Vindo(a)!`)
// }

// saudarPessoa("Alexia")
// saudarPessoa("Julia")
// saudarPessoa("Carlos\n")

// // Crie uma função chamada dobro(numero)
// // que receba um numero com parametro e 
// // exiba o dobro desse numero no console

// function dobro(numero){
//     let multiplicar = numero*2
//     console.log(`O dobro de ${numero} é ${multiplicar}`)
// }

// dobro(4)
// dobro(10)
// dobro(12.5)
// console.log()



// // ----- Função com Return -----

// function dobrar (n){
//    return n*2
// }

// let result = dobrar(3)
// console.log(result)

// function quadrado(number){          // função com o RETURN a gente consegue guardar o resultado 
//     return number * number          //    da função em uma variavel para usar fora dela
// }

// let q = quadrado(8)
// console.log(q)

// // Crie uma função chamada triplo(numero)
// // que receba um numero e retorne o triplo dele

// function triplo(defindo){
//     return defindo * 3
// }
// let resposta = triplo(5)
// console.log(`o Triplo de ${defindo} é ${resposta}`)

// // Crie uma função chamada nomeCompleto(nome,sobrenome)
// // que retorno o nome completo (nome + sobrenome)

// function nomeCompleto(nome,sobrenome){
//     return nome + " " + sobrenome
// }

// let nome = nomeCompleto("Julia","Lira")
// console.log(`Olá ${nome} seja bem-vindo(a)\n`)

// // Crie uma função chamada celsiusParaFahrenheit(celsius)
// // que converta e retorne a temperatura em Fahrenheit.Fahrenheit
// // A Fórmula é: F = C X 1.8 + 32

// function celsiusParaFahrenheit(celsius){
//     return celsius * 1.8 + 32
// }

// let fahrenheit = celsiusParaFahrenheit(23)
// console.log(`Se convertermos ${celsius}° Celcius para Fahrenheit, teremos ${fahrenheit}° Fahrenheit\n`)




// // ----- Função Arrow Functions -----

// const saudacao = () => {
//     console.log("Olá!")
// }
// saudacao()

const dobrar = (n) => n * 2
let result = dobrar(4)
console.log(result)

// Crie uma arrow function
// chamada 'multiplicar' que recebe dois numeros.
// ela deve **retornar** a multiplicação dos 
// dois valores.
// - teste chamando `multiplicar(7,3)`

const multiplicar = (n1,n2) => n1 * n2 
let multipli = multiplicar(7,3)
console.log(multipli)

