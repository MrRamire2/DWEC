import './App.css';

function App() {
  const titulo = 'Bienvenidos a mi componente App';
  const paginas = 20;
  const clase = {
    nombre: 'DAW',
    curso: '24-25',
    alumnos: 10
  }

  return (
    <div className="App">
      <div className="contenido">
        <h1>{titulo}</h1>
        <p>{paginas}</p>
        <p>{[1,2,3,4,5,6]}</p>
        <p>Nombre de la clase: {clase.nombre}</p>
        <p>Numero aleatorio {Math.random() *1000}</p>
        <p>Fecha: {new Date().toDateString()}</p>
      </div>
    </div>
  );
}

export default App;
