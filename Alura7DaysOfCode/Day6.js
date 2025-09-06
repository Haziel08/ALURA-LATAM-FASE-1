let lista = ["manzana", "pera", "banana", "durazno", "uva", "kiwi", "naranja", "mandarina", "limón", "pomelo"];
let opcion = prompt("Desea eliminar un elemento de la lista? (si/no)");
while (opcion === "si" && lista.length > 0) {
    console.log("Lista actual: " + lista.join(", "));
    let elemento = prompt("Ingrese el nombre del elemento a eliminar:");
    let index = lista.indexOf(elemento);
    // Si el elemento existe en la lista, eliminarlo
    if (index !== -1) {
        // Eliminar el elemento de la lista segun el indice encontrado
        lista.splice(index, 1);
        console.log("Elemento eliminado.");
    } else {
        console.log("Elemento no encontrado.");
    }
    opcion = prompt("Desea eliminar otro elemento de la lista? (si/no)");
}