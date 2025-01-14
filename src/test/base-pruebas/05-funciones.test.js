import { getUser} from "../../base-pruebas/05-funciones.mjs";

describe("Pruebas en 05-funciones", ()=>{
    test("getUser debe de retornar un objeto", () => {
        const testUser = {
          uid: 'ABC123',  
          username: 'El_Papi1502'
        };
      
        const user = getUser();
      //sirve para igualar objetos
        expect(user).toEqual(testUser);
      });
      
})
