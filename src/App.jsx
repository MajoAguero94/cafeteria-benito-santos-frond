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
import './App.css';
import Login from './components/views/Login';
import Registrarse from './components/views/Registrarse';

function App() {
  return (
  //administramos las rutas
  <BrowserRouter>
  {/*aqui pongo un componente que aperece en todas las pginas*/}
  <Menu></Menu>
  <Routes>
    <Route exact path='/Inicio' element= {<Inicio></Inicio>} ></Route>
    <Route exact path='Administrador' element={<Administrador></Administrador>}></Route>
    <Route path='*' element={<Error404></Error404>} ></Route>
   
    <Route exact path='/Footer' element={<Footer></Footer>} ></Route>
    <Route exact path='/DetalleProducto' element={<DetalleProducto></DetalleProducto>} ></Route>
    <Route exact path='/CrearProducto' element={<CrearProducto></CrearProducto>} ></Route>
    <Route exact path='/CardProductos' element={<CardProductos></CardProductos>} ></Route>
    <Route exact path='/EditarProducto/:id' element={<EditarProducto></EditarProducto>} ></Route>
    <Route exact path='/Login' element={<Login></Login>} ></Route>
    <Route exact path='/Registrarse' element={<Registrarse></Registrarse>} ></Route>
   
   
  </Routes>
  <Footer></Footer>
  
  
  
  </BrowserRouter>
  );
}

export default App;
