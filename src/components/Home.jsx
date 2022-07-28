import { useEffect, useState } from "react";
import React from "react";
import "./Home.css";
import CardUsers from "./CardUsers";

const axios = require("axios");

const Home = () => {
  const handelClick = async () => {
    const req = await fetch("http://localhost:8000/");
    const res = await req.json();
    console.log(res);
  };
  const [apiResponse, setApiResponse] = useState({});
  const obtenerPersonajes = async () => {
    const apiRickyMorti = "https://rickandmortyapi.com/api/character/?page=2";
    const infoApi = await axios.get(apiRickyMorti);
    setApiResponse(infoApi.data.results);
  };
  useEffect(() => {
    obtenerPersonajes();
  }, []);
  return (
    <section className="container">
      <button onClick={handelClick}>Contact-Backend</button>
      <h3>Axios method</h3>
      <article className="row">
        {apiResponse.length > 0 &&
          apiResponse.map((character) => (
            <CardUsers
              className="col-sm-10 col-md-5 col-xl-4 mt-1"
              key={character.id}
              id={character.id}
              name={character.name}
              species={character.species}
              gender={character.gender}
              image={character.image}
              episode={character.episode}
              type={character.type}
            />
          ))}

        <button className="btn btn-info" onClick={obtenerPersonajes}></button>
      </article>
    </section>
  );
};
export default Home;
