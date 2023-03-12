import Carousel from "../../components/Carousel";
import ColecoesDestaque from "../../components/ColecoesDestaque";
import OfertaDestaque from "../../components/OfertaDestaque";


export default function Home (){
    return(
        <div>
            Pagina inicial
            <Carousel/>
            <ColecoesDestaque/>
            parte da Andy
            <OfertaDestaque/>
        </div>
    );
}