let max = parseInt(prompt("Ingresa el valor máximo para el número secreto (por ejemplo, 10):"));
while (isNaN(max) || max <= 0) {
    max = parseInt(prompt("Por favor, ingresa un número válido mayor que 0:"));
}

let numeroSecreto = Math.floor(Math.random()*max)+1;
let numeroUsuario = 0;
let contadorDeIntentos = 1;
//let palabraIntento = "intento";
let maximosIntentos = 3;



while(numeroUsuario != numeroSecreto){
    let entrada;
    do {
        entrada = prompt(`Me indicas un número entre 1 y ${max} por favor: `);
        numeroUsuario = parseInt(entrada);

        if (isNaN(numeroUsuario)) {
            alert("Eso no es un número válido. Intenta de nuevo.");
        }
    } while (isNaN(numeroUsuario));
    console.log(typeof(numeroUsuario));

    console.log("Valor intento: " + numeroUsuario);


    if (numeroUsuario == numeroSecreto){
       
        alert(`Adivinaste, el número es: ${numeroUsuario}. Lo hiciste en ${contadorDeIntentos} ${contadorDeIntentos == 1 ? "intento" : "intentos"}`);
        
    } else {
        if(numeroUsuario > numeroSecreto){
            alert("El número secreto es menor.");
        } else {
            alert("El número secreto es mayor.");
        }
        contadorDeIntentos += 1;
        //contadorDeIntentos++;
        //palabraIntento = "intentos";
        if (contadorDeIntentos > maximosIntentos){
            alert(`LLegaste al número maximo de ${maximosIntentos} intentos, el número era ${numeroSecreto}`);
            break;
        }

    }
}
