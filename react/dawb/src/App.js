import { useState } from 'react';
import './App.css';
import AsignaturaForm from './components/AsignaturaForm';
import AsignaturaLista from './components/AsignaturaLista';


// useEffect


function App() {
  
  const [actualizar, setActualizar] = useState(false);

  return (
      <div className="App">
          <AsignaturaForm setActualizar={setActualizar} />
          <AsignaturaLista actualizar={actualizar} />
      </div>
  );
}

export default App;
