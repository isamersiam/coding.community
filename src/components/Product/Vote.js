import React from "react";
import {
  IonCard,
  IonCardContent,
  IonIcon,
  IonItem,
  IonList,
  IonImg,
  IonLabel,
  IonText,
  IonThumbnail,
  IonButton,
} from "@ionic/react";
import {
  chevronUpCircleOutline,
  personCircleOutline,
  chatbubbleEllipsesOutline,
  caretUp,
  timeOutline,
} from "ionicons/icons";

import firebase from "../../firebase";
import productService from "../../services/product";
import { Plugins } from "@capacitor/core";
import UserContext from "../../contexts/UserContext";
import NavHeader from "../../components/Header/NavHeader";
import ProductItem from "../../components/Product/ProductItem";
import ProductPhotos from "../../components/Product/ProductPhotos";
import ProductComment from "../../components/Product/ProductComment";
import CommentModal from "../../components/Product/CommentModal";

const Vote = (props) => {
  const { user } = React.useContext(UserContext);
  const [product, setProduct] = React.useState(null);
  const productId = props.match.params.productId;
  const productRef = firebase.db.collection("products").doc(productId);

  React.useEffect(() => {
    getProduct();
    // eslint-disable-next-line
  }, [productId]);

  function getProduct() {
    productRef.get().then((doc) => {
      setProduct({ ...doc.data(), id: doc.id });
    });
  }

  function handleAddVote() {
    if (!user) {
      props.history.push("/login");
    } else {
      productService
        .addUpvote(user, productId)
        .then((newProduct) => setProduct(newProduct))
        .catch(() => props.history.push("/login"));
    }
  }
  return (
    <IonButton slot="end" onClick={() => handleAddVote()} size="medium">
      <div className="upvote-button_inner">
        <IonIcon icon={caretUp} />
        {product.voteCount}
      </div>
    </IonButton>
  );
};

export default Vote;
