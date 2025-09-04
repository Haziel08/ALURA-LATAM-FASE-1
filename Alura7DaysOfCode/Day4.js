let numeroAAdivinar = Math.floor(Math.random() * 10) + 1;
let intentos = 3;

while (intentos > 0) {
    let intento = parseInt(prompt("Adivina el número entre 1 y 10. Te quedan " + intentos + " intentos:"));
    if (intento === numeroAAdivinar) {
        console.log("¡Felicidades! Has adivinado el número.");
        break;
    }else{
        if(intentos == 2){
            console.log("No es correcto. Te dare 2 intentos más.");
        }
        intentos--;
        if(intentos == 0){
            console.log("Lo siento, has agotado tus intentos. El número era " + numeroAAdivinar + ".");
        }
    }
}