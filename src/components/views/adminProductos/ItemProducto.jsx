import React from 'react';
import {Button} from 'react-bootstrap';
import { borrarProductoAPI, consultarApi } from '../../herlpers/queries';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const ItemProducto = ({producto, setProductos}) => {
    const {id, nombreProducto, categoria, imagen, precio} = {...producto}




    const borrarProducto = ()=>{

        //TAREA : agregar la ventana de swal alert para preguntar si querermos borrar producto, solo si es "si" realizar el siguiente codigo
        borrarProductoAPI(id).then((respuesta)=>{
            if(respuesta.status=== 200){
                //se pudo borrar el producto
                Swal.fire("Producto eliminado","El producto fue eliminado exitosamente","success");
                //obtener todos los productos actualesy actualizamos el state productos del componente administrador
             consultarApi().then((respuesta)=>{
                setProductos(respuesta);

             })

            }else{
                //mostrar al usuario un msj de error
                Swal.fire("Ocurrio un error","Vuelva a intentar esta operacion en unos minutos","error");
            }

        })
    }



    return (
        <tr>
        <td>{id}</td>
        <td>{nombreProducto}</td>
        <td>{precio}</td>
        <td>{imagen}</td>
        <td>{categoria}</td>
       
       
        <td className='d-grid'>
           
            <Link className="btn btn-warning" to={`/EditarProducto/${id}`} >Editar</Link>
            <Button variant='danger' onClick={borrarProducto}>Borrar</Button>
           
           
            
        </td>
      </tr>
    );
};

export default ItemProducto;