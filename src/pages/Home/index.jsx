import React,{useState, useEffect} from "react"
import './styles'
import {Card} from '../../components/Card'
//Hooks(gancho) sao recursos que nos permite gerenciar o ciclo de vida do componente, sem precisar usar classes(hj usamos function) . useState e useEffect


function App() {
  const [studentName, setStudentName] = useState('')
  const [students, setStudents] = useState([{name:'', time:''}]) //um array que dentro dele tem um objeto [{}]
  const [use, setUser] = useState({name:'', avatar:''})
  //essa parte das variaveis tem a variavel e a setVariavel, pq quando vamos mudar algo em vez de mudar diretamente a variavel original, mudamos uma "copia" na qual vamos tem a original e a que foi alterada(imutabilidade, acho que é isso)
  return (
//aqui foi a estrutura div, button esses negocio, em cima vai as functions que faz essa parte fica conectada 
<div className="container">
  <header>
    <h1>Lista de Nomes</h1>
   <div>
   <strong></strong>
    <img src="" alt="foto de perfil" />
   </div>
  </header>
  <input type="text" />
  <button type="button" onClick={}>Adicionar</button>
</div>
  )
}

export default App
