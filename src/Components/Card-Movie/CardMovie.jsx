import React from "react";
import "./style.css";

import Card from "react-bootstrap/Card";

const CardMovie = (props) => {
  const slicedText = props.text.slice(0, 200);
  return (
    <Card style={{ width: "100%" }}>
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        <Card.Text>{slicedText}</Card.Text>
        <Card.Text>{props.rilis}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CardMovie;
