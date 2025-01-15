import { retornaArreglo } from "../../base-pruebas/07-deses-arr"

describe("PRUEBA NUMERO 7", ()=>{
    test("debeb retornar un estring y un numero:",()=>{
        const [letras,numeros] = retornaArreglo()
        expect(letras).toBe('ABC')
        expect(numeros).toBe(123)

        expect(typeof letras).toBe('string')
        expect(typeof numeros).toBe('number')

        expect(letras).toEqual(expect.any(String))
    })
})