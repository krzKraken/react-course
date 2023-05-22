
// Template Strings

const nombre = "Cristhian";
const apellido = "Miranda";

// Concatenacion de cadenas
let nombreCompleto = nombre + " " + apellido

console.log(nombreCompleto);


function getSaludo(nombre){
    return `Funcion saludando a ${nombre}`;
}
// Uso de Template strings
nombreCompleto = ` Mi nombre es: ${nombre} ${apellido} ${2 + 2} ${getSaludo("Joss")}`;

console.log(nombreCompleto);



