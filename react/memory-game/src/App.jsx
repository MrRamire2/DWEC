import { useState } from 'react';
import './App.css'
import Carta from './components/Carta';

function App() {

  const [cartas, setCartas] = useState([]);

  const mezclaCartas = () => {
    const cartasMezcladas = [...imagenes, ...imagenes]
      .sort(() => Math.random() - 0.5)
      .map((carta) => ({ ...carta, id: Math.floor(Math.random() * 10000) }));

    setCartas(cartasMezcladas);

  }

  console.log(cartas);

  const imagenes = [
    { "src": "/img/1.png" },
    { "src": "/img/2.png" },
    { "src": "/img/3.png" },
    { "src": "/img/4.png" },
    { "src": "/img/5.png" },
    { "src": "/img/6.png" },
  ];
  

  return (
    <div className='App'>
      <h1>Joc de Memoria</h1>
      <button onClick={mezclaCartas}>Mezclar</button>

      <div className='card-grid'>

        {
          cartas.map(carta => (
            <Carta carta={carta} key={carta.id} />
          ))
        }

      </div>
    </div>
  )
}

export default App
