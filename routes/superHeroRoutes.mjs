import express from "express";
import { obtenerTodosLosSuperheroesController, crearSuperheroeController,actualizarSuperheroeController,eliminarSuperheroePorIdController,eliminarSuperHeroePorNombreController} from "../controllers/superheroesController.mjs";


const router = express.Router();

//Endpoint GET para obtener todos los superheroes
router.get('/heroes', obtenerTodosLosSuperheroesController);

// Endpoint POST para crear un superhéroe
router.post("/superheroes", crearSuperheroeController);

//Endpoint PUT para actualizar un superheroe
router.put("/superheroes/:id", actualizarSuperheroeController);

//Endpoint DELETE para borrar superheroe por ID 
router.delete("/superheroes/:id", eliminarSuperheroePorIdController);

// Endpoint DELETE para borrar superheroe por nombre
router.delete("/superheroes/nombre/:nombreSuperHeroe",eliminarSuperHeroePorNombreController);

export default router;

