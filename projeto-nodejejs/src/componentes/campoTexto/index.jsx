//criando um componete
function CampoText(props){
    return(
        <div>
            <label htmlFor="" > {props.label}</label>
            <input  type="text" />

            
        
        </div>
    )
}
export default CampoText;
// falta chamar dentro do app