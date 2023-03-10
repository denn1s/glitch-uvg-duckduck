import InformationBlock from './infoBlocks.jsx'

const MainInfoBlocks=()=>{
    return(
        <div>
            <InformationBlock img = {"https://duckduckgo.com/assets/add-to-browser/cppm/laptop.svg"} title = {"Privacidad para Chrome"}
            text = {"Navega como siempre y nosotros nos encargamos del resto. Te ofrecemos buscador, bloqueador de rastreadores y mejora de encriptación todo en una extensión de Chrome."} 
            link= {"https://duckduckgo.com/app"}/>

            <InformationBlock img = {"https://duckduckgo.com/assets/home/landing/icons/search.svg"} title = {"Motor de Búsqueda de Privacidad"}
            text = {"Busca de forma privada con nuestra app o extension, añade búsqueda web privada a tu navegador preferido o busca en duckduckgo.com."}
            link= {"https://duckduckgo.com/"}/>

            <InformationBlock img = {"https://duckduckgo.com/assets/add-to-browser/cppm/mobile.svg"} title = {"Navegador Primario"}
            text = {"Nuestro navegador privado para móviles viene equipado con nuestro motor de búsqueda, bloqueador de rastreadores, mejora de encriptación y más. Disponible para Android y iOS."}
            link= {"https://duckduckgo.com/app"}/>
        </div>
    )
}

export default MainInfoBlocks

