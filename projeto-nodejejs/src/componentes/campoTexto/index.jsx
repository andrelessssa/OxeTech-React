//criando um componete
import'./campoTexto.css'
function CampoText(props){
    return(
        <div className="campotexto_area">
            <label htmlFor="" > {props.label}</label>
            <input  placeholder= { props.placeholder} />
        </div>
    )
}
export default CampoText;
// falta chamar dentro do app