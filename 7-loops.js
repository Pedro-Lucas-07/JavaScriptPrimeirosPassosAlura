console.log(`\n Trabalhando com listas`);

const listaDeDestinos = new Array (
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
    
);

const idadeComprador = 16;
const estaAcompanhada = false;
let temPassagemComprada = false;
const destino = "Limeira";

console.log("\n Destinos Possíveis:");
console.log(listaDeDestinos);

const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;

let contador = 0;
let destinoExiste = false

console.log("Destino existe: ", destinoExiste);

if(podeComprar && destinoExiste){
    console.log("Boa viagem");
} else{
    console.log("Desculpe tivemos um erro");
}

for(let i = 0; i < listaDeDestinos.length; i ++){
    
    if(listaDeDestinos[i] == destino){
        
        destinoExiste = true;
       
    }

}