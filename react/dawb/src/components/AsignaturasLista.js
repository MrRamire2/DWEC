import { useState } from "react"
import { useFetch } from "../hooks/useFetch";
import "./AsignaturasLista.css"


export default function AsignaturasLista() {
    const [url, setUrl] = useState('http://localhost:3000/asignaturas');

const {datos: asignaturas} = useFetch(url);

  return (
    <div className="asignatura-lista">
        <h2>Listado de Asignaturas</h2>
        <ul>
            {asignaturas && asignaturas.map(asignatura => (
                <li key={asignatura.id}>
                    <h3>{asignatura.nombre}</h3>
                    <p>Horas Totales: {asignatura["horas totales"]}</p>
                </li>
            ))}
        </ul>
        <div className="filtros">
            <button onClick={()=>setUrl('http://localhost:3000/asignaturas?idioma=Ingles')}>Inglés</button>
            <button onClick={()=>setUrl('http://localhost:3000/asignaturas')}>Todos</button>
        </div>
    </div>
  )
}
