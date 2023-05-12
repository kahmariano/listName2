import  { useState, useEffect } from "react"
import { Card } from '../../components/Card'
//Hooks(gancho) sao recursos que nos permite gerenciar o ciclo de vida do componente, sem precisar usar classes(hj usamos function) . useState e useEffect

import './styles.css'
function App() {
  const [studentName, setStudentName] = useState('')
  const [students, setStudents] = useState([]) 
  const [user, setUser] = useState({ name: '', avatar: '' })
  //essa parte das variaveis tem a variavel e a setVariavel, pq quando vamos mudar algo em vez de mudar diretamente a variavel original, mudamos uma "copia" na qual vamos tem a original e a que foi alterada(imutabilidade, acho que é isso)


  function handleAddStudent() {
    //function de adicionar novo aluno, tenho uma variavel de NovoAluno que recebe um objeto onde o name é a variavel que criei em cima, e o time a hora de criaçao.finalizo a function atualizando o valor da SetStudent, onde ele vai ter o valor anterior e mais o novo valor  
    const newStudant = {
      name: studentName,
      time: new Date().toDateString('pt-br')
    }
    setStudents( prevState => [...prevState, newStudant])
  }

  useEffect(()=>{

    //hook do react, useEffect lida com efeiito colateral e ciclo de vida do component, aqui usamos o fetch(api que nos permite fazer requisoes http) para fazer uma busca na api do github(api puclica) na qual ele vai buscar os dados de forma assincrona e me devolver em json, ele vai busca os dados name e avatar
    async function fetchData(){
      const response = await 
      fetch('https://api.github.com/users/kahmariano')
      const data = await response.json()
      setUser({
        name: data.name,
        avatar: data.avatar_url
      })
    }
    fetchData()
  }, [])
  return (
    //aqui foi a estrutura div, button esses negocio, em cima vai as functions que faz essa parte fica conectada 
    <div className="container">
      <header>
        <h1>Lista de Nomes</h1>
        <div>
          <strong>{user.name}</strong>
          <img src={user.avatar} alt="foto de perfil" />
        </div>
      </header>
      <input type="text" onChange={e => setStudentName(e.target.value)}
      //onchange tem a ver com estados e esse em especifico muda o valor do elemento, o e(evento) dispara uma arrow function na qual o evento(e) vai pegar o valor(value) alvo(target)
      />
      <button type="button" onClick={ handleAddStudent}
      //onClick, aciona uma function sempre que sofrer click, no caso a function handleAddStudent
      >Adicionar</button>
    {

      //objeto no qual pego students percoro(map) por um student no qual abre uma arrow function, retorna o Card(html). key é o id unico pra n dar erro na criaçao dos Cards, e o math random é pra criar um numero automatico 
      students.map(student =>(
        <Card 
        key={Math.random()}
        name={student.name}
        time={student.time}/>
      ))
    }
    </div>
  )
}

export default App
