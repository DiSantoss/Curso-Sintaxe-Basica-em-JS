/*var jogador1 = 1;
var jogador2 = 0;
var placar;


if (jogador1 !== -1) {
if (jogador1 > 0) {
    console.log('Jogador 1 Marcou Ponto')
} else if (jogador2 > 0) {console.log('Jogador 2 Marcou Ponto')} else {
    console.log('Ninguem Marcou Ponto')
}
}
*/

let array = ['v1','v2','v3','v4','v5'];
let object = {propriedade1:'v1',proriedade2:'v2',propriedade3:'v3'}

// for executa uma funcao até que ela seja falsa
/*for(let i =0;i < array.length; i++) {
    console.log(i) 
} */

// for/in executa repetição a partir de uma propiedade
for (let i in array) {
console.log(i)
}

// com object
for (i in object) {
    console.log(i)
}

// for/off - execua repeticao a partir do valor
 for (i of array ) {
     console.log(i)
 }

 // while > enquanto a for menor que 10 ele vai sobar a = a +1 e tambem vai dar um console.log na varialvel a

 var a =0;
 while (a < 10) {
     a++;
     console.log(a);
 }

 // while - executa até que determinada condição seja falsa.

 do {
     a++;
     console.log(a);
    } while (a < 10) 
 