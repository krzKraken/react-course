// Testing 09-promesas.js


import { getHeroeByIdAsync } from '../../base-pruebas/09-promesas'

describe('Testing 09-promesas', () => {

    test('getHeroeByIdAsync This should return an object after 1 sec', (done) => {
        const id = 1;
        getHeroeByIdAsync(id)
            .then(hero => {
                expect(hero).toBeFalsy();
                done();
            })
            .cath(err => {
                expect(err).toBe("No se pudo encontrar el héroe");
                done();

            })

    })

})