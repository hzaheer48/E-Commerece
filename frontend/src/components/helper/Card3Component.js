import React from "react";
import { MDBIcon } from "mdb-react-ui-kit";

const CardOverlay = ({ onClose }) => {
  // Function to prevent scrolling when the overlay is open
  const handleOverlayScroll = (e) => {
    e.stopPropagation();
    e.preventDefault();
  };

  // Disable scrolling when the overlay is open
  document.body.style.overflow = "hidden";

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        zIndex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          padding: "20px",
          backgroundColor: "white",
          position: "relative",
          maxWidth: "500px",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <h3 style={{ marginBottom: "10px" }}>Price</h3>
        <h4 style={{ color: "#1E5592", marginBottom: "20px" }}>$19.99</h4>
        <form style={{ marginBottom: "20px" }}>
          <label>
            Quantity:
            <input
              type="number"
              min="1"
              defaultValue="1"
              style={{
                borderRadius: "20px",
                padding: "5px 8px",
                border: "1px solid #ccc",
                marginLeft: "10px",
                fontSize: "14px",
              }}
            />
          </label>
        </form>

        <p style={{ marginBottom: "20px" }}>
          Tax included. Shipping calculated at checkout.
        </p>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <button
            style={{
              marginRight: "10px",
              borderRadius: "20px",
              padding: "10px 20px",
              background: "white",
              border: "1px solid #ccc",
              marginBottom: "10px",
            }}
          >
            Add to Cart
          </button>
          <button
            style={{
              borderRadius: "20px",
              padding: "10px 20px",
              background: "#1E5592",
              color: "white",
              border: "none",
            }}
          >
            Buy Now
          </button>
        </div>

        <button
          style={{
            position: "absolute",
            top: "-10px",
            right: "-10px",
            borderRadius: "50%",
            width: "40px",
            height: "40px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "#1E5592",
            color: "white",
            border: "none",
          }}
          onClick={onClose}
        >
          <MDBIcon icon="times" />
        </button>
      </div>
    </div>
  );
};

export default CardOverlay;
