import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import SmallButton from "./SmallButton";
import Typography from "@material-ui/core/Typography";


const useStyles = makeStyles({
  root: {
    maxWidth: 345,

    backgroundColor: "#fff",
  },
});

const OtherProjetcs = (props) => {
  const classes = useStyles();

  return (
    <Card className={classes.root} elevation={3}>
      <CardActionArea className={classes.details}>
        <CardMedia
          component="img"
          alt="tech img"
          height="140"
          image={props.image}
          title="Contemplative Reptile"
        />

        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.title}
          </Typography>

          <Typography variant="body2" color="textSecondary" component="p">
            Tech: {props.tech}
          </Typography>
          
        </CardContent>
      </CardActionArea>

      <CardActions>
        <SmallButton name="Source" link={props.linkSource} />
        {
            props.linkAction? <SmallButton name="Action" link={props.linkAction} />:<></>
            }
      </CardActions>
    </Card>
  );
};

export default OtherProjetcs;
