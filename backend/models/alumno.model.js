import { Schema, model } from "mongoose"; //Importamos esquemas y modelos

//Creacion de esquemas 
const EsquemaAlumnos = new Schema({
    name: {
        type:String
    },
    apepat:{
        type:String
    }
})

//Creacion de modelo
export const ModeloAlumnos = new model("Tabla de alumnos", EsquemaAlumnos);

//Lo unico en el model es es esquema y el modelo

