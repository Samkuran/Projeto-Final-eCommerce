import vetor from "./Vector.png";
import {Button, TextField, Alert, Badge} from "@mui/material";
import {Favorite, Group, ShoppingCart} from "@mui/icons-material";

import "./styles.css";

export default function Navbar (){
    return(
        <div className="container">
            <section id="conjlogo">
                <img id="vetor" src={vetor}/>
                <a href="" id="logo">Digital Store</a>
             </section>

             <TextField  className="busca" label="Pesquisar produto..." 
            InputProps={{
                startAdornment: (
                <InputAdornment position="end">
                    <AccountCircle/>
                </InputAdornment>
                ),
                }}
                variant="standard"
            /> 

            <Button color='secondary' variant="contained">Entrar</Button>
           
        </div>
    );
}