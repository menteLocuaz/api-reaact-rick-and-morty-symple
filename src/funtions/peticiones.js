import axios from "axios";

const TodoPersonaje = async (state) => {
  const peticion = await axios.get("https://rickandmortyapi.com/api/character");
  state(peticion.data.results);
};

const UnicoPersonaje = async (id, state) => {
  const peticion = await axios.get(
    `https://rickandmortyapi.com/api/character/${id}`
  );
  state(peticion.data);
};

export { TodoPersonaje, UnicoPersonaje };
