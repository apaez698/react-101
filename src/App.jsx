import './App.css'
import Saludo from './Saludo'

function App() {

  const nombres = [{nombre:'Andres', id:1},{nombre: 'Diana', id:2},{nombre: 'Jose', id: 3}]

  return (
    <>
    {
      nombres.map((persona)=>(
       <Saludo nombre={persona.nombre} id= {persona.id}/>
      ))
    }
    </>
  )
}

export default App
