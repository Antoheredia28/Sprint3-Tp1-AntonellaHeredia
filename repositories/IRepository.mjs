class IRepository {
    obtenerTodos() {
        throw new Error("Método 'obtenerTodos()' no implementado");
    }

    crearInsertarSuperheroe(){
        throw new Error("Metodo'crearinsertar' no implementado");
    }

    actualizarSuperheroe(){
        throw new Error ("Metodo 'actualizar' no implementado");
    }

    eliminarSuperheroePorId(){
        throw new Error("Metodo'eliminar por id' no implementado");
    }

    eliminarSuperHeroePorNombre(){
        throw new Error ("Metodo 'eliminar por nombre' no implementado");
    }

}
export default IRepository;
