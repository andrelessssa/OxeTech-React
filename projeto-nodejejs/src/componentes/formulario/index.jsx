import React from "react";
import CampoText from "../campoTexto";
import Select from "../select";


function Formulario(){
    return(
        <div>
            <form >
            <CampoText label="Cargo " placeholder="Digite seu Nome"/>
            <CampoText label="Imagem " placeholder="Digite seu Cargo" />
            <CampoText label="Time " placeholder="Digite o endereço da imagem"/>
            <Select label='Times'/>
            </form>
        </div>
    )
}
export default Formulario