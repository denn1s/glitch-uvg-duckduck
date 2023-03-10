import './infoBlocks.css'
const InformationBlock = ({img,title,text,link})=>{
    return(
        <div class="info_Blocks">
        <img src={img} height="75px" />
        <h3>{title}</h3>
        <p>{text}
          <a href={link}> Ver más.</a>
        </p>
      </div>
    )
}

export default InformationBlock
