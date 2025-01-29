import { useState } from "react"
import { useFetch } from "../hooks/useFetch";
import './AsignaturaLista.css'

export default function AsignaturaLista() {
  // API fetch()

  const [url, setUrl] = useState('http://localhost:3000/asignaturas');

  const { datos: asignaturas, cargando: cargando } = useFetch(url);

  //Array de dependencia.

  return (
    <div className="asignatura-lista">
      <h2>Listado de Asignaturas</h2>
      {cargando && <div>Cargando Asignaturas...</div>}
      <ul>
        {
          asignaturas && asignaturas.map(asignatura => (
            <li key={asignatura.id}>
              <h3>{asignatura.nombre}</h3>
              <p>Horas totales: {asignatura["horas totales"]}</p>
            </li>
          ))
        }
      </ul>
      <div className="filtros">
        <button onClick={() => setUrl('http://localhost:3000/asignaturas?idioma=Ingles')}>Inglés</button>
        <button onClick={() => setUrl('http://localhost:3000/asignaturas?')}>Todos</button>
      </div>
      <form className="form-add">
        <div>
          <label htmlFor="nombre">Nombre </label>
          <input type="text" name="nombre" id="nombre" />
        </div>
        <div>
          <label htmlFor="horasTotales">Horas totales </label>
          <input type="text" name="horasTotales" id="horasTotales" />
        </div>
        <div>
          <label htmlFor="idioma">Idioma </label>
          <input type="text" name="idioma" id="idioma" />
        </div>

        <button>Añadir asignatura</button>
      </form>
    </div>
  )
}
