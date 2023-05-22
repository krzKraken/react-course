// Functions in javascript


//! This is no the best way
function saludar(nombre) {
    return `hola ${nombre}`;
}

console.log(saludar("Goku"))


//* This is how we must do it
const say_hi = function(nombre){
    return `hola ${nombre}`

}

// !! If we try to assign a other const with the same name "say_hi" we have an error

//! say_hi = "hola";

console.log(say_hi("Veguera"));


// Funcion de flecha y lamda
const saludar2 = (nombre) => {
    return `Hola, ${nombre}`;

}

console.log(saludar2("Goku"));


//* Funcion de flecha
const saludar3 = (nombre) => `hola, ${nombre}`;
const saludar4  = () => `Hola mundo`;

console.log(saludar3("Goku"));
console.log(saludar4());

//* funcion de flecha de objetos
const getUser = (name)=>({
    UID : 'ABC123',
    userName: name,
})

console.log(getUser);
console.log(getUser("Pepito"));



