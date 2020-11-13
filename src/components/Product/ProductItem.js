import React from "react";
import ReactImageFallback from "react-image-fallback";
import { withRouter } from "react-router-dom";
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
import UserContext from "../../contexts/UserContext";
import productService from "../../services/product";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import "./ProductItem.css";
import ShowMoreText from "react-show-more-text";
import Vote from "./Vote";
import { CgEnter } from "react-icons/cg";
import defaultImage from "./Images/gif2.gif";

const executeOnClick = (isExpanded) => {
  console.log(isExpanded);
};

const ProductItem = ({ product, history, url, browser }) => {
  const { user } = React.useContext(UserContext);

  const addUpvote = (e) => {
    e.preventDefault();
    e.stopPropagation();
    productService.addUpvote(user, product.id).catch(() => {
      history.pushState("./login");
    });
  };

  return (
    <IonCard>
      <IonCardContent class="ion-no-padding">
        <IonList lines="none">
          <IonItem>
            <IonThumbnail slot="start">
              <ReactImageFallback
                src={product.thumbnail}
                fallbackImage={defaultImage}
                initialImage={defaultImage}
                alt="product"
                className="my-image"
              />
            </IonThumbnail>
            <IonLabel>
              <IonCard
                className="product-title"
                routerLink={url}
                onClick={browser}
                button
              >
                <div className="ion-text-wrap">
                  <strong style={{ fontSize: "1rem", color: "#1c86ee" }}>
                    {product.title}
                    <CgEnter className="enter-icon" />
                  </strong>
                </div>
              </IonCard>

              <div className="ion-text-wrap" style={{ fontSize: "0.8rem" }}>
                <ShowMoreText
                  /* Default options */
                  lines={1}
                  more="Show more"
                  less="Show less"
                  className="content-css"
                  anchorClass="my-anchor-css-class"
                  onClick={executeOnClick}
                  expanded={false}
                  width={1000}
                >
                  {product.description}
                </ShowMoreText>
              </div>

              <p
                style={{
                  alignItems: "center",
                  fontSize: "0.8rem",
                  fontWeight: "normal",
                }}
              >
                <IonIcon
                  icon={chevronUpCircleOutline}
                  style={{ verticalAlign: "middle" }}
                />{" "}
                <IonText style={{ verticalAlign: "middle" }}>
                  {product.voteCount} points
                </IonText>{" "}
                {" | "}
                <IonText
                  icon={personCircleOutline}
                  style={{ verticalAlign: "middle" }}
                />{" "}
                <IonText style={{ verticalAlign: "middle" }}>
                  {product.postedBy.name}
                </IonText>
                {" | "}
                <IonIcon
                  icon={timeOutline}
                  style={{ verticalAlign: "middle" }}
                />{" "}
                <IonText style={{ verticalAlign: "middle" }}>
                  {formatDistanceToNow(product.created)}
                </IonText>
                {product.comments.length > 0 && (
                  <>
                    {" | "}
                    <IonIcon
                      icon={chatbubbleEllipsesOutline}
                      style={{ verticalAlign: "middle" }}
                    />{" "}
                    <IonText style={{ verticalAlign: "middle" }}>
                      {product.comments.length} comments
                    </IonText>
                  </>
                )}
                {""}
              </p>
            </IonLabel>
            <IonButton slot="end" onClick={addUpvote} size="medium">
              <div className="upvote-button_inner">
                <IonIcon icon={caretUp} />
                {product.voteCount}
              </div>
            </IonButton>
          </IonItem>
        </IonList>
      </IonCardContent>
    </IonCard>
  );
};

export default withRouter(ProductItem);
