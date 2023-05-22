import { getSaludo } from '../../src/base-pruebas/02-template-string'

describe('Pruebas en GetSaludo 02-template-string', () => {

    test('Debe devolver "Hola Cris"', () => {
        const name = "Cris";
        const saludo = getSaludo(name);
        expect(saludo).toBe('Hola Cris')
    })

})