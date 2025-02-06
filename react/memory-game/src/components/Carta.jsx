import './Carta.css';

export default function Carta({ carta, handleEleccion, girada, deshabilitado }) {
    
    const handleClick = () => {
        if (!deshabilitado) {
            handleEleccion(carta);
        }
    }

    return (
        <div className='card'>
            <div className={girada ? "flipped" : ""}>
                <img className='front' src={carta.src} alt="Frontal" />
                <img className='back' src="./img/cubierta-medio.webp" onClick={handleClick} alt="Cubierta" />
            </div>
        </div>
    )
}