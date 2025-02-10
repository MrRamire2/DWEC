import { useEffect, useState } from 'react';
import './App.css'
import Carta from './components/Carta';
import Modo from './components/Modo';

function App() {

  const [cartas, setCartas] = useState([]);
  const [eleccion1, setEleccion1] = useState(null);
  const [eleccion2, setEleccion2] = useState(null);
  const [deshabilitado, setDeshabilitado] = useState(false);
  const [turnos, setTurnos] = useState(0);

  const imagenes = {
    facil: [
      { "src": "/img/1.png", emparejada: false },
      { "src": "/img/2.png", emparejada: false },
      { "src": "/img/3.png", emparejada: false },
      { "src": "/img/4.png", emparejada: false },
      { "src": "/img/5.png", emparejada: false },
      { "src": "/img/6.png", emparejada: false }
    ],
    medio: [
      { "src": "/img/12.webp", emparejada: false },
      { "src": "/img/14.webp", emparejada: false },
      { "src": "/img/15.webp", emparejada: false },
      { "src": "/img/16.webp", emparejada: false },
      { "src": "/img/17.webp", emparejada: false },
      { "src": "/img/18.webp", emparejada: false }
    ],
    dificil: [
      { "src": "/img/12.webp", emparejada: false },
      { "src": "/img/14.webp", emparejada: false },
      { "src": "/img/15.webp", emparejada: false },
      { "src": "/img/16.webp", emparejada: false },
      { "src": "/img/17.webp", emparejada: false },
      { "src": "/img/18.webp", emparejada: false }
    ],
  }

  const mezclaCartas = () => {
    const cartasMezcladas = [...imagenes.facil, ...imagenes.facil]
      .map((carta) => ({ ...carta })) // Clonar cada carta
      .sort(() => Math.random() - 0.5)
      .map((carta) => ({ ...carta, id: Math.floor(Math.random() * 10000) }));


    setEleccion1(null);
    setEleccion2(null);
    setTurnos(0);
    setCartas(cartasMezcladas);
  }

  const handleEleccion = (carta) => {
    if (carta !== eleccion1) {
      eleccion1 ? setEleccion2(carta) : setEleccion1(carta);
    }
  }

  useEffect(() => {
    if (eleccion1 && eleccion2) {
      setDeshabilitado(true);
      if (eleccion1.src === eleccion2.src) {
        setCartas(cartasPrevias => {
          return cartasPrevias.map(carta => {
            if (carta.src === eleccion1.src) {
              return { ...carta, emparejada: true };
            } else {
              return carta;
            }
          });
        });
        reseteaTurno();
      } else {
        setTimeout(() => reseteaTurno(), 1000);
      }
    }
  }, [eleccion1, eleccion2]);

  useEffect(() => {
    mezclaCartas();
  }, []);

  const reseteaTurno = () => {
    setEleccion1(null);
    setEleccion2(null);
    setDeshabilitado(false);
    setTurnos(turnosPrevios => turnosPrevios + 1);
  }

  return (
    <div className='App'>
      <h1>Joc de Memoria</h1>
      <button onClick={mezclaCartas}>Mezclar Cartas</button>

      <Modo mezclaCartas={mezclaCartas}/>

      <div className='card-grid'>

        {
          cartas.map(carta => (
            <Carta carta={carta}
              key={carta.id}
              handleEleccion={handleEleccion}
              girada={carta === eleccion1 || carta === eleccion2 || carta.emparejada}
              deshabilitado={deshabilitado}
            />
          ))
        }

      </div>
      <p>Turnos: {turnos}</p>
    </div>
  )
}

export default App
