import {heroes, owner} from '../data/heroes';

// console.log(heroes);
const getHeroesId = (id) => {
    return heroes.find( (heroe) =>{
        if (heroe.id === id) {
            return true;
        }else {
            return false;
        }
    } );

}

const getHeroById = (id) => {
    return heroes.find( heroes => heroes.id === id, "" )
}

// console.log(getHeroesId(1));
// console.log(getHeroById(4));

// Filter
const getHeroByOwner = (owner) => {
    return heroes.filter((heroes) => heroes.owner === owner);
}

const [mar, dc] = owner;
// console.log(mar, dc);

// console.log(getHeroByOwner("DC"))

//Exports
export {getHeroById}