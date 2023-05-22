import { americaCodes } from "../data/country-codes";

//ApiKeyGiphy
const API_KEY = 'codigo-api';

//? Api-format => https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}


const getCode = () => {

    const min = 0;
    const max = americaCodes.length;
    const randomInt = Math.floor(Math.random() *(max - min + 1)) + min;
    // console.log('Min:', min, 'Max: ', max, 'Len: ', max, 'RandomInt:', randomInt, 'Code: ', americaCodes[randomInt-1])
    return americaCodes[randomInt-1]
}
    
//free apikey
const peticion = fetch(`https://restcountries.com/v3.1/alpha/${getCode()}`);

//? Promesas en cadena
peticion
    .then( resp => resp.json())
    .then( (dataJson) => {
        //Desestructuracion de array, [{}]
        const [data] = dataJson; //! -> Primer objeto del array
        const flags = data.flags.png
        console.log(flags);

        const img = document.createElement('img');
        img.src = flags;
        document.body.append(img)
    })
    .catch( (err) => console.warn('Error: ', err))



