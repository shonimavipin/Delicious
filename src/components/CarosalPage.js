import React from "react";
import { Carousel, Button } from "react-bootstrap";
import bg1 from "../asstes/bg1.jpg";
import bg6 from "../asstes/bg6.jpg";

export default function CarosalPage() {
  return (
    <Carousel fade interval={3000}>
      <Carousel.Item>
        <img className="d-block w-100" src={bg1} alt="First slide" />
        <Carousel.Caption className="custom-caption">
          <div className="caption-box">
            <h3>Delicious Homemade Burger</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              tristique nisl vitae luctus sollicitudin. Fusce consectetur sem eget
              dui tristique, ac posuere arcu varius.
            </p>
            <Button variant="success">See Recipe</Button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src={bg6} alt="Second slide" />
        <Carousel.Caption className="custom-caption">
          <div className="caption-box">
            <h3>Fresh Asian Noodles</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              tristique nisl vitae luctus sollicitudin. Fusce consectetur sem eget
              dui tristique, ac posuere arcu varius.
            </p>
            <Button variant="success">See Recipe</Button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}




