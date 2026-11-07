// Faça um sistema de semáforo
// Vermelho -> Pare!
// Amarelo -> Atenção!
// Verde -> Siga!
// Outro -> Cor desconhecida

let semaforo = "Verde"

switch (semaforo){
    case "Vermelho":
        console.log("Pare!")
        break
    case "Amarelo":
        console.log("Atenção!")
        break
    case "Verde":
        console.log("Siga!")
        break
    default:
        console.log("Defeito!")
}