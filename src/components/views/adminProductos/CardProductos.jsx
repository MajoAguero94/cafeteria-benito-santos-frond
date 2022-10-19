import React from 'react';
import { Col, Card, Button } from 'react-bootstrap';
import Menu from '../../common/Menu';

const CardProductos = () => {
    return (
        <div>
            <Col>
            <Card style={{ width: '18rem' }}>
      <Menu></Menu>
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