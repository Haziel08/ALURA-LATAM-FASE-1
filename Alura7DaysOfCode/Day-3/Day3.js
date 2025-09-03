let area=  prompt("¿Front-End o Back-End?");
let tecnologia = "";
if(area === "Front-End"){
    console.log("¡Excelente elección! El Front-End es fundamental para la experiencia del usuario.");
    tecnologia = prompt("¿Prefieres aprender React o Vue?");
    if(tecnologia === "React"){
        console.log("¡Genial! React es una biblioteca muy popular.");
    } else if(tecnologia === "Vue"){
        console.log("¡Excelente! Vue es conocido por su simplicidad.");
    }

}else{
    console.log("¡Buena elección! El Back-End es crucial para la lógica y la base de datos.");
    tecnologia = prompt("¿Prefieres aprender C# o Java?");
    if(tecnologia === "C#"){
        console.log("¡Genial! C# es muy utilizado en el desarrollo de aplicaciones empresariales.");
    } else if(tecnologia === "Java"){
        console.log("¡Excelente! Java es conocido por su portabilidad y robustez.");
    }
}

let especializacion = prompt("¿Te gustaría especializarte en " + tecnologia + " o prefieres convertirte en Full-Stack?");
if(especializacion === tecnologia){
    console.log("¡Perfecto! Te especializarás en " + tecnologia + ".");
} else {
    console.log("¡Genial! Te convertirás en un desarrollador Full-Stack.");
}
especializacion = "";
let indice = 0;
while(indice == 0){
    especializacion = prompt("¿Hay alguna otra tecnología que te gustaría aprender? (Escribe 'ok' para terminar)");
    if(especializacion === "ok"){
        indice = 1;
    } else {
        console.log("¡Genial! Aprenderás " + especializacion + ".");
    }
}
