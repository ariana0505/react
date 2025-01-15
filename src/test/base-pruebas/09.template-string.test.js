import { getHeroeByIdAsync } from "../../base-pruebas/09-promesas";


describe("Prueba 09", ()=> {
    test("getHeroeByAync debe retornar un heroe",(done)=>{

        const id = 1;
        getHeroeByIdAsync(id)
            .then(hero=>{
                expect(hero).toEqual({
                    id: 1,
                    name: 'Batman',
                    owner: 'DC'   
                })
                //ESPERA HASTA QUE TERMINE
                done()
            })
        
    });

    test("getHeroeByAync debe retornar un error si heroe no existe",(done)=>{

        const id = 100;
        getHeroeByIdAsync(id)
            .catch(erro=>{
                expect(erro).toEqual("No se pudo encontrar el héroe")
                //ESPERA HASTA QUE TERMINE
                done()
            })
        
    });
});

