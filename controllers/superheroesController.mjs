import {obtenerTodosLosSuperheroes,crearSuperheroe,actualizarSuperheroe,eliminarSuperheroePorId,eliminarSuperHeroePorNombre} from '../services/superheroesService.mjs';
import {renderizarSuperheroe , renderizarListaSuperheroes} from '../views/responsiveView.mjs'

// Funcion que devuelve todos los superhéroes
export async function obtenerTodosLosSuperheroesController(req, res) {
    try {
        const superheroes = await obtenerTodosLosSuperheroes();

        const superheroesFormateados = renderizarListaSuperheroes(superheroes)

        res.status(200).json(superheroesFormateados);
    } catch (error) {
        res.status(500).json({ mensaje: "Error al obtener los superhéroes", error: error.message });
    }
}

export async function crearSuperheroeController(req, res) {
    try {
        const nuevoHeroe = await crearSuperheroe(req.body);
        const heroeFormateado = renderizarSuperheroe(nuevoHeroe);
        res.status(201).json(heroeFormateado);
    } catch (error) {
        res.status(500).json({ mensaje: "Error al crear el superhéroe", error: error.message });
    }
}

export async function actualizarSuperheroeController(req, res) {
    try {
        const { id } = req.params;
        const datosActualizados = req.body;

        const heroeActualizado = await actualizarSuperheroe(id, datosActualizados);

        if (!heroeActualizado) {
            return res.status(404).json({ mensaje: "Superhéroe no encontrado" });
        }

        const heroeFormateado = renderizarSuperheroe(heroeActualizado);
        res.status(200).json(heroeFormateado);
    } catch (error) {
        res.status(500).json({ mensaje: "Error al actualizar el superhéroe", error: error.message });
    }
}

export async function eliminarSuperheroePorIdController(req, res) {
    try {
        const { id } = req.params;

        const heroeEliminado = await eliminarSuperheroePorId(id);

        if (!heroeEliminado) {
            return res.status(404).json({ mensaje: "Superhéroe no encontrado" });
        }

        const heroeFormateado = renderizarSuperheroe(heroeEliminado);
        res.status(200).json(heroeFormateado);
    } catch (error) {
        res.status(500).json({ mensaje: "Error al eliminar el superhéroe", error: error.message });
    }
}

export async function eliminarSuperHeroePorNombreController(req, res){
    try{
        const {nombreSuperHeroe} = req.params;

        const heroeEliminado = await eliminarSuperHeroePorNombre(nombreSuperHeroe);

        if (!heroeEliminado){
            return res.status(404).json ({mensaje: "Superheroe no encontrado"});
        }
        const heroeFormateado = renderizarSuperheroe(heroeEliminado);
        res.status(200).json(heroeFormateado);
    } catch (error){
        res.status(500).json({mensaje: "Error al eliminar el superheroe", error:error.message});
    }
}