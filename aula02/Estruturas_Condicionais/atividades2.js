// Uma loja deseja criar um programa para calcular o desconto de seus clientes de acordo com o valor total da compra.
// O prgrama deve receber o valor da compra e aplicar as seguintes regras: 
// Se a compra for maior ou igual a R$ 200,00 calcular um desconto de 20%.
// Se a compra for maior ou igual a R$ 100,00 calcular um desconto de 10%
// se a compra for menor que R$ 100,00, não haverá desconto.

// Mostre o valor  do desconto e o valor final a pagar


let compra = 500

if(compra >= 200){
    desconto = compra * 0.20
    valorFinal -= desconto

}else if(compra >= 100){
    desconto = compra * 0.10
    valorFinal -= desconto

}else{
    console.log("Infelizmente você não recebeu desconto")
}

console.log("você recebeu um desconto de: R$",desconto)
console.log("valor da compra: R$",valorFinal)
