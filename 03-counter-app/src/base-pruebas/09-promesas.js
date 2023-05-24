import { getHeroeById } from "./08-imp-exp";

const getHeroeByIdAsync = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Tarea
            // importen el
            const p1 = getHeroeById(id);
            if (p1) {
                resolve(p1);
                console.log('p1 => ', p1)

            } else {
                reject(`No se pudo encontrar el heroe ${id}`);
            }
        }, 1000);
    });
};


console.log("log desde 09-promesas: -> ", getHeroeByIdAsync(2));

export { getHeroeByIdAsync }