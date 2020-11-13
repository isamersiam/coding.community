import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { IonLabel, IonItem } from "@ionic/react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { AiFillYoutube, AiFillHome } from "react-icons/ai";
import "./FeaturedCreatorsCard.css";
import Gif from "../Product/Images/gif3.gif";

const useStyles = makeStyles({
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  pos: {
    marginBottom: 12,
  },
});

const FeaturedCreatorsCard = (props) => {
  const classes = useStyles();

  return (
    <div className="card-container">
      {/* <IonItem color="dark"> */}
      <Card className="card">
        <a target="_blank" rel="noopener noreferrer" href={props.href}>
          <CardContent className="card-content">
            <CardMedia className="card-image" image={props.image} />
            <Typography className="card-text" gutterBottom>
              {props.name}
            </Typography>
            <CardActions className="card-actions" style={{ display: "flex" }}>
              <a target="_blank" rel="noopener noreferrer" href={props.youtube}>
                <AiFillYoutube style={{ color: " #fff" }} />
              </a>
              <a target="_blank" rel="noopener noreferrer" href={props.website}>
                <AiFillHome style={{ color: "#fff" }} />
              </a>
            </CardActions>
          </CardContent>
        </a>
      </Card>
      {/* </IonItem> */}
    </div>
  );
};

export default FeaturedCreatorsCard;
