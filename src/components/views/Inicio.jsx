import React from 'react';
import { Row } from 'react-bootstrap';
import CardProductos from './adminProductos/CardProductos';
import { useEffect, useState } from 'react';
import { consultarApi } from '../herlpers/queries';
const Inicio = () => {
    const [productos, setProductos] = useState ([]);

useEffect (()=>{


 consultarApi().then((respuesta)=>{
  //la respuesta es exitosa
  setProductos(respuesta)
 }, (reason) =>{
  console.log(reason);
  //mostrar un msj al usuario
 
  
 }
 );




},[])


    return (
        <div className='container mainSection'>
            <h1>Pagina principal</h1>
            <hr />
            <Row>
                {productos.map((producto)=><CardProductos  key={producto.id} producto={producto} ></CardProductos>)}
            </Row>
        </div>
    );
};

export default Inicio;