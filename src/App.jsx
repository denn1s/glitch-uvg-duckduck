import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Buscador from './components/Buscador/Buscador'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Buscador></Buscador>
    </div>
  )
}

export default App
