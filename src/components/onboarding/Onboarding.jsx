import { useState } from 'react'
import '/src/components/onboarding/Onboarding.css'

const Onboarding = () => {
    const [count, setCount] = useState(0)

    return(
    <div className='Onboarding'>
        <h1>
            No guardamos tu información
            <br></br>
            personal. Y nunca lo haremos.
        </h1>
        <p>
            Nuestra politica de privacidad es simple: No colectamos
            <br></br>
            o compartimos ninguna informacion personal tuya.
            </p>
        <button>
            Instalar DuckDuckGo
            </button>
        </div>
    )
}

export default Onboarding