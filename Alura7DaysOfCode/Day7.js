function suma (a, b) {
    return a + b;
}
function resta (a, b) {
    return a - b;
}
function multiplica (a, b) {
    return a * b;
}
function divide (a, b) {
    return a / b;
}
function calcular (a, b, operacion) {
    return operacion(a, b);
}
function calculadora (a, b, operacion) {
    let salir = false;
    while (!salir) {
        let numero1 = parseFloat(prompt("Ingrese el primer número:"));
        let numero2 = parseFloat(prompt("Ingrese el segundo número:"));
        let operacion = prompt("Ingrese la operación a realizar (suma, resta, multiplica, divide):");
        let resultado;
        switch (operacion) {
            case "suma":
                resultado = calcular(numero1, numero2, suma);
                break;
            case "resta":
                resultado = calcular(numero1, numero2, resta);
                break;
            case "multiplica":
                resultado = calcular(numero1, numero2, multiplica);
                break;
            case "divide":
                resultado = calcular(numero1, numero2, divide);
                break;
            default:
                alert("Operación no válida");
                continue;
        }
        alert("El resultado de la operación " + operacion + " entre " + numero1 + " y " + numero2 + " es: " + resultado);
        salir = confirm("¿Desea salir?");
    }
}

calculadora();