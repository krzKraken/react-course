import { usContext } from '../../base-pruebas/06-deses-obj';



describe('Testing 06-deses-obj', () => {
    test('should return a object with a name', () => {
        const keyName = 'clave';
        const anos = 10;

        const obj = usContext({ clave: keyName, edad: anos });
        console.table(obj);
        expect(obj).toEqual({
            nombreClave: keyName,
            anios: anos,
            latlng: {
                lat: 14.1232,
                lng: -12.3232
            }
        })

    })
})