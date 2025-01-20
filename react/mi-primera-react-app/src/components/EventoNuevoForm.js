import { useState } from "react";
import "./EventoNuevoForm.css";

export default function EventoNuevoForm({ addEvento }) {
    const [titulo, setTitulo] = useState("");
    const [fecha, setFecha] = useState("");

    const resertForm = () => {
        setTitulo("");
        setFecha("");
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const evento = {
            titulo: titulo,
            fecha: fecha,
            id: Math.floor(Math.random()*10000),
        };    

        addEvento(evento);

        resertForm();
    }

  return (
    <form className="evento-nuevo-form" onSubmit={handleSubmit}>
        <label><span>Título del evento</span>
            <input type="text" 
            onChange={(e)=>setTitulo(e.target.value)}
            value={titulo}
            />
        </label>
        <label><span>Fecha del evento</span>
            <input type="date" 
            onChange={(e)=>setFecha(e.target.value)}
            value={fecha}
            />
        </label>
        <button>submit</button>
    </form>
  )
}
