import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { useForm } from "react-hook-form";

const Registrarse = () => {
    const {
        register,
       
        formState: { errors },
      } = useForm();
    return (
        <div className='d-flex justify-content-center mainSection my-5'>
            <Form className='login'>
                <h1 className='text-center mb-4'>Registrarse</h1>
                <hr />
      <Form.Group className="mb-3 mt-3" controlId="formBasicText">
        <Form.Label>Ingrese Nombre</Form.Label>
        <Form.Control type="text"
         placeholder="Nombre"
         minLength={2}
         maxLength={100}
         {...register("nombreUsuario", {
          required: "El nombre es obligatorio",
          minLength: {
            value: 2,
            message: "La cantidad de caracteres como minimo es de 2"
          },
          maxLength:{
            value:100,
            message:"La cantidad maxima de caracteres es de 100"
          }
        })} />
        <Form.Text className="text-danger">
            {errors.nombreUsuario?.message}
          </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Ingrese Apellido</Form.Label>
        <Form.Control type="text"
         placeholder="Apellido"
         minLength={2}
         maxLength={100}
         {...register("apellidoUsuario", {
          required: "El Apellido es obligatorio",
          minLength: {
            value: 2,
            message: "La cantidad de caracteres como minimo es de 2"
          },
          maxLength:{
            value:100,
            message:"La cantidad maxima de caracteres es de 100"
          }
        })} />
        <Form.Text className="text-danger">
            {errors.apellidoUsuario?.message}
          </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Ingrese Email</Form.Label>
        <Form.Control type="email"
         placeholder="Email"
         minLength= {5}
         maxLength= {70}
         {...register("emailUsuario", {
            required: "El Email es obligatorio",
            minLength: {
              value: 5,
              message: "La cantidad de caracteres como minimo es de 5"
            },
            maxLength:{
              value:70,
              message:"La cantidad maxima de caracteres es de 70"
            }
          })}
         />
         <Form.Text className="text-danger">
            {errors.emailUsuario?.message}
          </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Ingrese Contraseña</Form.Label>
        <Form.Control type="password"
         placeholder="Password"
         minLength={8}
         maxLength={20}
         {...register("contraseñaUsuario",{
            required: "La contraseña es obligatoria",
            minLength: {
                value: 8,
                message: "La contraseña debe tener al menos 8 caracteres"
              },
              maxLength:{
                value:70,
                message:"La contraseña debe tener un maximo de 20 caracteres"
              }
         })} />
         <Form.Text className="text-danger">
            {errors.contraseñaUsuario?.message}
          </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <div className='text-center mt-4 fw-bold'>
      <Button  variant="danger" type="submit">
        REGISTRARSE
      </Button>
      </div>
    </Form>
        </div>
    );
};
export default Registrarse;




















