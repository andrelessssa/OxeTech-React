import React from "react";
import CampoText from "../campoTexto";

function Formulario(){
    return(
        <div>
            <form >
            <CampoText label="Cargo " placeholder="Digite seu Nome"/>
            <CampoText label="Imagem " placeholder="Digite seu Cargo" />
            <CampoText label="Time " placeholder="Digite o endereço da imagem"/>
            </form>
        </div>
    )
}
export default Formulario