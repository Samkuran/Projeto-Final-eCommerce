import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from './pages/Home';
import MeusPedidos from './pages/MeusPedidos';
import Produtos from './pages/Produtos';
import Categorias from './pages/Categorias';
import Navbar from './components/Navbar';
import Menu from './components/Menu';
import Footer from './components/Footer';

import './index.css';


 
export default function App(){
    return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Menu/>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/produtos' element={<Produtos/>} />
            <Route path='/categorias' element={<Categorias/>} />
            <Route path='/meus-pedidos' element={<MeusPedidos/>} />
        </Routes>
       <Footer/>
      </BrowserRouter>
    </>
    );
  }