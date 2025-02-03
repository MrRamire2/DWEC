import './Carta.css';

export default function Carta({ carta }) {
    return (
        <div className='card'>
            <div>
                <img src={carta.src} alt="Frontal" />
                <img src="./img/atras.png" alt="Cubierta" />
            </div>
        </div>
    )
}