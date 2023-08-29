//criando um componete
import'./campoTexto.css'
import {useState} from `reackt`;

function CampoText(props){
    return(
        <div className="campotexto_area">
            <label htmlFor="" > {props.label}</label>
            <input onChange={(e) => setNome(e.target.value) } placeholder= { props.placeholder} />
        </div>
    )
}
export default CampoText;
// falta chamar dentro do app