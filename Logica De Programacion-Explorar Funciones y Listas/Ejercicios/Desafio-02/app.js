//1. Crear una función que muestre "¡Hola, mundo!" en la consola.
function holaMundo(){
    alert("¡Hola, mundo!");
    console.log("¡Hola, mundo!");
    return;
};

//2. Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en la consola.
function holaUsuario(nombre) {
    alert(`¡Hola, ${nombre}!`);
    console.log(`¡Hola, ${nombre}!`);
    return;
};

//Toma el valor y lo pasa a la función principal
function saludarDesdeInput() {
    let nombre = document.getElementById('nombreUsuario').value;
    holaUsuario(nombre);
    return;
};

//3. Crear una función que reciba un número como parámetro y devuelva el doble de ese número.
function dobleDeUnNumero(numeroDeUsuario){
    let doble = 2*numeroDeUsuario;
    return doble
};

function recibirNumero() {
    let numero = parseInt(document.getElementById('numeroUsuario').value);
    let dobleNumero = dobleDeUnNumero(numero);
    alert(`El doble de tu número es: ${dobleNumero}`);
    return;
};

//4. Crear una función que reciba tres números como parámetros y devuelva su promedio.
function promedioDeTres(num1, num2, num3) {
    return (num1 + num2 + num3) / 3;
};

function calcularPromedioDesdeInput() {
    let n1 = parseFloat(document.getElementById('num1').value);
    let n2 = parseFloat(document.getElementById('num2').value);
    let n3 = parseFloat(document.getElementById('num3').value);

    let promedio = promedioDeTres(n1, n2, n3);
    alert(`El promedio es: ${promedio}`);
};

//5. Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.
function obtenerMayor(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else if (num2 > num1) {
        return num2;
    } else {
        return "Son iguales";
    }
};

function obtenerMayorDesdeInput() {
    let n1 = parseFloat(document.getElementById('numero1').value);
    let n2 = parseFloat(document.getElementById('numero2').value);

    let mayor = obtenerMayor(n1, n2);
    alert(`El mayor es: ${mayor}`);
};

//6. Crear una función que reciba un número como parámetro y devuelva el resultado de multiplicar ese número por sí mismo.
function calcularCuadrado(numero) {
    return Math.pow(numero, 2);
};

function obtenerCuadradoDesdeInput() {
    let numeroCuadrado = parseFloat(document.getElementById('numeroCua').value);
    
    let Cuadrado = calcularCuadrado(numeroCuadrado);
    alert(`El cuadrado de tu número es: : ${Cuadrado}`);
};


