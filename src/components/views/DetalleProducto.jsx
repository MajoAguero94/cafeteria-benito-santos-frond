import React from 'react';
import {Card, Badge} from 'react-bootstrap'

import {  useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { consultarApi } from '../herlpers/queries';
import ItemProducto from './adminProductos/ItemProducto';


const DetalleProducto = ({producto}) => {
 
  
    return (

        <Card style={{ width: '18rem' }}>
            <div className='d-flex'>
           
        <Card.Body>
          <Card.Title></Card.Title>
          <hr />
          <Badge bg="success"></Badge>
          <Card.Text>

            $       
               </Card.Text>
          
         
        </Card.Body>
            </div>
      
      </Card>
    );
};

export default DetalleProducto;