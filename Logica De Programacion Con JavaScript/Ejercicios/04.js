//1.Crea un programa que utilice console.log para mostrar un mensaje de bienvenida.
console.log("Bienvenido al ejercicio 4");

//2.Crea una variable llamada "nombre" y asígnale tu nombre. Luego, utiliza console.log para mostrar el mensaje "¡Hola, [tu nombre]!" en la consola del navegador.
let nombre = "Haziel";
console.log(`¡Hola, ${nombre}!`);

//3.Crea una variable llamada "nombre" y asígnale tu nombre. Luego, utiliza alert para mostrar el mensaje "¡Hola, [tu nombre]!".
let nombre2 = "Haziel";
alert(`¡Hola, ${nombre2}!`);

//4.Utiliza prompt y haz la siguiente pregunta: ¿Cuál es el lenguaje de programación que más te gusta?. Luego, almacena la respuesta en una variable y muestra la respuesta en la consola del navegador.
let lenguajeProgramacion = prompt("¿Cuál es el lenguaje de programación que más te gusta?: ");
console.log(lenguajeProgramacion);

//5.Crea una variable llamada "valor1" y otra llamada "valor2", asignándoles valores numéricos de tu elección. Luego, realiza la suma de estos dos valores y almacena el resultado en una tercera variable llamada "resultado". Utiliza console.log para mostrar el mensaje "La suma de [valor1] y [valor2] es igual a [resultado]." en la consola.
let valor1 = 10;
let valor2 = 7;
let resultado = valor1 + valor2;
console.log(`La suma entre ${valor1} y ${valor2} es igual a ${resultado}.`);

//6.Crea una variable llamada "valor1" y otra llamada "valor2", asignándoles valores numéricos de tu elección. Luego, realiza la resta de estos dos valores y almacena el resultado en una tercera variable llamada "resultado". Utiliza console.log para mostrar el mensaje "La diferencia entre [valor1] y [valor2] es igual a [resultado]." en la consola.
let value1 = 10;
let value2 = 7;
let res = value1 - value2;
console.log(`La diferencia entre ${value1} y ${value2} es igual a ${res}.`);

//7. Pide al usuario que ingrese su edad con prompt. Con base en la edad ingresada, utiliza un if para verificar si la persona es mayor o menor de edad y muestra un mensaje apropiado en la consola.
let edad = prompt("Por favor, ingrese su edad: ");
if(edad >= 18){
    console.log("Eres mayor de edad.");
}else{
    console.log("Eres menor de edad.");
}

//8. Crea una variable "numero" y solicita un valor con prompt. Luego, verifica si es positivo, negativo o cero utilizando un if-else y muestra el mensaje correspondiente.
let num = prompt("Ingrese un número: ");
if(num != 0){
    if(num > 0){
        alert("Es positivo.");
    }else{
        alert("El número es negativo.");
    }
}else{
    alert("El número es cero");
}

//9. Utiliza un bucle while para mostrar los números del 1 al 10 en la consola.
let contador = 1;
while (contador <= 10) {
    console.log(contador);
    contador++;
}


//10. Crea una variable "nota" y asígnale un valor numérico. Utiliza un if-else para determinar si la nota es mayor o igual a 7 y muestra "Aprobado" o "Reprobado" en la consola.
let nota = 10;
if(nota >= 7){
    alert("Aprobado");
}else{
    alert("Reprobado");
}

//11.Utiliza Math.random para generar cualquier número aleatorio y muestra ese número en la consola.
console.log(Math.floor(Math.random() * 100));

//12. Utiliza Math.random para generar un número entero entre 1 y 10 y muestra ese número en la consola.
let numeroRandom = Math.floor(Math.random()*10)+1;
console.log(numeroRandom);

//13. Utiliza Math.random para generar un número entero entre 1 y 1000 y muestra ese número en la consola.
let numeroRandom2 = Math.floor(Math.random()*1000)+1;
console.log(numeroRandom2);