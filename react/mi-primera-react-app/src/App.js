import "./App.css";
import { useState } from "react";
import Titulo from "./components/Titulo";
import Modal from "./components/Modal";
import eventosLista from "./components/eventosLista";

//HOOK
//useState

//PROPS


//EventosLista.js

function App() {
  const [muestraModal, setMuestraModal] = useState(true);
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

  const handleCerrar = () => {
    setMuestraModal(false);
  }

  console.log(muestraModal);

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
      {mostrarEventos && eventosLista({ eventos: eventos, handleClick: handleClick})}
      {muestraModal && <Modal handleCerrar={handleCerrar}>
        <h2>Stem Talks</h2>
        <p>No te lo pierdas: 30 y 31 de enero</p>
      </Modal>}
      <div>
        <button onClick={() => {setMuestraModal(true)}}>Mostar Modal</button>
      </div>
    </div>
  );
}

export default App;