import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Administrador from './components/views/Administrador';
import Inicio from './components/views/Inicio';
import Error404 from './components/views/Error404';
import Menu from './components/common/Menu';
import Footer from './components/common/Footer';
import DetalleProducto from './components/views/DetalleProducto';
import CrearProducto from './components/views/CrearProducto';
import CardProductos from './components/views/adminProductos/CardProductos';
import EditarProducto from './components/views/EditarProducto';

function App() {
  return (
  //administramos las rutas
  <BrowserRouter>
  <Routes>
    <Route exact path='/Inicio' element= {<Inicio></Inicio>} ></Route>
    <Route exact path='/administrador' element={<Administrador></Administrador>}></Route>
    <Route path='*' element={<Error404></Error404>} ></Route>
    <Route exact path='/Menu' element={<Menu></Menu>} ></Route>
    <Route exact path='/Footer' element={<Footer></Footer>} ></Route>
    <Route exact path='/DetalleProducto' element={<DetalleProducto></DetalleProducto>} ></Route>
    <Route exact path='/CrearProducto' element={<CrearProducto></CrearProducto>} ></Route>
    <Route exact path='/CardProductos' element={<CardProductos></CardProductos>} ></Route>
    <Route exact path='/EditarProducto' element={<EditarProducto></EditarProducto>} ></Route>
   
   
   
  </Routes>
  
  
  
  </BrowserRouter>
  );
}

export default App;
