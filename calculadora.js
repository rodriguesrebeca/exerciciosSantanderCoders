let calculadora = (() => {
    let inputs = [];
    //let resultado = 0;
    const lista = new Map();
    
    const subtracao = (a,b) => a - b; 
    const soma = (a,b) => a + b;
    const multiplicacao = (a,b) => a * b;
    const divisao = (a,b) =>  a / b;

     const operadores = {
            '-': subtracao,
            '+': soma,
            '*': multiplicacao,
            '/': divisao
    };

    const enter = (valor) => {
         inputs = [...inputs, valor];
    };

    const equals = () => {
        const [a, operador, b] = inputs;
        const resultado = operadores[operador](a,b)
        
        const calculo = (inputs, resultado) => lista.set(inputs.join(''), resultado);
        calculo(inputs,resultado)
        inputs = []
        return resultado
    };

    const list = () => lista;
   
    const reset = () => lista.clear();

    return {
        enter,
        equals,
        list,
        reset
    }
})()