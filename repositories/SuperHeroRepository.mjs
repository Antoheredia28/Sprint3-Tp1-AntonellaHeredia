import superHero from "../models/SuperHero.mjs";
import IRepository from "./IRepository.mjs";

class SuperHeroRepository extends IRepository {
    
    async obtenerTodos() {
        return await superHero.find({});
    }

    async crearInsertarSuperheroe(nuevoHeroe) {
        try {
            const heroeCreado = await superHero.create(nuevoHeroe);
            return heroeCreado;
        } catch (error) {
            console.error("Error al crear el superhéroe:", error);
            throw error;
        }
    }

    async actualizarPorId(id, datosActualizados) {
        try {
            
            const heroeActualizado = await superHero.findByIdAndUpdate(id, datosActualizados, { new: true });
            return heroeActualizado;
        } catch (error) {
            console.error("Error al actualizar el superhéroe:", error);
            throw error;
        }
    }

    async eliminarSuperheroePorId(id){
        try{
            const heroeEliminado = await superHero.findByIdAndDelete(id);
            return heroeEliminado;
        } catch(error){
            console.error("Error al eliminar el superheroe", error);
            throw error;
        }
    }

    async eliminarSuperHeroePorNombre(nombreSuperHeroe){
        try{
            const heroeEliminado = await superHero.findOneAndDelete({nombreSuperHeroe: nombreSuperHeroe});
            return heroeEliminado;
        } catch(error){
            console.error("Error al eliminar superheroe por nombre", error);
            throw error;
        }
    }




}

export default new SuperHeroRepository();
