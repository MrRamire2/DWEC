import "./App.css";
import React, { useState } from "react";
import Titulo from "./components/Titulo";
import Modal from "./components/Modal";

//HOOK
//useState

//PROPS

function App() {
  const [mostrarEventos, setMostrarEventos] = useState(true);

  const [eventos, setEventos] = useState([
    { titulo: "Examen DWEC", id: 1 },
    { titulo: "Concurso Programame", id: 2 },
    { titulo: "Fiesta de Sant Antoni", id: 3 },
  ]);

  const handleClick = (id) => {
    //version corta
    setEventos((eventosPrevios) =>
      eventosPrevios.filter((evento) => id !== evento.id)
    );

    //version larga
    // setEventos((eventosPrevios)=>{
    //   return eventosPrevios.filter((evento)=>{
    //     return id !== evento.id;
    //   })
    // });

    // setEventos(eventos.filter((evento)=>{
    //   return id !== evento.id;
    // }))

    console.log(id);
  };

  const subtitulo = "Todos los eventos para Desarrollo de Aplicaciones Web";

  return (
    <div className="App">
      <Titulo titulo="Eventos de DAW 24/25" subtitulo={subtitulo} />
      {mostrarEventos && (
        <div>
          <button onClick={() => setMostrarEventos(false)}>Ocultar eventos</button>
        </div>
      )}
      {!mostrarEventos && (
        <div>
          <button onClick={() => setMostrarEventos(true)}>Mostrar eventos</button>
        </div>
      )}
      {mostrarEventos && eventos.map((evento, index) => (
        <React.Fragment key={evento.id}>
          <h2>
            {index} - {evento.titulo}
          </h2>
          <button onClick={() => handleClick(evento.id)}>
            Eliminar evento
          </button>
        </React.Fragment>
      ))}
      <Modal>
        <h2>Stem Talks</h2>
        <p>No te lo pierdas: 30 y 31 de enero</p>
        <a href="https://gdg.community.dev/events/details/google-gdg-menorca-presents-stem-talks-menorca-2025/" target="blank">Has click aquí</a>
      </Modal>
    </div>
  );
}

export default App;