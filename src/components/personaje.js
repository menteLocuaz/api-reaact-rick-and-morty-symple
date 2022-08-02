import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { UnicoPersonaje } from "../funtions/peticiones";

function Personaje() {
  const [personaje, setpernaje] = useState(null);
  useEffect(() => {
    UnicoPersonaje(param.id,setpernaje);
  }, []);

  const param = useParams();
  return (
    <div>
      {personaje != null ? (
        <div key={personaje.id}>
          <h2>Personaje con el id {param.id}</h2>
          <p>Con el nombre {personaje.name}</p>
          <img src={personaje.image} alt={personaje.name}/>
        </div>
      ) : (
        "no hay personaje"
      )}
    </div>
  );
}

export default Personaje;
