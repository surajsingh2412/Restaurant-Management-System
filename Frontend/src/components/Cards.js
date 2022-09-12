import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these EPIC Foods!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/samoosa.jpg"
              text="Winner winner Samosa dinner."
              label="Samosa"
              path="/login"
            />
            <CardItem
              src="images/pizza.jpg"
              text="The party cant start without pizza"
              label="Pizza"
              path="/login"
            />
            <CardItem
              src="images/chilichicken.jpg"
              text="Take a bite out of hunger."
              label="Chili Chicken"
              path="/login"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
