import { getHeroeById, getHeroesByOwner } from "../../base-pruebas/08-imp-exp";
import heroes from "../../base-pruebas/data/heroes";

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
        owner= "DC"
        const Heroes = getHeroesByOwner(owner)
        expect(heroes.length).toBe(3);

        expect(heroes).toEqual([
        {id: 3,name: 'Superman',owner: 'DC'},
        {id: 1,name: 'Batman',owner: 'DC'},
        {id: 4,name: 'Flash',owner: 'DC'}
        ])
    })
})