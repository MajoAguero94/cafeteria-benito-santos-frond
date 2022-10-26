import React, { useEffect } from 'react';
import { Form,Button, FormSelect } from 'react-bootstrap';
import {useForm} from "react-hook-form";
import { useParams } from 'react-router-dom';
import { obtenerProductoApi } from '../herlpers/queries';
const EditarProducto = () => {
  
  
  const{register, handleSubmit, formState:{errors}, setValue}= useForm()
  //buscamos el parametro de la URL o ruta
  const {id} = useParams();
  
  useEffect(()=>{
    obtenerProductoApi(id).then((respuesta)=>{
      if(respuesta.status === 200){
        console.log(respuesta)
        setValue("nombreProducto", respuesta.dato.nombreProducto);
        setValue("precio", respuesta.dato.precio);
        setValue("imagen", respuesta.dato.imagen);
        setValue("categoria", respuesta.dato.categoria);
        
      }
    })
  },[])
  
  const onSubmit =(datos)=>{
    console.log(datos)
    console.log("desde editar producto")
    //pedir a la API actualizar los datos del producto X
    
  }
  return (
     
             <div className='container mainSection'>
            <h1>Editar Producto</h1> 
            <hr />
            <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Nombre Producto*</Form.Label>
        <Form.Control 
        type="text" 
        placeholder="Ej: Coffe" 
        minLength={2}
        maxLength={50}


        {...register("nombreProducto",{required:"El nombre del producto es obligatorio",
        minLength:{
          value:2,
          message: 'la cantidad de caracteres es como minimo 2'
        },
        maxLength:{
          value:50,
          message: 'la cantidad maxima de caracteres es de 50'

        }
        })}/> {/*en este componente decido yo el nombre para registrar*/}
        <Form.Text className="text-danger">
         {errors.nombreProducto?.message}
        </Form.Text>
      </Form.Group>



      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Precio*</Form.Label>
        <Form.Control type="number" placeholder="Ej: 50"
        {...register("precio", {required:"El precio del producto es un dato obligatorio",
        min:{
          value:50,
          message:"El precio minimo debe ser de $50"
        
        },
        max:{
          value:9000,
          messege:"El precio maximo debe ser de $9000"
        }
        
        })} />
        <Form.Text className="text-danger">
          {errors.precio?.message}
        
        </Form.Text>


      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Imagen URL*</Form.Label>
        <Form.Control type="text" placeholder="Ej: https://images.pexels.com/photos/11942622/pexels-photo-11942622.jpeg?auto=compress&cs=tinysrgb&w=600" 
        {...register("imagen",{required:"la URL de la imagen es obligatoria",
        pattern:{
         value:/^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/,
         messege:"Debe ingresar una URL valida"
        }
       
       
       })}



        
        />
       
       
        <Form.Text className="text-danger">

         
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Categoria*</Form.Label>
        <FormSelect 
        {...register("categoria",{
          required:"Debe seleccionar una categoria"
        })}>
            <option value="">Seleccione una opción</option>
            <option value="Bebida-fria">Bebida-fria</option>
            <option value="Bebida-caliente">Bebida-caliente</option>
            <option value="Dulce">Dulce</option>
            <option value="Salado">Salado</option>
        </FormSelect>
        <Form.Text className="text-danger">
          {errors.categoria?.message}
        
        </Form.Text>
      </Form.Group>

      
      <Button variant="primary" type="submit">
        Guardar
      </Button>
    </Form>
        </div>
    );
};

export default EditarProducto;