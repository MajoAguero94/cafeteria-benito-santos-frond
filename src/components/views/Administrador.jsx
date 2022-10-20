import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';
import ItemProducto from './adminProductos/ItemProducto';

import {consultarApi} from '../herlpers/queries';


const Administrador = () => {
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

 // consultarApi();
    return (
        <div className='container mainSection'>
            <div className='d-flex justify-content-between'>
            <h1 className='display-5'>Productos Disponibles</h1>
            <div className='mt-4'>

            <Button>Agregar</Button>
            </div>

            </div>
            <hr />
            <Table striped bordered hover>
      <thead>
        <tr>
          <th>Cod</th>
          <th>Producto</th>
          <th>Precio</th>
          <th>URL imagen</th>
          <th>Categoria</th>
          <th>Opciones</th>
        </tr>
      </thead>
      <tbody>
       <ItemProducto></ItemProducto>
      
      </tbody>
    </Table>
        </div>
    );
};

export default Administrador;