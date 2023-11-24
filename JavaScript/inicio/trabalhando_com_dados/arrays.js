
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

// 5- map
// 6- forEach
// 7- sort
// 8- reduce

