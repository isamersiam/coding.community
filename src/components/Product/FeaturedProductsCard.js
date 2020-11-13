import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Gif from "../Product/Images/gif3.gif";

import "./FeaturedProductsCard.css";

const useStyles = makeStyles({
  root: {
    minWidth: "100%",
    minHeight: "80px",
    display: "flex",
    justifyContent: "center",
    background: "transparent",
  },
  media: {
    height: 100,
  },
  actionArea: {},
});

const FeaturedProductsCard = (props) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea
        className={classes.actionArea}
        style={{
          flexDirection: "row",
          flexGrow: 1,
          alignItems: "stretch",
          color: "#red",
        }}
      >
        <CardMedia className={classes.media} image={Gif}>
          <CardContent>
            <Typography
              className="typography"
              gutterBottom
              variant="h5"
              component="h2"
            >
              {props.text}
            </Typography>
            <Typography
              className="typography2"
              gutterBottom
              variant="h6"
              component="h6"
            >
              {props.subText}
            </Typography>
          </CardContent>
        </CardMedia>
      </CardActionArea>
    </Card>
  );
};

export default FeaturedProductsCard;
