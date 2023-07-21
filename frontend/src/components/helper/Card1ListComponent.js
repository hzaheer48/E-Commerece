import Card from "react-bootstrap/Card";
import slider2 from "../../images/slider2.jpg";
import { MDBIcon } from "mdb-react-ui-kit";
import styles from "../../css/myfile.module.css";
import { useEffect, useState } from "react";
import useWindowDimensions from "../../hooks/useWindowDimensions";

function CardList({width}) {

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Card
        style={{
          width: width, 
          margin: "15px",
          padding: "10px",
          position: "relative",
        }}
      >
        <div style={{ display: "flex", flexDirection: "row" ,alignItems: "center"}}>
          <Card.Img variant="top" src={slider2} style={{ width: "25%", height: "auto" }} />
          <div style={{ marginLeft: "10px"}}>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
            Some quick example text to build on the card title and make up the the
          bulk of the card's content.
            </Card.Text>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default CardList;
