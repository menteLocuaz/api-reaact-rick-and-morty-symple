import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { UnicoPersonaje } from "../funtions/peticiones";

function Personaje() {
  const [personaje, setpernaje] = useState(null);
  useEffect(() => {
    UnicoPersonaje(param.id, setpernaje);
  }, []);

  const param = useParams();
  return (
    <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700  text-white alig p-8 ">
      {personaje != null ? (
        <div key={personaje.id}>
          <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Personaje con el id {param.id}
          </h2>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Con el nombre {personaje.name}
          </p>
          <img
            className="rounded-t-lg object-cover"
            src={personaje.image}
            alt={personaje.name}
          />
        </div>
      ) : (
        "no hay personaje"
      )}
    </div>
  );
}

export default Personaje;
