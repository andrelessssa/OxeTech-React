import React from "react";
import CampoText from "../campoTexto";

function Formulario(){
    return(
        <div>
            <form >
            <CampoText label="Cargo "/>
            <CampoText label="Imagem "/>
            <CampoText label="Time "/>
            </form>
        </div>
    )
}
export default Formulario