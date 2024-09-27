import { ModeloAlumnos } from "../models/alumno.model.js"; //Importamos el modelo y le agregamos el js

ModeloAlumnos.create({
    name: "Jorge",
    apepat: "Montantes"
})

//genero constante de prueba
export const test= ()=>{
    console.log("Funciona el controlador");
    
}