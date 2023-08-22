import React from "react";
import CampoText from "../campoTexto";
import Select from "../select";
import './formulario.css';

function handleAdd(){

}

function Formulario(){
    return(
        
            <form className="campo_formulario" onSubmit={handleAdd} >
            <CampoText label="Cargo " placeholder="Digite seu Nome"/>
            <CampoText label="Imagem " placeholder="Digite seu Cargo" />
            <CampoText label="Time " placeholder="Digite o endereço da imagem"/>
            <Select  label='Times'/>
            <button type="submit" className="buton">Criar Card</button>
            </form>
       
    )
}
export default Formulario