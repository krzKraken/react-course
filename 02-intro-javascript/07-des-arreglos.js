const personajes = ["Goku", "Vegueta", "trunks"]

const [p1,,p3] = personajes;

console.log(p1,p3);
console.log("hola")


const retornaRoles = () => {
    return ["Admin", "User", "None", () => console.log("Una funcion")];
}

const [administrador, usuario, ninguno] = retornaRoles();
const [,,,funcionLog] = retornaRoles();

console.log(administrador, usuario, ninguno);
funcionLog();

