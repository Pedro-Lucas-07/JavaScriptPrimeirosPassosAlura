console.log(`Trabalhando com listas`);

const listaDeDestinos = new Array (
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
    
);

const idadeComprador = 16;
const estaAcompanhada = false;
const temPassagemComprada = true;

listaDeDestinos.push(`Curitiba`);
console.log("Destinos Possíveis:");
console.log(listaDeDestinos);

if(idadeComprador >= 18 || estaAcompanhada == true){
    console.log("Boa viagem!!");
    listaDeDestinos.splice(1, 1);
} else{
    console.log("Não é maior de idade e não posso vender");
}

console.log("Embarque: \n \n");
if(idadeComprador >= 18 && temPassagemComprada){
    console.log("Boa viagem");
}else{
    console.log("Você não pode embarcar");
}


console.log(listaDeDestinos);

