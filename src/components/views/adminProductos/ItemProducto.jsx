import React from 'react';
import {Button} from 'react-bootstrap'

const ItemProducto = () => {
    return (
        <tr>
        <td>1</td>
        <td>Coffe</td>
        <td>$250</td>
        <td>https://images.pexels.com/photos/11942622/pexels-photo-11942622.jpeg?auto=compress&cs=tinysrgb&w=600</td>
        <td>Infusión</td>
       
       
        <td className='d-grid'>
           
            <Button>Editar</Button>
            <Button>Borrar</Button>
           
           
            
        </td>
      </tr>
    );
};

export default ItemProducto;