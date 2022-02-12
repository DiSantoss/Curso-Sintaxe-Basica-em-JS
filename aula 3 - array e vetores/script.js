let array = ['string',1,true,['array1'],['array2'],['array3'],['array4']];
 console.log(array[4]); 

// forEach(function()) - ele recebe uma função como parametro e dentro ele recebe uma instrução. ele vai imprimir o array junto com o indice.
array.forEach(function(item,index){console.log(item,index)});

// push() coloca um dado novo no array.

array.push('novo item')
console.log(array)

// pop() ele remove um item no final do array
array.pop()
console.log(array)

// shift() - ele tira um item do inicio do array.
array.shift()
console.log(array)

// unshift() - adiciona um item no inicio do array
array.unshift('nuevo item')
console.log(array)

// indexOf() - retorna o indice de um valor ou seja a posição;
console.log(array.indexOf(1));

// splice - remove ou substitui um item por um indice, precisa de um indice p/ começo e fim ;
array.splice(0,3)
console.log(array)

// slice() - retorna uma parte de um array ja existente, precisa de um indice p/ começo e fim ;
let novoarray = array.slice(0,3)
console.log(novoarray)  

// objeto

let object = {string:'string',number:1,boolean:true,array:['array'], objectinterno:{objetointerno:'objeto interno'}};
console.log(object.objectinterno)

var string = object.string;
console.log(string);

// desestruturação 

var arrayInterno = object.array;
console.log(arrayInterno)

var {string,boolean,objectinterno} = object;
console.log(string,boolean,objectinterno)
