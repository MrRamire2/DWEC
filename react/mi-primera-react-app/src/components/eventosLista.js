import React from "react";
import styles from "./EventosLista.module.css"

export default function eventosLista({ eventos, handleClick }) {
    return (
        <div>
         {eventos.map((evento, index) => (
            <div className={styles.tarjeta} key={evento.id}>
                <h2>
                    {index} - {evento.titulo}
                </h2>
                <button onClick={() => handleClick(evento.id)}>
                    Eliminar evento
                </button>
            </div>
            ))}
        </div>
    )
}