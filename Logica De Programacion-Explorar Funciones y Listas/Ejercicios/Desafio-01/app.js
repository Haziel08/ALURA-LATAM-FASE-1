let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora del Desafío';

function botonConsole(){
    alert('El botón fue clicado');
};

function botonPromt(){
    let ciudad = prompt('Ingrese el nombre de una ciudad de Brasil: ');
    alert(`Estuve en ${ciudad} y me acordé de ti`);
};

function botonAlerta(){
    alert('Yo amo JS');
};

function botonSuma(){
    let numero1 = parseFloat(prompt('Ingrese el primer número:'));
    let numero2 = parseFloat(prompt('Ingrese el segundo número:'));
    let resultado = numero1 + numero2;
    alert(`El resultado de la suma de los dos numeros es: ${resultado}`);
};