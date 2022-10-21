import { Await } from "react-router-dom";

const URL= process.env.REACT_APP_API_CAFE;
//peticion GET para obtener el nombre de todos los productos
//peticion POST, le pedimos a la API crear un nuevo producto(generalmente en formato JSON), tambien se usa en el login
//petison PUT cuando queremos modificaar un producto
//peticionDELETE para borrar
export const consultarApi = async ()=> { 
    //console.log (URL)
    try {
        const respuesta= await fetch(URL)
        const listaProductos = await respuesta.json()
        return listaProductos;
        
    } catch (error) {
        
        console.log (error)
        
    }





}
export const crearProductoAPI = async (producto)=> { 
    //console.log (URL)
    try {
        const respuesta= await fetch(URL,{
            method: "POST", //tipo de metodos opeticion
            headers:{
                "Content-Type": "application/json"
            },//encabezados
            body: JSON.stringify(producto)//al producto se lo enviamos en l body
        }); //HASTA HAGO LA PETICION
       
        return respuesta;//AQUI ESPERO LA RESPUESTA
        
    } catch (error) {
        
        console.log (error)
        
    }//AQUI ESPERO SI HAY ALGUN ERROR





}


