import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

import Typography from "@material-ui/core/Typography";

import SmallButton from "./SmallButton";


const useStyles = makeStyles({
  root: {
    
    marginTop:'30px',
    backgroundColor: "#fff",
  },
  
});

const TopProject=(props)=> {
  const classes = useStyles();
  const theme = useTheme();

  return (
    
      <Card className={classes.root} elevation={3}>
        <CardActionArea className={classes.details}>
          <CardMedia
            component="img"
            alt="tech img"
            height="200"
            image={props.image}
            title="Contemplative Reptile"
          />
  
          <CardContent>
            <Typography gutterBottom variant="h5" component="h5">
              {props.title}
            </Typography>
  
            <Typography  variant="subtitle1" color="textSecondary">
              Tech: {props.tech}
            </Typography>
            
            <Typography variant="body2" color="textSecondary" component="p">
              {props.describe}
            </Typography>
          </CardContent>
        </CardActionArea>
  
        <CardActions>
          <SmallButton name="Source" link={props.linkSource} />
          {() => {
            if (props.linkAction) {
              return (<SmallButton name="Action" link={props.linkAction} />);
            }
          }}
        </CardActions>
      </Card>
  );
}
export default TopProject;
