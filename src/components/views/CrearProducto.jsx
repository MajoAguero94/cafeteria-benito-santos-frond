import React from 'react';
import { Form, Button, FormSelect } from 'react-bootstrap';
import {useForm} from "react-hook-form";

const CrearProducto = () => {
    return (
        <div className='container'>
            <h1>Nuevo Producto</h1> 
            <hr />
            <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Nombre Producto*</Form.Label>
        <Form.Control type="text" placeholder="Ej: Coffe" />
        <Form.Text className="text-danger">
         Algun error.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Precio*</Form.Label>
        <Form.Control type="text" placeholder="Ej: 50" />
        <Form.Text className="text-danger">
         Algun error.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Imagen URL*</Form.Label>
        <Form.Control type="text" placeholder="Ej: https://images.pexels.com/photos/11942622/pexels-photo-11942622.jpeg?auto=compress&cs=tinysrgb&w=600" />
        <Form.Text className="text-danger">
         Algun error.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Categoria*</Form.Label>
        <FormSelect>
            <option></option>
            <option>Infusión</option>
            <option>Dulce</option>
        </FormSelect>
        <Form.Text className="text-danger">
         Algun error.
        </Form.Text>
      </Form.Group>

      
      <Button variant="primary" type="submit">
        Guardar
      </Button>
    </Form>
        </div>
    );
};

export default CrearProducto;