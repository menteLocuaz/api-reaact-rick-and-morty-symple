import React, { useEffect, useState } from "react";
import { TodoPersonaje } from "../funtions/peticiones";

function Index() {
  const [personajes, setPersonajes] = useState(null);
  useEffect(() => {
    TodoPersonaje(setPersonajes);
  }, []);
  return (
    <div>
      {personajes != null
        ? personajes.map((personaje) => (
            <div key={personaje.id}>
              <a href={`/personaje/${personaje.id}`}>{personaje.name}</a>
              <img src={personaje.image} alt={personaje.name} />
            </div>
          ))
        : "No hay perosnaje"}
    </div>
  );
}

export default Index;
