import { heroes, owner } from './data/heroes'


export const getHeroeById = (id) => heroes.find((heroe) => heroe.id === id);

export const getHeroesByOwner = (owner) => heroes.filter((heroe) => heroe.owner === owner);


console.log("Hero desde hero.find", getHeroeById(2));