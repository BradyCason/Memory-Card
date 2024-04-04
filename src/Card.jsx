export default function Card({img, handleClick}){
    return(
        <div className="card" onClick={handleClick} style={{backgroundImage : `url(${img})`}}></div>
    )
}