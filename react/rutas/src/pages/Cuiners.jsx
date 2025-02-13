import { useLocation } from 'react-router-dom';

export default function Inici() {

  const query = useLocation().search;
  console.log(query);
  const parametres = new URLSearchParams(query);
  // console.log(parametres);
  const nom = parametres.get("nom");
  const restaurant = parametres.get("restaurant");
  console.log(nom);
  console.log(restaurant);
  const tot = parametres.getAll("nom");
  console.log(tot)


    return (
      <div>
        <h2>Cuiners</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quaerat, tempore animi omnis, nesciunt, cupiditate eveniet enim asperiores iste nemo architecto sunt aspernatur! Obcaecati expedita possimus omnis temporibus, voluptatum eveniet!</p>
      </div>
    )
  }
  