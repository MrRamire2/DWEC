import React, { useState } from "react";

export default function eventosLista({ eventos, handleClick }) {
    return (
        <>
         {eventos.map((evento, index) => (
            <React.Fragment key={evento.id}>
                <h2>
                    {index} - {evento.titulo}
                </h2>
                <button onClick={() => handleClick(evento.id)}>
                    Eliminar evento
                </button>
            </React.Fragment>
            ))}
        </>
    )
}