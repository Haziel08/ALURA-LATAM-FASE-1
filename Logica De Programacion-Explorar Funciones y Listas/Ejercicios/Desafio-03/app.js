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

function calculoArea(altura, ancho){
    return ancho*altura;
};

function calculoPerimetro(altura, ancho){
    return (2*ancho)+(2*altura);
};


function obtenerAlturaAncho(){
    let altura = parseFloat(document.getElementById('alturaRectangulo').value);
    let ancho = parseFloat(document.getElementById('ancho').value);

    let perimetro = calculoPerimetro(altura, ancho);
    let area = calculoArea(altura, ancho);

    document.getElementById('resultadoPerimetro').innerText = perimetro.toFixed(2) + ' m';
    document.getElementById('resultadoArea').innerHTML = area.toFixed(2) + ' m<sup>2</sup>';
};

/*
    5. Crea una función que muestre en pantalla el área y el perímetro de una sala circular, 
    utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.
*/

function calculoPerimetroCirc(radio){
    return 2 * Math.PI * radio;
};

function calculoAreaCirc(radio){
    return Math.PI * Math.pow(radio, 2);
};

function obtenerRadio(){
    let radio = parseFloat(document.getElementById('radio').value);

    let perimetro = calculoPerimetroCirc(radio);
    let area = calculoAreaCirc(radio);

    //innerText pone solo texto plano.
    document.getElementById('resultadoPerimetroCirc').innerText = perimetro.toFixed(2) + ' m';
    //innerHTML puede insertar varios elementos HTML, como <li>, <div>, etc.
    document.getElementById('resultadoAreaCirc').innerHTML = area.toFixed(2) + ' m<sup>2</sup>';
};

//6. Crea una función que muestre en pantalla la tabla de multiplicar de un número dado
function obtenerTablaMultiplicar() {
    let numero = parseInt(document.getElementById('numeroMultiplicar').value);
    let resultadoHTML = '';

    for (let i = 1; i <= 10; i++) {
        let resultado = numero * i;
        resultadoHTML += `<li>${numero} × ${i} = ${resultado}</li>`;
    }

    document.getElementById('resultadoTabla').innerHTML = resultadoHTML;
};

