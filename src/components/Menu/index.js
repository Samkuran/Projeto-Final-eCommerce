import {Link, useLocation} from "react-router-dom";
import './styles.css';

export default function Menu (){
    const location = useLocation();

    const isActive = (url) => {
        if (location.pathname === url){
            return "active";
        }
        return "";
    };

    return(
        <div className="container">
            <section className="menu">
                <Link to="/" id="home" className={isActive('/')}>Home</Link>
                <Link to="/produtos" id="produtos" className={isActive('/produtos')}>Produtos</Link> 
                <Link to="/categorias" id="categorias" className={isActive('/categorias')}>Categorias</Link> 
                <Link to="/meus-pedidos" id="pedidos" className={isActive('/meus-pedidos')}>Meus Pedidos</Link>  
            </section>
        </div>
    );
}

