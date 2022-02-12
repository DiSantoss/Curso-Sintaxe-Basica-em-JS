/*// boolean
var vDoF = false;
console.log(vDoF)

// metodo para saber o tipo > typeof()
console.log(typeof(vDoF))

// number
var numeroQualquer = 1;
console.log(typeof(numeroQualquer))

// string
var nome = "Diego"
console.log(typeof(nome))

// como declarar
var variavel = "Diego"
variavel = 15
console.log(typeof(variavel))

let variavel2 = "Diego"
console.log(variavel2)
variavel2 = "Santos" 
console.log(variavel2)

const constante = "Diego";
const constante = "Santos;"
console.log(constante) */

 var escopoGlobal = 'global';
 console.log(escopoGlobal);

 function escopoLocal() {
      let escopoLocalInterno = 'local';
      console.log(escopoLocalInterno);  
 }

  escopoLocal()