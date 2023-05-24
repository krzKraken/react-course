// Testing 09-promesas.js


import { getHeroeByIdAsync } from '../../base-pruebas/09-promesas'

describe('Testing 09-promesas', () => {

    test('getHeroeByIdAsync This should return an object after 1 sec', (done) => {
        const id = 2;
        getHeroeByIdAsync(id)
            .then(hero => {
                expect(hero).toEqual({
                    id: 2, name: 'Spiderman', owner: 'Marvel'
                })
                done();
            })
            .catch(err => {
                expect(err).toBe("No se pudo encontrar el héroe");
                done();

            })

    });
    test('getHeroeByIdAsync This should return an error when the hero does not exist', (done) => {
        const id = 100;
        getHeroeByIdAsync(id)
            .then(hero => {
                expect(hero).toBeFalsy();
                done();
            })
            .catch(err => {
                expect(err).toBe(`No se pudo encontrar el heroe ${id}`);
                done();

            })

    });

})