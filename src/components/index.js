import React, { useEffect, useState } from "react";
import { TodoPersonaje } from "../funtions/peticiones";

function Index() {
  const [personajes, setPersonajes] = useState(null);
  useEffect(() => {
    TodoPersonaje(setPersonajes);
  }, []);
  return (
    <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700  text-white p-17 px-auto ">
      {personajes != null
        ? personajes.map((personaje) => (
            <div className="p-5" key={personaje.id}>
              <a
                className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white py-2 px-auto"
                href={`/personaje/${personaje.id}`}
              >
                {personaje.name}
              </a>
              <img
                className="rounded-t-lg"
                src={personaje.image}
                alt={personaje.name}
              />
            </div>
          ))
        : "No hay perosnaje"}
    </div>
  );
}

export default Index;
