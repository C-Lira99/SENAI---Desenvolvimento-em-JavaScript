 
// fetch("https://rickandmortyapi.com/api/character")     // fetch serve para insevir o URL da API
//     .then((res) => res.json())                         // aqui (.then) estamos tratando o sucesso do consumo da API,
//     .then((data) =>{                                   // e com uma arrow function(=>) e a função (json()), estamos                    
//         console.log(data.results[0].name)              // transformando os dados em json para um objeto java escript
//     })                                                 // o (.then(data)) serve para mostrar esses dados convertidos


fetch("https://rickandmortyapi.com/api/character")     
.then((res) => res.json())    
.then((data) => {                                                    
        console.log(data.results[4])              
    })  