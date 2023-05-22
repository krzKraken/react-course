import { getUser, getUsuarioActivo } from "../../base-pruebas/05-funciones";


describe('Testing 05-funciones', () => {

    test('This function must return a object', () => {
        const TestUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };
        const user = getUser();
        console.table(user
        );
        //! .toBe is not correct for object you must use .toEqual or .strictEqual
        // expect(TestUser).toBe(user); //! Not correct
        //* Use .toEqual or .strictEqual
        // expect(TestUser).toStrictEqual(user); //* Correct
        expect(TestUser).toEqual(user);

    });

    test('This function should retrn a object with a name', () => {
        const newUser = {
            uid: 'ABC567',
            username: 'Cris'
        };

        const nombre = "Cris";
        const user = getUsuarioActivo(nombre);
        console.table(user);

        expect(newUser).toEqual(user);


    })




})