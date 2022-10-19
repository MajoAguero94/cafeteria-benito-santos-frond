import React from 'react';
import { Col, Card, Button } from 'react-bootstrap';


const CardProductos = () => {
    return (
        <div>
            <Col>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://images.pexels.com/photos/11942622/pexels-photo-11942622.jpeg?auto=compress&cs=tinysrgb&w=600" />
      <Card.Body>
        <Card.Title>Coffe</Card.Title>
        <Card.Text>
          $250
        </Card.Text>
        <hr/>
        <Button variant="danger">Ver más</Button>
      </Card.Body>
   
            </Card>
            </Col>
        </div>
    );
};

export default CardProductos;