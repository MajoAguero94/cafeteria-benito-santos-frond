import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
    return (
        <div className='d-flex justify-content-center mainSection my-5'>
            <Form className='login'>
                <h1 className='text-center mb-4'>Iniciar Sesion</h1>
                <hr />
      <Form.Group className="mb-5 mt-5" controlId="formBasicEmail">
        <Form.Label>Ingrese su Email</Form.Label>
        <Form.Control type="email"
         placeholder="Ingrese email"
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
          })} />
        <Form.Text className='text-light'>
        {errors.emailUsuario?.message}
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Ingrese Contraseña</Form.Label>
        <Form.Control type="password"
         placeholder="Ingrese Contraseña"
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
          <Form.Text className="text-light">
            {errors.contraseñaUsuario?.message}
          </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <div className='text-center mt-5 fw-bold'>
      <Button  variant="danger" type="submit">
        INICIAR SESION
      </Button>
      </div>
    </Form>
        </div>
    );
};
export default Login;