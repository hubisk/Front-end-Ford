
// indice -->     0     1   2     3    (a primeira posição começa com o indice 0)
const valores = [28.0, 80, 43, 1.8888]


// var(array) -> definido um indice 10 e atribuindo o valor de 967 para o array
valores[10] = 967 //incluindo o indice 10 no array

console.log(`
    ${valores[0]}
    ${valores[3].toFixed(2)}
    ${valores[5]}
    ${valores[10]}
    ${valores}
    ${valores.length} 

`);

//toFixed limita as casas decimais e arredonda o valor


// ******************************** IMPLEMENTAR MÉDOTOS DE ARRAY ********************************

// MÉTODOS DE ARRAY

// 1- push     insere um elemento no array
const pushArray = ["girafa", "hipopótamo", "leão", "zebra"]

console.log(pushArray);

// array.método()
pushArray.push('escorpião') //insere o animal escorpião no final do array
console.log(pushArray);

pushArray.unshift("tartaruga") //insere o animal tartaruga no inicio da array 
console.log(pushArray);

// 2- pop    remove o ultimo elemento da array
const popArray = ["andre", "luis", "fernanda", "mariana"]

console.group(popArray);

popArray.pop() //remove o ultimo item da array

popArray.shift() //remove o primeiro item da array

console.log(popArray);

// 3- delete     remove o VALOR do item, o valor deletado aparece como <1 empty item> no console
const frutas = ["banana", "maça", "atemoia", "tomate"]

delete frutas[1] //remove o valor do elemento selecionado

frutas.splice(1, 1, "teste") //adiciona novos itens no array (indice, quantidade removida, novo item)

console.log(frutas);

// 4- filter
// indice -->         0   1  2   3  4   5
const filterNumber = [1, 50, 65, 2, 5, 100]

console.log(filterNumber); //filtra os elementos baseados nos paramêtros colocados

//                                        arrow function
const numeroMenor10 = filterNumber.filter( (numerosArray) => {
   //bloco de código - lógica
            //valores
    return numerosArray < 10

} )

console.log(numeroMenor10); //retorna os valores menores que 10


// 5- map -> modifica o array existente -> criar um novo array modificado -> funções

//indice          0  1  2  3  4  5 
const arrayMap = [1, 2, 3, 4, 5, 6]

//modificação do array - map

const arrayModificado = arrayMap.map( (ajudante) => {
    //começar o bloco de código 

    return ajudante * 2

})

console.log(arrayMap);
console.log(arrayModificado);

// 6- foreach
const arrayString = ["carlos", "andre", "julia", "akira"]

arrayString.forEach ((elements) => {
    console.log(elements);
})

// 7- sort
// Crie uma array de nomes e em seguida organize-os em ordem alfabética

const arrayMeses = [ "janeiro", "fevereiro", "março", "abril", "maio"]

    console.log(arrayMeses);

arrayMeses.sort()

    console.log(arrayMeses);

const numerosArray = [45, 67, 32, 94, 13, 10000, 10]
numerosArray.sort()
console.log(numerosArray);

// 8- reduce


/* Exercício
Crie 2 arrays: nomes e sobrenomes
Crie um terceiro array de NomesCompleto,
ao final, exiba os nomes completos no mconsole com o forEach
utilizar arrow function
Se necessário, utilize outros métodos de array. */

/*const arrayNomes = ['joão', 'paulo', 'cintia', 'rosana', 'sandra']
const arraySobreNomes = ['schultz', 'oliveira', 'almeida', 'raguzzo', 'vineto']

nomesCompletos = arrayNomes.forEach ( (nome) => {
    console.log(nome);
}) + arraySobreNomes.forEach ( (sobreN) => {
    console.log(sobreN);
})

    console.log(nomesCompletos); */

const nome = ['joão', 'paulo', 'cintia', 'rosana', 'sandra']
const sobreN = ['schultz', 'oliveira', 'almeida', 'raguzzo', 'vineto']

const nomesCompletos = nome.map((nome, indice) => {
    // Iníco da lógica
    return `${nome} ${sobreN[indice]}`  // interpolação
})

// Lógica do forEach
nomesCompletos.forEach((nomeSobre) => {
    console.log(nomeSobre);
})