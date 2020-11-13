import React from "react";
import FeaturedProducts from "../components/Product/FeaturedProducts";
import FeaturedCreators from "../components/Product/FeaturedCreators";
import {
  IonPage,
  IonContent,
  IonLabel,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
  IonItem,
  IonIcon,
  IonButton,
  IonRow,
  IonCol,
  IonGrid,
} from "@ionic/react";
import {
  listCircleOutlinepin,
  pin,
  wifi,
  wine,
  warning,
  walk,
} from "ionicons/icons";
import SmallHeader from "../components/Header/SmallHeader";
import LargeHeader from "../components/Header/LargeHeader";
import ProductList from "../components/Product/ProductList";

const Home = (props) => {
  return (
    <>
      <IonPage>
        <SmallHeader title="Coding.Community"></SmallHeader>
        <IonContent color="medium" fullscreen>
          <LargeHeader title="Coding.Community" />
          <br></br>
          <FeaturedProducts />
          <br></br>
          <FeaturedCreators />
          <ProductList location={props.location} />
        </IonContent>
      </IonPage>
    </>
  );
};

export default Home;
