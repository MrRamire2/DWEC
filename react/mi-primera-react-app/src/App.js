import "./App.css";
import { useState } from "react";
import Titulo from "./components/Titulo";
import Modal from "./components/Modal";
import eventosLista from "./components/EventosLista";
import EventoNuevoForm from "./components/EventoNuevoForm";

//HOOK
//useState

//PROPS


//EventosLista.js

function App() {
  const [muestraModal, setMuestraModal] = useState(true);
  const [mostrarEventos, setMostrarEventos] = useState(true);

  const [eventos, setEventos] = useState([]);

  const addEvento = (evento) => {
    setEventos((eventosPrevios) => {
      return [...eventosPrevios, evento];
    })
    setMuestraModal(false);
  }

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
      {muestraModal && <Modal destino={document.body} esExterno={true}>
        <EventoNuevoForm addEvento={addEvento}/>
      </Modal>}
      <div>
        <button onClick={() => {setMuestraModal(true)}}>Crear nuevo evento</button>
      </div>
    </div>
  );
}

export default App;