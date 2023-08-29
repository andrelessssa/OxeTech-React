import { useState } from 'react'
import './App.css'
import Banner from './componentes/banner';
import Formulario from './componentes/formulario';





function App() {
  
  const [nome, setNome] = useState(0)
  return (
   <div className='container'>
      <Banner />
      <Formulario/>
     
      
   </div>
  
  )
}
export default App
