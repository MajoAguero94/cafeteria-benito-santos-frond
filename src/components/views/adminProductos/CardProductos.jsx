import React from 'react';
import { Col, Card} from 'react-bootstrap';
import { Link } from 'react-router-dom';


const CardProductos = ({producto}) => {
 
    return (
        
            <Col>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={producto.imagen}/>
      <Card.Body>
        <Card.Title>{producto.nombreProducto}</Card.Title>
        <Card.Text>
          ${producto.precio}
        </Card.Text>
        <hr/>
        <Link className="btn btn-warning" to="/DetalleProducto" >Ver más</Link>
      </Card.Body>
   
            </Card>
            </Col>
        
    );
};

export default CardProductos;