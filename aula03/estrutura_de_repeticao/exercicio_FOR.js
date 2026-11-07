// Crie um laço "For" que conte de 1 até 20 
// e exiba os números no console

for (let i = 1; i <= 20; i += 1){
    console.log(i)
}

// // // Crie um for que mostre a tabuada do 5
// // // do 5 x 1 até o 5 x 10

for (let i = 1; i <= 10; i += 1){
    let resultado = i*5
    console.log(`5 x ${i} = ${resultado}`) // modo de imprimir formatado. Precisa usar crase `` 
                                           // cifrão $ e a variavel dentro de chaves{}
}

// // Contar de 10 até 1 

for (let i = 10; i >=1; i-=1){
    console.log(i)
}

// Mostrar os números pares de 0 a 20 

for (let i = 1; i <= 20; i += 1){
    if(i % 2 ==0){
        console.log(i)
    }
}

// contar de 0 até 50 pulando de 5 em 5

for (let i = 0; i <=10; i += 1){
    console.log(i*5)
}