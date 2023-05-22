const { getHeroeById, getHeroesByOwner } = require("../../src/base-pruebas/08-imp-exp");


describe('testing 08-imp-exp', () => {
    test('should return an heroe by Id and a list of heroes by owner', () => {
        const id = 1;
        const hero = getHeroeById(id);
        console.log(hero);
        expect(hero).toEqual({ id: 1, name: 'Batman', owner: 'DC' });
    });
    test('should Return false if the heroe doesnt exists', () => {
        const id = 100;
        const hero = getHeroeById(id);
        expect(hero).toBeFalsy();
    })

    test('should return a list of tree DC heroes and a list of two Marvel', () => {
        const ownerDC = 'DC';
        const heroes = getHeroesByOwner(ownerDC);
        expect(heroes.length).toBe(3);
        for (const heroe of heroes) {
            expect(heroe.owner).toBe('DC')
        }
        console.table(heroes);
    });

    test('should return a list of two heroes from Marvel', () => {
        const owner = "Marvel";
        const heroes = getHeroesByOwner(owner);
        console.table(heroes);
        expect(heroes.length).toBe(2);
        for (const hero of heroes) {
            expect(hero.owner).toBe("Marvel")
        }
    })

})