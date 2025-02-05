import { useEffect, useState } from 'react';
import './App.css'
import Carta from './components/Carta';

function App() {

  const [cartas, setCartas] = useState([]);
  const [eleccion1, setEleccion1] = useState(null);
  const [eleccion2, setEleccion2] = useState(null);
  const [deshabilitado, setDeshabilitado] = useState(false);
  const [turnos, setTurnos] = useState(0);

  const imagenes = [
    { "src": "/img/1.png", emparejada: false },
    { "src": "/img/2.png", emparejada: false },
    { "src": "/img/3.png", emparejada: false },
    { "src": "/img/4.png", emparejada: false },
    { "src": "/img/5.png", emparejada: false },
    { "src": "/img/6.png", emparejada: false }
  ];

  const mezclaCartas = () => {
    const cartasMezcladas = [...imagenes, ...imagenes]
      .sort(() => Math.random() - 0.5)
      .map((carta) => ({ ...carta, id: Math.floor(Math.random() * 10000) }));

      setEleccion1(null);
      setEleccion2(null);
      setTurnos(0);
      setCartas(cartasMezcladas);
  }

  const handleEleccion = (carta) => {
    eleccion1 ? setEleccion2(carta) : setEleccion1(carta);
  }

  useEffect(()=>{
    if (eleccion1 && eleccion2) {
      setDeshabilitado(true);
      if (eleccion1.src === eleccion2.src) {
      setCartas(cartasPrevias => {
          return cartasPrevias.map(carta => {
            if (carta.src === eleccion1.src) {
              return {...carta, emparejada: true};
            } else {
              return carta;
            }
          });
        });
        reseteaTurno();
      } else {
        setTimeout(()=>reseteaTurno(), 1000);
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

      <div className='card-grid'>

        {
          cartas.map(carta => (
            <Carta carta={carta}
            key={carta.id}
            handleEleccion = {handleEleccion}
            girada = {carta===eleccion1 || carta===eleccion2 || carta.emparejada} 
            deshabilitado = {deshabilitado}
            />
          ))
        }

      </div>
      <p>Turnos: {turnos}</p>
    </div>
  )
}

export default App
