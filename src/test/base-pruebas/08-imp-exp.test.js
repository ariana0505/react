import { getHeroeById, getHeroesByOwner } from "../../base-pruebas/08-imp-exp";

describe("PRUEBA 8",()=>{
    test("GetHeroeNyId debhe retornar un heroe por ID",() => {
        
        const id = 1;
        const hero = getHeroeById(id);
        expect(hero).toEqual({id: 1, name: 'Batman', owner: 'DC'});
    })

    test("getHeroeById debe de retornar undefined si no existe", ()=>{
        
        const id = 100;
        const hero = getHeroeById(id)

        expect( hero ).toBe(undefined)
    })
    test("heroes Dc", () => {
        const owner= "DC"
        const Heroes = getHeroesByOwner(owner)
        expect(Heroes.length).toBe(3);
        console.log(Heroes)
        expect(Heroes).toEqual([
        {id: 1,name: 'Batman',owner: 'DC'},
        {id: 3,name: 'Superman',owner: 'DC'},
        {id: 4,name: 'Flash',owner: 'DC'}
        ])
    })
})