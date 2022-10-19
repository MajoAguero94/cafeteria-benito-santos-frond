import React from 'react';
import {Card, Badge} from 'react-bootstrap'
import Menu from '../common/Menu';

const DetalleProducto = () => {
    return (

        <Card style={{ width: '18rem' }}>
            <div className='d-flex'>
            <Menu></Menu>
        <Card.Body>
          <Card.Title>Coffe</Card.Title>
          <hr />
          <Badge bg="success">Infusión</Badge>
          <Card.Text>

            $250
          </Card.Text>
          
          
        </Card.Body>
            </div>
      
      </Card>
    );
};

export default DetalleProducto;