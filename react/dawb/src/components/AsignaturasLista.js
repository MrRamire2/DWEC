import { useState, useEffect } from "react"
import "./AsignaturasLista.css"


export default function AsignaturasLista() {
   
    const[asignaturas, setAsignaturas] = useState([]);

    console.log(asignaturas)

    useEffect(()=>{
        fetch('http://localhost:3000/asignaturas')
        .then(response => response.json())
        .then(json => setAsignaturas(json))
    }, []);
    //Array de dependencias.

  return (
    <div className="asignatura-lista">
        <h2>Listado de Asignaturas</h2>
        <ul>
            {asignaturas.map(asignatura => (
                <li key={asignatura.id}>
                    <h3>{asignatura.nombre}</h3>
                    <p>Horas Totales: {asignatura["horas totales"]}</p>
                </li>
            ))}
        </ul>
    </div>
  )
}
