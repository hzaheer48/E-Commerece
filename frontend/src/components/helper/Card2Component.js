import Card from "react-bootstrap/Card";
import { useState } from "react";
function Card2Component({ width }) {
  const [value, setValue] = useState(100);
  return (
    <Card style={{ width: width, margin: "10px", padding: "10px" }}>
      <Card.Body>
        <Card.Title>Filter</Card.Title>
        <hr />
        <Card.Title>Price Range</Card.Title>
        <hr />
        <Card.Text>Filter by price</Card.Text>
        <Card.Title>Gender</Card.Title>
        <hr />
        <div className="m-1 d-flex justify-content-between">
          <Card.Text>Men</Card.Text>
          <Card.Text>(48)</Card.Text>
        </div>
        <div className="m-1 d-flex justify-content-between">
          <Card.Text>Women</Card.Text>
          <Card.Text>(72)</Card.Text>
        </div>
        <Card.Title>Stock Status</Card.Title>
        <hr />
        <div className="m-1 d-flex justify-content-between">
          <div>
            <input type="radio" />
            <label className="m-1">In stock</label>
          </div>
          <label>(72)</label>
        </div>
        <div className="m-1 d-flex justify-content-between">
          <div>
            <input type="radio" />
            <label className="m-1">Out of stock</label>
          </div>
          <label>(72)</label>
        </div>
        <div className="m-1 d-flex justify-content-between">
          <div>
            <input type="radio" />
            <label className="m-1">On sale</label>
          </div>
          <label>(72)</label>
        </div>
        <Card.Title className="m-2">Brand</Card.Title>
        <hr></hr>
        <div class="dropdown" className="m-1">
          <button
            class="btn btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Dropdown button
          </button>
          <ul class="dropdown-menu">
            <li>
              <a class="dropdown-item" href="#">
                Action
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Another action
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Something else here
              </a>
            </li>
          </ul>
        </div>
      </Card.Body>
    </Card>
  );
}

export default Card2Component;
