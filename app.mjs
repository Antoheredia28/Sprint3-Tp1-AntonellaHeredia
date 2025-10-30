import express from "express";
import {connectDB} from "./config/dbConfig.mjs";
import superHeroRoutes from './routes/superHeroRoutes.mjs';
//import morgan from 'morgan';


const app = express();
const PORT = process.env.PORT || 3000;


//Middleware para parsear JSON 

app.use(express.json());

//Midlleware para 

//app.use(morgan('dev'));

//Conexion a Mongo DB

connectDB();

// Configuracion de rutas
app.use('/api', superHeroRoutes);

//Manejo de errores para rutas no encontradas
app.use((req, res)=>{
    res.status(404).send ({mensaje:"Ruta no encontrada"});
});

//Iniciar servidor

app.listen(PORT, () =>{
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});



