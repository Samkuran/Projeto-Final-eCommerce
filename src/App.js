import {BrowserRouter, Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import MeusPedidos from './pages/MeusPedidos';
import Produtos from './pages/Produtos';
import Categorias from './pages/Categorias';
import Header from './components/Header';


export default function App(){
    return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/produtos' element={<Produtos/>} />
            <Route path='/categorias' element={<Categorias/>} />
            <Route path='/meus-pedidos' element={<MeusPedidos/>} />
        </Routes>
      </BrowserRouter>
    </>
    );
  }