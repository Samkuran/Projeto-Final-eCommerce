import Carousel from "../../components/Carousel";
import OfertaDestaque from "../../components/OfertaDestaque";
import ColecaoDestaque from "../../components/ColecoesDestaque";
import Footer from "../../components/Footer";


export default function Home (){
    return(
        <div>
            
            <Carousel />
            <ColecaoDestaque />
            Parte da Andy
            <OfertaDestaque/>
            <Footer />
        </div>
    );
}