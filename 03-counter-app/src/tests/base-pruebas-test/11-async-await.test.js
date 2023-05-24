

import { getImagen } from '../../base-pruebas/11-async-await'


describe('Testing async-await function', () => {

    test('Should return a url de la imagen', async () => {
        const url = await getImagen();
        console.log(url);
        expect(typeof url).toBe('string');

    })



})