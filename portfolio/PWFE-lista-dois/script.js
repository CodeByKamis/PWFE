//Variáveis: espaços em memoria que armazena valores
//let: variavel que recebo em meio a exeção do código
//const: valores fixos do código que já são previamente definidiso (como valor de pi)
//var: é a primeira forma de declarar uma variável pore hoje é obsoleta


/*
escopo diz respeito a como e vou usar as variaveis criadas quando
criada uma variavel dentro de uma função, ela é usada somente dentro dela.
*/

//ainda temos mais 1 tipo de variável em JS, o > ARRAY <: Conjunto de dados numa mesma variável

//BLOCO DE CÓDIGO:
///usando os "[]" eu posso criar esse array, lmebrando que ele é indexado, começando em "0" (zero)
let numeros = [5,10,15,20,25,30,35,40,45,50]

//para saber os indices do ARRAY
for(let indice in numeros){
    document.write(`${indice} `)
}

//Para ver os valores armazenados no índice
for (let valor of numeros){//para ver valores armazenados no indice (chamado valor)
    if (valor >45){
        document.write(`${valor}.`)
    }else{
        document.write(`${valor}, `)
    }   
}

//forEach é uma função para a manipulação de um array - ele serve para percorrer um conjunto de uma unica variável
numeros.forEach(function(valor){
    document.write(`<p> ${valor} <p>`)
})

//inserir/adicionar um elemnto no final da lista, usa-se o comando:
numeros.push(60)
if (numeros >51){
    document.write(`${numeros}. <p>`)
}else{
    document.write(`${numeros}, `)
}



//inserir no inicio do array
numeros.unshift(0)
document.write(`${numeros}<p>`)

//excluir no inicio do array
numeros.shift()
document.write(`${numeros}<p>`)

//excluir no final do array
numeros.pop()
document.write(`${numeros}<p>`)

//funcoes callback: eu interajo com o meu array trato a informação e guardo o resultado em uma nova variavel (array)


//map: percorro todo o array, faço alguma coisa com o valor e guardo a varivael de retorno (função callback)
let numerosDobrados = numeros.map (function(numero){
    return numero *2
})
document.write(`${numerosDobrados}<p>`)

//filter: ele também percorre o array, e guarda no array de retorno todos os valores que correspondem a uma condição, por exemplo: todos os numeros ímpares

//abaixo ele deve retorna todos os valores do array que sejam divisiveis por 3:
let numerosdiv3 = numeros.filter(function(numeros){
    return numeros %3 === 0 // 3 iguais significa que ele deve verificar se dois valores são iguais tanto em valor quanto em tipo 
})
document.write(`${numerosdiv3}<p>`)


//find - ele percorre o array e para no primeiro elemento da lista que atenda a condição determinada
let numerosPar = numeros.find(function(numeros){ //para no primeiro que atender a condição
    return numeros %2 === 0 // 3 iguais significa que ele deve verificar se dois valores são iguais tanto em valor quanto em tipo 
})
document.write(`${numerosPar}<p>`)