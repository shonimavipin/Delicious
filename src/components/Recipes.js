import React from "react";
import { Button } from "react-bootstrap";

import bg2 from "../asstes/bg2.jpg"
import bg6 from "../asstes/bg6.jpg";

export default function Recipes() {
  return (
    <div className="recipe-container">
      {/* Card 1 */}
      <div
        className="recipe-card"
        style={{ backgroundImage: `url(${bg2})` }}
      >
        <div className="overlay"></div>
        <div className="recipe-content">
          <h3>Strawberry Cake</h3>
          <p>Simple & Delicious</p>
          <Button variant="success">See Full Recipe</Button>
        </div>
      </div>

      {/* Card 2 */}
      <div
        className="recipe-card"
        style={{ backgroundImage: `url(${bg6})` }}
      >
        <div className="overlay"></div>
        <div className="recipe-content">
          <h3>Chinese Noodles</h3>
          <p>Simple & Delicious</p>
          <Button variant="success">See Full Recipe</Button>
        </div>
      </div>
    </div>
  );
}
