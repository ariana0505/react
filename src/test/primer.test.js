//TITULO
describe('PRUEBAS EN <SECONDCOMPONENT/>', ()=>{
    test('esta es mi segunda prueba', () => {
        //1. Inicializacion
        const mensaje1 = 'Hola mundo';
        //2. estimulo
        const mensaje2 = mensaje1.trim();//elimina los espacios en blanco al final y al inicio del texto
        //3. Observar el comportamiento... esperado
        expect(mensaje1).toBe(mensaje2);
    })
})