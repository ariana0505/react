import { getImagen } from '../../base-pruebas/11-async-await'

describe('Pruebab 11', ()=> {
    test('debe retornar un URL de la imagen', async ()=> {
        const url = await getImagen();
        expect(typeof url).toBe('string')
    })
})