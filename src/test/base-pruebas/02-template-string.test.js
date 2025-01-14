import {getSaludo} from '../../base-pruebas/02-template-string';
describe("Prueba del archivo 2", ()=>{
    test("Get saludo debe retornar 'Hola ariana'", ()=>{
        const name = "Ariana";
        const message = getSaludo(name);

        expect(message).toBe(`Hola ${name}`);
    });
});