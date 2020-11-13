import React, { useState } from "react";
import FeaturedCreatorsCard from "./FeaturedCreatorsCard";
import "./FeaturedCreators.css";
import { IonLabel } from "@ionic/react";
import Gif from "../Product/Images/gif3.gif";
import Brad from "../Product/Images/brad.jpg";
import Jesse from "../Product/Images/jesse.jpg";
import Chris from "../Product/Images/chris.jpg";
import Eli from "../Product/Images/eli.jpg";
import Derek from "../Product/Images/derek.jpg";
import Adam from "../Product/Images/adam.jpg";
import Bucky from "../Product/Images/buckyy.jpg";
import Mike from "../Product/Images/mike.jpg";

const FeaturedCreators = () => {
  return (
    <div className="featured-creators-div">
      <IonLabel color="dark">
        <h1 style={{ fontSize: "1.2rem" }}>Featured Content Creators</h1>
      </IonLabel>
      <div className="featured-creators-wrapper">
        <FeaturedCreatorsCard
          href="https://www.youtube.com/user/hussey17"
          image={Brad}
          youtube="https://www.youtube.com/user/hussey17"
          website="https://www.bradhussey.ca/"
          className="featured-creators-card"
          name="Brad Hussey"
        />
        <FeaturedCreatorsCard
          href="https://www.youtube.com/user/JesseAtomic"
          image={Jesse}
          youtube="https://www.youtube.com/user/JesseAtomic"
          website="https://www.youtube.com/user/JesseAtomic"
          className="featured-creators-card"
          name="Jesse Showalter"
        />
        <FeaturedCreatorsCard
          href="https://www.youtube.com/c/ChrisSean/"
          image={Chris}
          youtube="https://www.youtube.com/c/ChrisSean/"
          website="https://www.youtube.com/c/ChrisSean/"
          className="featured-creators-card"
          name="Chris Sean"
        />
        <FeaturedCreatorsCard
          href="https://www.youtube.com/user/derekbanas"
          image={Derek}
          youtube="https://www.youtube.com/user/derekbanas"
          website="https://www.youtube.com/user/derekbanas"
          className="featured-creators-card"
          name="Derek Banas"
        />
        <FeaturedCreatorsCard
          href="https://www.youtube.com/user/flashbuilding"
          image={Adam}
          youtube="https://www.youtube.com/user/flashbuilding"
          website="https://www.youtube.com/user/flashbuilding"
          className="featured-creators-card"
          name="Adam Khoury"
        />
        <FeaturedCreatorsCard
          href="https://www.youtube.com/user/thenewboston"
          image={Bucky}
          youtube="https://www.youtube.com/user/thenewboston"
          website="https://thenewboston.com/"
          className="featured-creators-card"
          name="Bucky Roberts"
        />
        <FeaturedCreatorsCard
          href="https://www.youtube.com/user/mlwebco"
          image={Mike}
          youtube="https://www.youtube.com/user/mlwebco"
          website="https://www.youtube.com/user/mlwebco"
          className="featured-creators-card"
          name="Mike Locke"
        />
      </div>
    </div>
  );
};

export default FeaturedCreators;
