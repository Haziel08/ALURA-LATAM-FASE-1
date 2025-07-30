//1. Crea una lista vacía llamada "listaGenerica".
let listaGenerica = [];

//2. Crea una lista de lenguajes de programación llamada 
// "lenguagesDeProgramacion con los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.
let lenguagesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];

//3. Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.
lenguagesDeProgramacion.push('Java', 'Ruby', 'GoLang');

//4. Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.
function mostrarElementos(lista) {
    for(let i = 0; i < lista.length; i++){
        console.log(lista[i]);
    }
};

//5. Crea una función que muestre 
// en la consola todos los elementos de la lista "lenguagesDeProgramacion en orden inverso.
function mostrarElementosInverso(lista) {
    for (let i = lista.length - 1; i >= 0; i--) {
        console.log(lista[i]);
    }
}


//6. Crea una función que calcule el promedio de los elementos en una lista de números.
let numerosRandom = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function promedio(lista){
    let promedio = 0;
    for(let i = 0; i < lista.length; i++){
        promedio += lista[i];
    }
    
    return promedio/lista.length;
};

//7. Crea una función que muestre en la consola el número más grande y el número más pequeño de una lista.
function obtenerMaxMin(lista) {
    let mayor = lista[0];
    let menor = lista[0];

    for (let i = 1; i < lista.length; i++) {
        if (lista[i] > mayor) {
            mayor = lista[i];
        }
        if (lista[i] < menor) {
            menor = lista[i];
        }
    }

    console.log(`El elemento mayor de la lista es: ${mayor} y el menor es: ${menor}`);
};


//8. Crea una función que devuelva la suma de todos los elementos en una lista.
function sumaLista(lista){
    let suma = 0;
    for (let i = 0; i < lista.length; i++) {
        suma += lista[i];
    }
    return suma;
};

//9. Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado como 
// parámetro, o -1 si no existe en la lista.
function buscarElemento(lista, elemento) {
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] === elemento) {
            return i;
        }
    }
    return -1;
};

//10. Crea una función que reciba dos listas de números del mismo tamaño y 
// devuelva una nueva lista con la suma de los elementos uno a uno.
function sumarDosListas(lista1, lista2){
     let listaSuma = [];
    for (let i = 0; i < lista.length; i++) {
        listaSuma.push(lista1[i] + lista2[i])
    }
    return listaSuma;
};

//11. Crea una función que reciba una lista de números y 
// devuelva una nueva lista con el cuadrado de cada número.
function listaCuadrado(lista){
    let listaAlCuadrado = [];
    for (let i = 0; i < lista.length; i++) {
        listaAlCuadrado.push(Math.pow(lista[i], 2))
    }
    return listaAlCuadrado;
};