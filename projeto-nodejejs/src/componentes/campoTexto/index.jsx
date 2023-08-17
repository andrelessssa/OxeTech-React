//criando um componete
function CampoText(props){
    return(
        <div>
            <label htmlFor="" > {props.label}</label>
            <input  placeholder= { props.placeholder} />
        </div>
    )
}
export default CampoText;
// falta chamar dentro do app