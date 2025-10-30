import SuperHeroRepository from "../repositories/SuperHeroRepository.mjs";

//  Devuelve todos los superhéroes
export async function obtenerTodosLosSuperheroes() {
    console.log(`[SERV] Se obtuvieron todos los superheroes con exito `)
    return await SuperHeroRepository.obtenerTodos();
}
//Crea e inserta un superheroe
export async function crearSuperheroe(superheroeData) {
    
    if (!superheroeData.nombreSuperHeroe) {
        console.log(`[SERV] El superheroe necesita un nombre `)
        throw new Error("El superhéroe necesita un nombre");
        
    }
    console.log(`[SERV] El super heroes se creo con exito`)

    return await SuperHeroRepository.crearInsertarSuperheroe(superheroeData);
    
}
//Actualiza el superheroe por ID
export async function actualizarSuperheroe(id, datosActualizados) {
    console.log (`[SERV]  `)
    return await SuperHeroRepository.actualizarPorId(id, datosActualizados);
}
//Elimina el superherore por ID
export async function eliminarSuperheroePorId(id){
    return await SuperHeroRepository.eliminarSuperheroePorId(id);
}
//Elimina el superheroe por nombre 

export async function eliminarSuperHeroePorNombre(nombreSuperHeroe){
    return await SuperHeroRepository.eliminarSuperHeroePorNombre(nombreSuperHeroe);
}