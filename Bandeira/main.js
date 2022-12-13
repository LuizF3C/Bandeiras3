class Bandeira {
    constructor(id, pais, flag) {
        this.id = id,
            this.pais = pais,
            this.flag = flag
    }
}
const botao = document.querySelector('.button')
const image1 = document.querySelector('.image1')
const image2 = document.querySelector('.image2')
const option = document.querySelector('.option')

const audio = new Audio('./mito.mp3')
audio.volume = 0.22;

const oTotais = 2;

const imagens = [
 /*Brasil*/ 'https://www.gov.br/planalto/pt-br/conheca-a-presidencia/acervo/simbolos-nacionais/bandeira/bandeiragrande.jpg',
 /*Peru*/ 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Flag_of_Peru_%28state%29.svg/1280px-Flag_of_Peru_%28state%29.svg.png',
 /*América*/ 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1200px-Flag_of_the_United_States.svg.png',
 /*Chile */ 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Flag_of_Chile.svg/2560px-Flag_of_Chile.svg.png'
]

const listaPaises = [
    new Bandeira(0, 'Brasil', imagens[0]),
    new Bandeira(1, 'Peru', imagens[1]),
    new Bandeira(2, 'América', imagens[2]),
    new Bandeira(3, 'Chile', imagens[3]),
]

let certo = [3, 2];
let rodada = 0;
let ordemBandeiras = [1, 3, 0, 2];
let quaisB = 0;

console.log(botao.children[1].value)

option.children[0].valor = ordemBandeiras[quaisB];
option.children[1].valor = ordemBandeiras[quaisB + 1];

option.src = listaPaises[option.children[0].valor].flag
option.src = listaPaises[option.children[1].valor].flag

function acerto(){

    rodada++;
    quaisB += oTotais;

    option.children[0].valor = ordemBandeiras[quaisB]
    option.children[1].valor = ordemBandeiras[quaisB+1]

    option.children[0].src = listaPaises[option.children[0].valor].flag
    option.children[1].src = listaPaises[option.children[1].valor].flag
}

// botao.children[0].addEventListener('click', function (e) {

//     if (botao.children[0].value == certo[rodada]) {
//         console.log('Correto')
//         rodada += 1;
//         quaisB += 2

//         botao.children[1].value = ordemBandeiras[quaisB + 1];
//         image2.src = listaPaises[botao.children[1].value].flag

//         botao.children[0].value = ordemBandeiras[quaisB];
//         image1.src = listaPaises[botao.children[0].value].flag

//         audio.play();

//     } else { console.log('Errou') }

//     console.log(`rodada:${rodada}\nquaisB:${quaisB}\nbot1:${botao.children[0].value}\nbot2:${botao.children[1].value}`)
// })

// botao.children[1].addEventListener('click', function (e) {

//     if (botao.children[1].value == certo[rodada]) {
//         console.log('Correto')
//         rodada += 1;
//         quaisB += 2;

//         botao.children[0].value = ordemBandeiras[quaisB];
//         image1.src = listaPaises[botao.children[0].value].flag

//         botao.children[1].value = ordemBandeiras[quaisB + 1];
//         image2.src = listaPaises[botao.children[1].value].flag
    
//     } else { console.log('Errou') }

//     console.log(`rodada:${rodada}\nquaisB:${quaisB}\nbot1:${botao.children[0].value}\nbot2:${botao.children[1].value}`)
// })

option.children[0].addEventListener('click', function(e){
    console.log('piu')
    if (option.children[0].valor == certo[rodada]){
        acerto();
    }
})

document.getElementById('polonia').addEventListener('click', function(e){
    console.log('Tronco')
})