import React, { useState } from "react";
import { Card, Button, ListGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
const axios = require("axios");

function CardUsers({ id, name, gender, image, species, type, className }) {
  let navigate = useNavigate();
  const [reqEpisodes, setReqEpisode] = useState({});
  function sanitizeInfoToShow(prop) {
    return prop === "" ? "no info" : prop;
  }

  const getEpisodes = async () => {
    const episodeApi = `https://rickandmortyapi.com/api/episode/${id}`;
    const dataEpisode = await axios.get(episodeApi);
    const countEpisode = dataEpisode.data;
    localStorage.setItem("info", JSON.stringify(countEpisode));
    setReqEpisode(countEpisode);
    navigate("/detail");
  };

  return (
    <div className={className}>
      <Card className="text-center">
        <Card.Header>{sanitizeInfoToShow(name)}</Card.Header>
        <Card.Body>
          <Card.Img src={image} />
          <ListGroup>
            <ListGroup.Item>{sanitizeInfoToShow(gender)}</ListGroup.Item>
            <ListGroup.Item>{sanitizeInfoToShow(species)}</ListGroup.Item>
            <ListGroup.Item>{sanitizeInfoToShow(type)}</ListGroup.Item>
          </ListGroup>
          <Button variant="primary" onClick={getEpisodes}>
            Episodes
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CardUsers;
