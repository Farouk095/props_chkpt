import React from "react";
import { Card } from "react-bootstrap";
import '../App.css';

//cards imported from bootstrap.
//style={{ width: "18rem", margin: "10px" }}
const Player = ({ name, team, nationality, jerseyNumber, age, imageUrl }) => {
  return (
    <Card className="Card">
      <Card.Img style={{ width: "400px" }} variant="top" src={imageUrl} />

      <Card.Body>
        <Card.Title>Name: {name}</Card.Title>
        <Card.Text>Team: {team}</Card.Text>
        <Card.Text>Nationality: {nationality}</Card.Text>
        <Card.Text>Jersey Number: {jerseyNumber}</Card.Text>
        <Card.Text>Age: {age}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Player;
