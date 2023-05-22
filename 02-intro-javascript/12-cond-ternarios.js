//operador condicional ternario - ternario

const activo = true;

// let mensaje = '';

// if (!activo) {
//     mensaje = 'Activo'
// }else{
//     mensaje = 'Inactivo'
// }

//? const variable = (condicion) ? (valor si true) : (valor si false)
const mensaje = (activo ==true) ? 'Activo' : 'Inativo'

// Condicion si solo queremos validar si es true
const mensaje2 = (activo===!true) && 'Activo' //? -> False si !activo

console.log(mensaje);
console.log(mensaje2);