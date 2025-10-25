import SuperHeroRepository from "../repositories/SuperHeroRepository.mjs";

//  Devuelve todos los superhéroes
export async function obtenerTodosLosSuperheroes() {
    return await SuperHeroRepository.obtenerTodos();
}
//Crea e inserta un superheroe
export async function crearSuperheroe(superheroeData) {
    
    if (!superheroeData.nombreSuperHeroe) {
        throw new Error("El superhéroe necesita un nombre");
    }
    return await SuperHeroRepository.crearInsertarSuperheroe(superheroeData);
}
//Actualiza el superheroe por ID
export async function actualizarSuperheroe(id, datosActualizados) {
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