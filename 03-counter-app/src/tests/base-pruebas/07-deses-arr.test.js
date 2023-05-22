import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr";

describe('Testing 07-deses-arr.js', () => {
    test('should return an array with string and numbers types', () => {
        const [letters, numbers] = retornaArreglo();

        //? Debe retornar un String, cualquiera.
        expect(letters).toStrictEqual(expect.any(String));

        //? Using javascript functions, debe retornar un numero cualquiera
        expect(typeof numbers).toBe('number');

    })
})