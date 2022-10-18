import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Administrador from './components/views/Administrador';
import Inicio from './components/views/Inicio';
import Error404 from './components/views/Error404';
function App() {
  return (
  //administramos las rutas
  <BrowserRouter>
  <Routes>
    <Route exact path='/' element= {<Inicio></Inicio>} ></Route>
    <Route exact path='/administrador' element={<Administrador></Administrador>}></Route>
    <Route path='*' element={<Error404></Error404>} ></Route>
  </Routes>
  
  
  
  </BrowserRouter>
  );
}

export default App;
