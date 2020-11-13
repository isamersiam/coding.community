import React, { useState } from "react";
import ItemsCarousel from "react-items-carousel";
import { ImNext, ImPrevious } from "react-icons/im";
import FeaturedProductsCard from "./FeaturedProductsCard";
import { IonLabel } from "@ionic/react";
import "./FeaturedProducts.css";

const FeaturedProducts = () => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;
  return (
    <div style={{ padding: `0 ${chevronWidth + 10}px` }}>
      <IonLabel color="dark">
        <h1 style={{ fontSize: "1.2rem" }}>Featured Resources</h1>
      </IonLabel>
      <ItemsCarousel
        requestToChangeActive={setActiveItemIndex}
        infiniteLoop={true}
        activeItemIndex={activeItemIndex}
        disableSwipe={false}
        numberOfCards={2}
        gutter={20}
        leftChevron={<ImPrevious className="caret" />}
        rightChevron={<ImNext className="caret" />}
        outsideChevron
        chevronWidth={chevronWidth}
        className="Carousel"
      >
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.freecodecamp.com"
        >
          <FeaturedProductsCard
            text="freeCodeCamp"
            subText="Learn to code at home. Build projects. Earn certifications."
            className="Product-Card"
          />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.w3schools.com"
        >
          <FeaturedProductsCard
            text="w3schools"
            subText="The wolds largest web developer site."
            className="Product-Card"
          />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.youtube.com/user/learncodeacademy"
        >
          <FeaturedProductsCard
            text="LearnCode.academy"
            subText="Web tutorials made from 100% organic awesome."
            className="Product-Card"
          />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.codecademy.com/"
        >
          <FeaturedProductsCard
            text="Codecademy"
            subText="Join the millions learning to code with Codecademy."
            className="Product-Card"
          />
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://hackr.io/">
          <FeaturedProductsCard
            text="hackr.io"
            subText="Find the best programming courses and tutorials."
            className="Product-Card"
          />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="mailto: hello@coding.community?subject=I want to get featured!&body=Send me more info :)"
        >
          <FeaturedProductsCard
            text="Get Featured"
            subText="Click Here!"
            className="Product-Card"
          />
        </a>
      </ItemsCarousel>
    </div>
  );
};

export default FeaturedProducts;
