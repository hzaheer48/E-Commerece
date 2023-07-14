import Card from "react-bootstrap/Card";
import slider2 from "../../images/slider2.jpg";
import { MDBIcon } from "mdb-react-ui-kit";
import styles from "../../css/myfile.module.css";
import { useState } from "react";

function Card1Component({ width }) {
  const [display, setDisplay] = useState('none');

  return (
    <Card
      style={{
        width: width,
        margin: "15px",
        padding: "10px",
        position: "relative",
      }}
      onMouseEnter={()=>setDisplay('flex')}
      onMouseLeave={()=>setDisplay('none')}
    >
      <Card.Img variant="top" src={slider2} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the the
          bulk of the card's content.
        </Card.Text>
        <button
          className={`${styles.searchIcon}`}
          style={{
            position: "absolute",
            top: "2%",
            right: "-8%",
            transform: "translateY(-50%)",
            borderRadius: "50%",
            width: "40px",
            height: "40px",
            justifyContent: "center",
            alignItems: "center",
            display : display,
            
          }}
        >
          <MDBIcon icon="search" />
        </button>
        <button
          className={`${styles.searchIcon}`}
          style={{
            position: "absolute",
            top: "10%",
            right: "-8%",
            transform: "translateY(-50%)",
            borderRadius: "50%",
            width: "40px",
            height: "40px",
            justifyContent: "center",
            alignItems: "center",
            display : display
          }}
        >
          <MDBIcon icon="plus" />
        </button>
      </Card.Body>
    </Card>
  );
}

export default Card1Component;
