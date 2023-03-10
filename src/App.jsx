import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App'
import Onboarding from './components/onboarding/Onboarding'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
        <Onboarding></Onboarding>
    </div>
  )
}

export default App