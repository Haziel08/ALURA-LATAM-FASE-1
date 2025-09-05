let frutas = [];
let verduras = [];
let lacteos = [];
let congelados = [];
let dulces = [];
let ciclo = true;
let opcion;
while (ciclo) {
  opcion = prompt("¿Qué tipo de producto deseas agregar? (frutas, verduras, lácteos, congelados, dulces), para salir escriba ok");
  if (opcion === "frutas") {
    let fruta = prompt("Ingresa el nombre de la fruta:");
    frutas.push(fruta);
  } else if (opcion === "verduras") {
    let verdura = prompt("Ingresa el nombre de la verdura:");
    verduras.push(verdura);
  } else if (opcion === "lácteos") {
    let lacteo = prompt("Ingresa el nombre del lácteo:");
    lacteos.push(lacteo);
  } else if (opcion === "congelados") {
    let congelado = prompt("Ingresa el nombre del producto congelado:");
    congelados.push(congelado);
  } else if (opcion === "dulces") {
    let dulce = prompt("Ingresa el nombre del dulce:");
    dulces.push(dulce);
  } else if (opcion === "ok") {
    ciclo = false;
  } else {
    alert("Opción no válida");
  }
}

console.log("Lista de compras:");
console.log("Frutas: " + frutas.join(", "));
console.log("Verduras: " + verduras.join(", "));
console.log("Lácteos: " + lacteos.join(", "));
console.log("Congelados: " + congelados.join(", "));
console.log("Dulces: " + dulces.join(", "));