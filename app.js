//Mongoose conecta base de datos
//Express crea un servidor local
//Dotenv permite leer variables de .env
//Corse mecanismo de seguridad 

import mongoose from "mongoose";
import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import { test } from "./backend/controller/alumno.controller.js";
dotenv.config();//Traemos la configuracion del .env
//Creamos el .env

//Que guardo en app.js "conexion a bd", "imports", "servidor local"


//Conectamos a bd
mongoose.connect(process.env.urlbd)//despues creamos una promesa
.then(() =>{
    console.log("Todo bien");
})
.catch((error)=>{
    console.log("No jalo", error);
})

const app=express();//Creo el servidor local
app.use(cors());//usamos cors para seguridad
app.listen(4000, ()=>{
    console.log("Se esta escuchando");
})

//crea la carpeta backend
//Crea carpeta controllers (dentro de backend)
//Crea carpeta model (dentro de backend)
//Cada carpeta con un archio llamado respectivamente x.model.js x.controller.js

test();