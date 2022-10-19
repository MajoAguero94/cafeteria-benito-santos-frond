import React from 'react';
import { Row } from 'react-bootstrap';
import CardProductos from './adminProductos/CardProductos';

const Inicio = () => {
    return (
        <div className='container'>
            <h1>Pagina principal</h1>
            <hr />
            <Row>
                <CardProductos></CardProductos>
            </Row>
        </div>
    );
};

export default Inicio;