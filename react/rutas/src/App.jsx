import './App.css'
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import Inici from './pages/Inici';
import Cuiners from './pages/Cuiners';
import Plats from './pages/Plats';
import Recepta from './pages/Recepta';



function App() {

  return (
    <div className='App'>
      <BrowserRouter>
        <nav>
          <h1>Les Meves Receptes</h1>
          <NavLink exact to="/">Inici</NavLink>
          <NavLink to="/Cuiners">Cuiners</NavLink>
          <NavLink to="/Plats">Plats</NavLink>
        </nav>
        <Switch>
          <Route exact path="/">
            <Inici />
          </Route>
          <Route path="/Cuiners">
            <Cuiners />
          </Route>
          <Route path="/Plats">
            <Plats />
          </Route>
          <Route path="/receptes/:id">
            <Recepta />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
