import React, { useEffect, useState ,useRef} from "react";
import Card from "react-bootstrap/Card";
import slider2 from "../../images/slider2.jpg";
import { MDBIcon } from "mdb-react-ui-kit";
import styles from "../../css/myfile.module.css";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import CardOverlay from "./Card3Component";

function Card1Component({ width }) {
  const { width: screenWidth } = useWindowDimensions();
  const [isExpanded, setExpanded] = useState(false);
  const [display, setDisplay] = useState("none");
  const [showOverlay, setShowOverlay] = useState(false);

  useEffect(() => {
    if (screenWidth <= 768) {
      setExpanded(true);
    } else {
      setExpanded(false);
    }
  }, [screenWidth]);
  
  const handlePlusButtonClick = () => {
    setShowOverlay(!showOverlay);
    document.body.style.overflow = showOverlay ? "auto" : "hidden";
  };

  return (
    <>
      <Card 
        style={{
          width: width,
          margin:"10px",
          padding:"12px"

        }}
        className="m-6 p-2"
        onMouseEnter={() => setDisplay("flex")}
        onMouseLeave={() => setDisplay("none")}
      >
        <Card.Img variant="top" src={slider2} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          {!isExpanded ? (
            <div>
              <button
                className={`${styles.searchIconCard}`}
                style={{
                  position: "absolute",
                  
                  top: "2%",
                  right: "-5%",
                  transform: "translateY(-50%)",
                  borderRadius: "50%",
                  width: "40px",
                  height: "40px",
                  justifyContent: "center",
                  alignItems: "center",
                  display: display,
                }}
                onClick={handlePlusButtonClick}
              >
                <MDBIcon icon="plus" />
              </button>
            </div>
          ) : (
            <button
              className={`${styles.searchIconCard}`}
              style={{
                position: "absolute",
                top: "2%",
                right: "-4%",
                transform: "translateY(-50%)",
                borderRadius: "50%",
                width: "40px",
                height: "40px",
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
              }}
              onClick={handlePlusButtonClick}
            >
              <MDBIcon icon="plus" />
            </button>
          )}
        </Card.Body>
      </Card>
      {showOverlay && <CardOverlay onClose={handlePlusButtonClick} />}
    </>
  );
}

export default Card1Component;
