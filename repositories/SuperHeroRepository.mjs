import superHero from "../models/SuperHero.mjs";
import IRepository from "./IRepository.mjs";

class SuperHeroRepository extends IRepository {
    
    async obtenerTodos() {
        try{ 
        console.log(`[REPO] Se obtuvieron todos los superheroes `)
        return await superHero.find({});
        }
        catch (error){
            console.log(`[REPO] No se encontraron los superheroes `)
            throw error;
        }
        
    }

    async crearInsertarSuperheroe(nuevoHeroe) {
        try {
            const heroeCreado = await superHero.create(nuevoHeroe);
            console.log(`[REPO] Superheroe creado e insertado con exito `)
            return heroeCreado;
        } catch (error) {
            console.error("[REPO] Error al crear el superhéroe:", error);
            throw error;
        }
    }

    async actualizarPorId(id, datosActualizados) {
        try {
            
            const heroeActualizado = await superHero.findByIdAndUpdate(id, datosActualizados, { new: true });
            console.log(`[REPO] Superheroe actualizado con exito `)
            return heroeActualizado;
        } catch (error) {
            console.error(" [REPO] Error al actualizar el superhéroe:", error);
            throw error;
        }
    }

    async eliminarSuperheroePorId(id){
        try{
            const heroeEliminado = await superHero.findByIdAndDelete(id);
            console.log(`[REPO] Superheroe eliminado por ID con exito `)
            return heroeEliminado;
            
        } catch(error){
            console.error("[REPO] Error al eliminar el superheroe por ID", error);
            throw error;
        }
    }

    async eliminarSuperHeroePorNombre(nombreSuperHeroe){
        try{
            const heroeEliminado = await superHero.findOneAndDelete({nombreSuperHeroe: nombreSuperHeroe});
            console.log(`[REPO] Superheroe eliminado por nombre con exito`)
            return heroeEliminado;
            
        } catch(error){
            console.error("[REPO] Error al eliminar superheroe por nombre", error);
            throw error;
        }
    }

}

export default new SuperHeroRepository();
