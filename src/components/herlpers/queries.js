import { Await } from "react-router-dom";

const URL= process.env.REACT_APP_API_CAFE;
export const consultarApi = async ()=> { 
    //console.log (URL)
    try {
        //peticion GET para obtener el nombre de todos los productos
        const respuesta= await fetch(URL)
        const listaProductos = await respuesta.json()
        return listaProductos;
        
    } catch (error) {
        
        console.log (error)
        
    }





}



