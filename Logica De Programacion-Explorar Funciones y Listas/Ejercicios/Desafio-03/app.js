//1. Crea una función que calcule el índice de masa corporal (IMC) de una persona a partir de su altura en metros y peso en kilogramos, que se recibirán como parámetros.
function calculoIMC(peso, altura){
    return peso/(Math.pow(altura, 2));
};

function obtenerPesoAltura() {
    let peso = parseFloat(document.getElementById('peso').value);
    let altura = parseFloat(document.getElementById('altura').value);

    let imc = calculoIMC(peso, altura);
    document.getElementById('resultadoIMC').innerText = imc.toFixed(2); // Muestra con 2 decimales
};

//2. Crea una función que calcule el valor del factorial de un número pasado como parámetro.
function calculoFactorial(numero){
    let resultado = 1;
    if (numero === 0){
        return 1;
    }else{
        for (let i = 1; i <= numero; i++) {
            resultado *= i;
        }
        return resultado;
    }
};

function obtenerFactorial() {
    let factorialNumero = parseFloat(document.getElementById('factorialNumero').value);
    let factorialResultado = calculoFactorial(factorialNumero);
    document.getElementById('resultadoFactorial').innerText = factorialResultado; // Muestra con 2 decimales
};

/*
    3. Crea una función que convierta un valor en dólares, pasado como parámetro, 
    y devuelva el valor equivalente en reales(moneda brasileña,si deseas puedes hacerlo con el valor del dólar 
    en tu país). Para esto, considera la cotización del dólar igual a R$4,80.
*/

function calculoDolarPesoM(dolares) {
    //Fecha 29 de Julio del 2025 esa es la tasa de cambio
    return dolares * 18.73;      
};


function obtenerDolares() {
    let numeroDolar = parseFloat(document.getElementById('numeroDolar').value);
    let pesosResultado = calculoDolarPesoM(numeroDolar);
    document.getElementById('resultadoPesos').innerText = pesosResultado.toFixed(2); 
};

/*
    4. Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular, 
    utilizando la altura y la anchura que se proporcionarán como parámetros.
*/




