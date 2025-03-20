//funções: é um bloco de codigo que tem omo preocupação a reutilizacao deste.
//a ideia principal, é fazer vales a modularidade e a simplicidade das caracteriscas de um algoritmo
//function NomeFunção (atributos) {} script que será usado

//cleanCode: código limpo
// - não repetir codigos,
// - as variáveis e funções deve ter nomes apropriados para o uso,
// - os espaçamentos devem seguir as boas práticas,
// - trazer a documentação necessária para a manutenabilidade.

function saudar(){
    alert("Olá lindo dia para nós")
    alert("Galera energias mega positivas para lindo lindo")
}
///soma de dois valores
function soma(a,b){
    //console.log: aparece somente no inspecionar, e o usuário não consegue ver diretamente.
    console.log(a);
    return a + b;
};

function somarVarios(a=0, b=0, c=0, d=0){
    return a+b+c+d
};

function converterMaiusculo(texto){
    return texto.toUpperCase();
}
//para saber a quanidade de caracteres de uma palavra/frase
function qtdCaracteres(frase){
    return frase.length;
}
//limpa espaços finais e iniciais
function limparEspacos(frase){
    return frase.trim();
}


//para fazer uma função ser executada temos que chama-la
saudar();//saudar é o nome da função por isso chamou função

//chamando a função soma
resultado = soma(10,20); //soma é o nome da função e dentro do () foi passado o valor dos atributos a e b (a,b)=(10,20)

//apresenta no corpo do html
document.write(`<p>${resultado}`);
//chamando a função soma
let resultadoVarios = somarVarios(10, 20, 5);
document.write(`<p> Soma Vários ${resultadoVarios}`);
//chamando a função converterMaiusculo
let frase = prompt("Informe uma frase")
let fraseGrande = converterMaiusculo(frase)
document.write(`<p> Frase Grande: ${fraseGrande}`)
//chamando a função qtdCaracteres para contar os caracteres da frase
let quantidade = qtdCaracteres(frase)
document.write(`<p> A palavra possui: ${quantidade} Caracteres`)
//chamando a função limparEspacos - ele tira os espaços adicionais e finais que são desnecessários
let limpo = limparEspacos(frase)
document.write(`<p> Texto Limpo: ${limpo}`)

let h1 = window.document.getElementsByTagName('h1')[0];
h1.style.color = 'pink';


let corpo = window.document.body;
corpo.style.background = 'black';

let letras = window.document.body;
corpo.style.color = 'white';

//mudar cr de uma div
function mudarCor(){
    let div = document.getElementById("minhaDiv");

    if(div.style.backgroundColor == "pink"){
        div.style.backgroundColor = "purple"
    }
    else{
        div.style.background = "pink"
    }

    if(div.style.color == "black"){
        div.style.color = "white"
    }
    else{
        div.style.color = "black"
    }
}

