import React from "react";
import { useNavigate } from "react-router-dom";
import { Carousel, Button } from "react-bootstrap";
import bg1 from "../asstes/bg1.jpg";
import bg2 from "../asstes/bg2.jpg";
import bg6 from "../asstes/bg6.jpg";
import "./Style.css";
import { StarFill, Star } from "react-bootstrap-icons";

import r1 from "../asstes/r1.jpg";
import r2 from "../asstes/r2.jpg";
import r3 from "../asstes/r3.jpg";
import r4 from "../asstes/r4.jpg";
import r5 from "../asstes/r5.jpg";
import r6 from "../asstes/r6.jpg";
import heroBg from "../asstes/hero-bg.jpg";
import pasta from "../asstes/recepi2.jpg";
import bread from "../asstes/recepi2.jpg";
import scallops from "../asstes/recip3.jpg";
import fruits from "../asstes/recipe4.jpg";
import macaroons from "../asstes/recip5.jpg";
import tart from "../asstes/recepi6.jpg";

function StarRating({ rating }) {
  return (
    <div style={{ color: "#f4b400", fontSize: "14px" }}>
      {Array.from({ length: 5 }).map((_, i) =>
        i < rating ? <span key={i}>&#9733;</span> : <span key={i}>&#9734;</span>
      )}
    </div>
  );
}
const recepies = [
  { title: "Homemade Italian Pasta", date: "January 04, 2018", image: pasta, rating: 4, comments: 2 },
  { title: "Baked Bread", date: "January 04, 2018", image: bread, rating: 4, comments: 2 },
  { title: "Scallops on Salt", date: "January 04, 2018", image: scallops, rating: 4, comments: 2 },
  { title: "Fruits on Plate", date: "January 04, 2018", image: fruits, rating: 4, comments: 2 },
  { title: "Macaroons", date: "January 04, 2018", image: macaroons, rating: 4, comments: 2 },
  { title: "Chocolate Tart", date: "January 04, 2018", image: tart, rating: 4, comments: 2 },
 
];
// Recipe Data
const recipes = [
  { id: 1, title: "Sushi Easy Receipy", image: r1, rating: 4 },
  { id: 2, title: "Homemade Burger", image: r2, rating: 4 },
  { id: 3, title: "Vegan Smoothie", image: r3, rating: 4 },
  { id: 4, title: "Pumpkin Soup", image: r4, rating: 5 },
  { id: 5, title: "Fried Egg Plate", image: r5, rating: 5 },
  { id: 6, title: "Healthy Breakfast", image: r6, rating: 5 },
];

// ⭐ Helper function for star ratings
const renderStars = (rating) => (
  <div className="mt-2 d-flex justify-content-center">
    {Array.from({ length: 5 }).map((_, i) =>
      i < rating ? (
        <StarFill key={i} color="orange" size={16} />
      ) : (
        <Star key={i} color="orange" size={16} />
      )
    )}
  </div>
);
function RecipeCard({ recipe }) {
  const navigate = useNavigate();
  return (
    <div
      style={{
        display: "flex",
        background: "#fff",
        borderRadius: "10px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        padding: "12px",
        transition: "transform 0.2s ease",
        cursor: "pointer",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      <img
        src={recipe.image}
        alt={recipe.title}
        style={{
          width: 80,
          height: 80,
          objectFit: "cover",
          borderRadius: 8,
          marginRight: 12,
        }}
      />
      <div>
        <div style={{ color: "#48b04b", fontSize: 13, marginBottom: 2 }}>
          {recipe.date}
        </div>
        <div style={{ fontWeight: "bold", fontSize: 17, marginBottom: 6 }}>
          {recipe.title}
        </div>
        <StarRating rating={recipe.rating} />
        <div style={{ color: "#666", fontSize: 13, marginTop: 4 }}>
          {recipe.comments} Comments
        </div>
        <Button variant="success" onClick={() => navigate("/RecipePage")}>See Recipe</Button>
      </div>
    </div>
  );
}
// Card 1: Quote Card
const QuoteCard = () => (
  <div style={{
    border: "6px solid #4EC34B",
    padding: "40px 30px",
    width: "320px",
    boxSizing: "border-box",
    background: "#fff",
    marginRight: "32px"
  }}>
    <div style={{ textAlign: "center", marginBottom: 30 }}>
      <span style={{
        color: "#4EC34B",
        fontSize: 32,
        fontWeight: "bold",
        fontFamily: "serif"
      }}>&quot;</span>
    </div>
    <div style={{
      fontSize: 22,
      color: "#555",
      fontWeight: 500,
      textAlign: "center",
      marginBottom: 32
    }}>
      Nothing is better than going home to family and eating good food and relaxing
    </div>
    <div style={{
      textAlign: "center",
      color: "#555",
      marginBottom: 32
    }}>
      John Smith
    </div>
    <div style={{
      display: "flex",
      justifyContent: "space-between",
      fontSize: 14,
      color: "#4EC34B",
      opacity: 0.8
    }}>
      <span>January 04, 2018</span>
      <span style={{ color: "#888" }}>2 Comments</span>
    </div>
  </div>
);

// Card 2: Subscribe Newsletter
const SubscribeCard = () => (
  <div style={ {paddingTop:"20px"}}>
   <h3>Subscribe to our newsletter</h3>
   <div style={{
   width: "320px",
    boxSizing: "border-box",
    position: "relative",
    marginRight: "32px",
    background: "#111"
  }}>
    {/* Heading OUTSIDE card, handled by parent */}
   
    <div style={{
      border: "4px solid #4EC34B",
      padding: "24px 18px 50px 18px",
      position: "relative",
      background: "#111",
      boxSizing: "border-box",
      zIndex: 1,
      minHeight: "350px"
    }}>
      <input
        type="email"
        placeholder="Subscribe to newsletter"
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "16px",
          border: "2px solid #4EC34B",
          fontSize: 16,
          borderRadius: 2,
          outline: "none",
          background: "#fff",
          color: "#222"
        }}
      />
      <button
        style={{
          width: "100%",
          padding: "12px 0",
          background: "#4EC34B",
          color: "#fff",
          fontWeight: 600,
          fontSize: 18,
          border: "none",
          borderRadius: 2,
          cursor: "pointer",
          marginBottom: "24px"
        }}
      >
        Subscribe
      </button>
      <div style={{
        fontSize: 13,
        color: "#fff",
        opacity: 0.85,
        position: "absolute",
        left: "18px",
        right: "18px",
        bottom: "28px",
        zIndex: 2
      }}>
        Fusce nec ante vitae lacus aliquet vulputate. Donec scelerisque accumsan molestie. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia.
      </div>
      {/* Background burger image */}
      <img
        src="https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=320&q=80"
        alt="Burger"
        style={{
          position: "absolute",
          left: 0,
          bottom: 0,
          width: "100%",
          height: "120px",
          objectFit: "cover",
          opacity: 0.22,
          zIndex: 0,
        }}
      />
    </div>
  </div>
  </div>
);


// Card 3: Burger Cook Book Promo
const BurgerCookBookCard = () => (
  <div style={{
    width: "320px",
    boxSizing: "border-box",
    position: "relative",
    overflow: "hidden"
  }}>
    {/* Burger Image */}
    <img
      src="https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=320&q=80"
      alt="Burger Cook Book"
      style={{ width: "100%", display: "block" }}
    />
    {/* Overlay */}
    <div style={{
      position: "absolute",
      top: 0, left: 0,
      width: "100%", height: "100%",
      background: "rgba(0,0,0,0.75)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      border: "2px solid #4EC34B",
      boxSizing: "border-box"
    }}>
      <div style={{
        position: "absolute",
        top: 18,
        right: 18,
        background: "#4EC34B",
        color: "#fff",
        padding: "8px 18px",
        borderRadius: "50px",
        fontWeight: "bold",
        fontSize: 15
      }}>
        SPECIAL PRICE
      </div>
      <div style={{
        color: "#4EC34B",
        fontWeight: 700,
        fontSize: 18,
        marginBottom: 14,
        marginTop: 40
      }}>
        OUT NOW
      </div>
      <div style={{
        color: "#fff",
        fontWeight: 600,
        fontSize: 22,
        marginBottom: 12,
        textAlign: "center"
      }}>
        The Burger Cook Book
      </div>
      <div style={{
        color: "#fff",
        fontSize: 15,
        textAlign: "center",
        opacity: 0.8,
        margin: "0 26px"
      }}>
        Fusce nec ante vitae lacus aliquet vulputate. Donec scelerisque accumsan molestie.
      </div>
    </div>
  </div>
);

export default function HomePage() {
  const navigate = useNavigate();
  return (
    <div>
      {/* Carousel */}
      <Carousel fade interval={3000}>
        {/* Slide 1 */}
        <Carousel.Item>
          <img className="d-block w-100" src={bg1} alt="First slide" />
          <Carousel.Caption className="custom-caption">
            <div className="caption-box">
              <h3>Delicious Homemade Burger</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                tristique nisl vitae luctus sollicitudin. Fusce consectetur sem
                eget dui tristique, ac posuere arcu varius.
              </p>
              <Button variant="success" onClick={() => navigate("/RecipePage")}>See Recipe</Button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>

        {/* Slide 2 */}
        <Carousel.Item>
          <img className="d-block w-100" src={bg6} alt="Second slide" />
          <Carousel.Caption className="custom-caption">
            <div className="caption-box">
              <h3>Fresh Asian Noodles</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                tristique nisl vitae luctus sollicitudin. Fusce consectetur sem
                eget dui tristique, ac posuere arcu varius.
              </p>
              <Button variant="success" onClick={() => navigate("/RecipePage")}>See Recipe</Button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* Recipe Cards Row */}
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
            <Button variant="success" onClick={() => navigate("/RecipePage")}>See Full Recipe</Button>
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
            <Button variant="success" onClick={() => navigate("/RecipePage")}>See Full Recipe</Button>
          </div>
        </div>
      </div>

      {/* Recipes Grid */}
      <div className="container my-6">
  <h4 className="text-center best-recipes-heading">The best Recipes</h4>

  <div className="row">
    {recipes.map((recipe) => (
      <div
        key={recipe.id}
        className="col-12 col-sm-6 col-md-4 mb-4 d-flex justify-content-center"
      >
        <div className="recipe-grid-card text-center p-3">
          <img
            src={recipe.image}
            alt={recipe.title}
            className="recipe-grid-img img-fluid"
          />
          <h5 className="mt-3">{recipe.title}</h5>
          {renderStars(recipe.rating)}
        </div>
      </div>
    ))}
  </div>
</div>
<section
  className="hero-section d-flex align-items-center justify-content-center text-center"
  style={{
    background: `url(${heroBg}) no-repeat center center/cover`,
    position: "relative", // needed for ::before overlay
    height: "100vh", // full screen height
    color: "white",
  }}
>
  <div className="container">
    <h1 className="hero-title">Gluten Free Receipies</h1>
    <p className="hero-subtitle">
      Fusce nec ante vitae lacus aliquet vulputate. Donec scelerisque accumsan
      molestie. Vestibulum ante ipsum primis in faucibus orci luctus et
      ultrices posuere cubilia Curae.
    </p>
    <button className="btn btn-success btn-lg" onClick={() => navigate("/RecipePage") }>
      Discover All The Receipies
    </button>
  </div>
</section>
<div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "20px",
        padding: "20px",
        maxWidth: "1200px",
        margin: "40px auto",
      }}
    >
      { recepies.map((recipe, idx) => (
        <RecipeCard key={idx} recipe={recipe} />
      ))}
    </div>
 <div
    style={{
      display: "flex",
      justifyContent: "center", // centers all 3 cards
      alignItems: "flex-start", // align top edges
      gap: "32px", // space between cards
      margin: "40px auto",
      flexWrap: "wrap", // makes it responsive (stacks on small screens)
      maxWidth: "1100px",
    }}
  >
    <QuoteCard />
    <SubscribeCard />
    <BurgerCookBookCard />
  </div>
    </div>
  );
}

    