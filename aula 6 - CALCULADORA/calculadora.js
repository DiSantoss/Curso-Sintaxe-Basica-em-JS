function calculadora() {
    const operacao = Number(prompt('Escolha uma operacao:\n 1 - soma(+)\n 2 - subtração (-)\n 3 - multiplicacao (*) \n 4 - divisão real (/)\n 5 - divisao inteira (%)\n 6 - potenciacao (**)'));


    if (operacao >=7 || !operacao) {
        alert('Error - Operação inválida');
        calculadora()
    } else {let n1 = Number(prompt('Insira o primeiro valor:')); //tem que colocar entre Number() o prompt se nao ele interpreta como string
    let n2 = Number(prompt('Insira o segundo valor:'));
    let resultado ;
    
    
    
    function soma (){
        resultado = n1 + n2;
        alert(resultado);
        novaOperacao()
    }
    
    function subtracao (){
        resultado = n1 - n2;
        alert(resultado);
        novaOperacao()
    }
    
    function multiplicacao (){
        resultado = n1 * n2;
        alert(resultado);
        novaOperacao()
    }
    
    function divisaoReal (){
        resultado = n1 / n2;
        alert(resultado);
        novaOperacao()
    }
    
    function divisaoInteira (){
        resultado = n1 % n2;
        alert(resultado);
        novaOperacao()
    }
    
    function potenciacao (){
        resultado = n1 ** n2;
        alert(resultado);
        novaOperacao()
    }
    
    function novaOperacao(){
        let opcao = prompt('Deseja Fazer Outra Operação? \n 1 - Sim\n 2 - Não');
    
        if(opcao == 1 ) {
            calculadora(); 
        } else if (opcao == 2) {
            alert('Até mais') 
        }
        else {
            alert('Digite uma opção válida');
            novaOperacao()
        }
    }
    
    if (operacao == 1 ) {
        soma()
    } else if (operacao == 2 ){
        subtracao();
    } else if (operacao == 3 ){
        multiplicacao();
    } else if (operacao == 4 ){
        divisaoReal();
    } else if (operacao == 5 ){
        divisaoInteira();
    } else if (operacao == 6) {
        potenciacao()
    }
    }




}

calculadora();
