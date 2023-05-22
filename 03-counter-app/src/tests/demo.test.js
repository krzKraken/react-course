

describe('Pruebas de Demo en <DemoTest>', () => {


    test('should do something', () => {

        //1. Inicializacion
        const message1 = 'hola mundo';

        //2. Estimulo
        const messsage2 = message1.trim();

        //3. Observar el resultado
        // expect(messsage2)
        expect(messsage2).toBe(message1);

    });

    test('Should have not empty strings', () => {
        const message1 = 'hola';
        const mensage2 = message1.trim();
        expect(mensage2).toBe(message1);
    })


})