import {BrowserRouter, Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Menu from './components/Menu';
import Home from './pages/Home';
import MeusPedidos from './pages/MeusPedidos';
import Produtos from './pages/Produtos';
import Categorias from './pages/Categorias';
import Footer from './components/Footer';

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