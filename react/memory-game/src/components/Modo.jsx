import { useState } from 'react';
import './Modo.css';

export default function Modo({ mezclaCartas }) { // Asegúrate de que mezclaCartas sea pasado como prop
    const [dificultad, setDificultad] = useState("0");

    const handleChange = (event) => {
        const nuevaDificultad = event.target.value; // Obtén el valor actualizado
        setDificultad(nuevaDificultad);
        mezclaCartas(nuevaDificultad); // Pasa el nuevo valor de dificultad a mezclaCartas
    };

    return (
        <div className='modo-contenedor'>
            <label>
                <span>Selector de dificultad</span>
                <select className="modo-selector" name="dificultad" id="dificultad" value={dificultad} onChange={handleChange}>
                    <option value="facil">Fácil</option>
                    <option value="medio">Medio</option>
                    <option value="dificil">Difícil</option>
                </select>
            </label>
        </div>
    );
}
