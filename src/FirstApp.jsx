//DATO -> ASYNC lo cuenta como un objeto Promises
const nombre = 'Ariana';

const getSaludo = () => {
    return `Hola ${nombre}`
};

// const newMessage = {
//     message: 'Hola mundo',
//     title: 'Fernando'
// }

//no permite pasar una variable tipo objeto
export const Nombre = () => {
    return(
        <> 
            <h3>{getSaludo()}</h3>
            {/* <code>{JSON.stringify(newMessage)}</code> */}
            <p>subtitulo</p>
            
        </>
    )
}