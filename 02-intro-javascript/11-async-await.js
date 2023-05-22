// Async and await
import { americaCodes } from "../data/country-codes";

const getCode = () => {
    const min = 0;
    const max = americaCodes.length;
    const randomInt = Math.floor(Math.random() * (max-min-1)-min);
    return americaCodes[randomInt-1]
}

const getFlag = async() => {
    
    try {
        
        const resp = await fetch(`https://restcountries.com/v3.1/alpha/${getCode()}`)
        const [data] = await resp.json()
        const imgURL = data.flags.png; 
        const img = document.createElement("img");
        img.src = imgURL;
        document.body.append(img)
        
    } catch (error) {
          console.warn(error);
    }
}
getFlag();
