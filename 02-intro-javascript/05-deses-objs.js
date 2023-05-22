// deserialization in JavaScript

const person = {
    userName: "Jhon",
    age : 89,
    clave: "Ironman",
}

console.log(person.userName);
console.log(person.age);
console.log(person.clave);


console.log("Desestructuracion");
// Deserialization
//? extract the data from the object
const {userName : nombre, age  : edad, clave : claves} = person

console.log(nombre, edad, claves);


//Desestructuration function
console.log("Desestruracion 2");
const {userName, age, clave} = person
console.log(person);

//* Desestructuracion functions
//? Una funcion que desestrutura el objeto y los devuelve o maneja
const retornaPersona = ({userName, age, clave, otraVariable = 'ValorPorDefecto'}) => {
    return {
        username : userName,
        otraVariable : otraVariable,
        latlng : {
            lat : 10.091,
            lng : 20.091,
        }
    };

}
console.log("Desestructuracion de una funcion");

const {username, otraVariable, latlng} = retornaPersona(person);
console.log(username, otraVariable, latlng);
// Desestructuracion de otro objeto 
const {lat, lng} = latlng;

//* Desestructuracion anidada
const {username:userName1, otraVariable: otraVariable1, latlng:{lat:lat1, lng:lng1}} = retornaPersona(person);
console.log(userName1, otraVariable1, lat1, lng1);

