import { getHeroById } from "./basesjs/08-import-export";

// Promesas

// Promesa es sincrono
/**
 const promesa = new Promise( (resolve, reject) => {
     
} )
 *  */ 
/* 
const promesa = new Promise((resolve, reject) => {
    setTimeout( () => {
        const hero = getHeroById(10);
        // console.log(hero)
        if (hero != null) {
            resolve(hero); //-> envia hero al then
        }else{
            reject("No existe el heroe"); // -> En caso de error
        } 
        // resolve(hero) //-> Envia al then el objeto, requiere el resolve para confirmar que se ejecuto correctamente

    }, 2000);

});

//promesa.catch( callback ) -> En caso de ejecutar el reject (error)
//promesa.then( callback ) -> En caso de terminar de ejecutar la promesa correctamente
//promesa.finally( callback) -> Se ejecuta despues del catch o el then

promesa.then( (hero) => {
    console.log("Hero encontrado! : ", hero)
}).catch( (err) => console.warn(err) )
*/


// function retorna una promesa
const getHeroByIdAsync = (id) => {
    return new Promise( (resolve, reject) =>{
        setTimeout( () =>{
            const hero = getHeroById(id);
            if (hero){
                resolve(hero);
            } else {
                reject("Error, Hero not found!!")
            }
        },2000);
    });
}
//! Esto se usaba antes
getHeroByIdAsync(3).then( (hero) => {
    console.log("200 code");
    console.log(hero);
} ).catch( (err) => console.log(err))

//* Esto se usa ahora
//? En el them o el catch se puede obviar el llamado al callback y el siempre asumira como parametro el primer argumento devuelto del resolve o reject 
getHeroByIdAsync(3)
    .then( console.log )
    .catch( console.warn );