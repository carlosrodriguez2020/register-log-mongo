import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card, Button } from "react-bootstrap";

function Detail() {
  const [reqLocalStorage, setReqLocalStorage] = useState({});

  const getLcsEpisode = () => {
    const dataLCS = JSON.parse(localStorage.getItem("info"));
    setReqLocalStorage(dataLCS);
  };
  useEffect(() => {
    getLcsEpisode();
  }, []);

  console.log(reqLocalStorage);
  let navigate = useNavigate();
  const backToTarjet = () => {
    navigate("/home");
  };

  return (
    <>
      <h3>Episode</h3>
      <div>
        <button className="btn btn-success" onClick={backToTarjet}>
          Return to Tarjet
        </button>
        <div>
          <Card className="text-center">
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
}

export default Detail;
