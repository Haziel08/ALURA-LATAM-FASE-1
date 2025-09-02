//Ejercicio día 2
let nombre =  prompt("¿Cuál es tu nombre?");
let edad = prompt("¿Cuál es tu edad?");
let lenguajeProgramacion = prompt("¿Qué lenguaje de programación estás estudiando?");

console.log("Hola " + nombre + ", tienes " + edad + " años y estás estudiando " + lenguajeProgramacion + ".");

let op = prompt("¿Te gusta estudiar " + lenguajeProgramacion + "? Responde con el número 1 para SÍ o 2 para NO.");

if(op == 1){
    console.log("¡Muy bien! Sigue estudiando y tendrás mucho éxito.");
}else{
    console.log("Oh, qué pena... ¿Ya intentaste aprender otros lenguajes?");
}